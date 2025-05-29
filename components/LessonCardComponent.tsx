
import React, { useState, useEffect } from 'react';
import { Lesson, OutputType } from '../types';
import QuizComponent from './QuizComponent';
import { evaluatePythonCode, isApiKeyAvailable as checkApiKey } from '../services/geminiService';
import { PlayIcon, LightbulbIcon, BookOpenIcon, CodeBracketIcon, BeakerIcon } from './icons';

interface LessonCardComponentProps {
  lesson: Lesson;
  onMarkCompleted: (lessonId: string) => void;
}

const LessonCardComponent: React.FC<LessonCardComponentProps> = ({ lesson, onMarkCompleted }) => {
  const [userCode, setUserCode] = useState<string>(lesson.exercise.template);
  const [output, setOutput] = useState<string>('Ejecuta tu código o la solución para ver el resultado aquí...');
  const [outputType, setOutputType] = useState<OutputType>(OutputType.Default);
  const [apiKeyAvailable, setApiKeyAvailable] = useState<boolean>(false);

  useEffect(() => {
    setUserCode(lesson.exercise.template);
    setOutput('Ejecuta tu código o la solución para ver el resultado aquí...');
    setOutputType(OutputType.Default);
    setApiKeyAvailable(checkApiKey());
  }, [lesson]);

  const handleRunCode = async () => {
    if (!apiKeyAvailable) {
      setOutput("Error: La clave API de Gemini no está configurada. La evaluación de código está deshabilitada.");
      setOutputType(OutputType.Error);
      return;
    }
    setOutputType(OutputType.Loading);
    setOutput('Evaluando tu código con IA...');
    try {
      const result = await evaluatePythonCode(userCode);
      setOutput(result);
      if (result.toLowerCase().startsWith('error:')) {
        setOutputType(OutputType.Error);
      } else {
        setOutputType(OutputType.Success);
        onMarkCompleted(lesson.id); // Mark completed on successful run
      }
    } catch (error) {
      console.error("Error running code:", error);
      setOutput(error instanceof Error ? error.message : "Ocurrió un error desconocido.");
      setOutputType(OutputType.Error);
    }
  };

  const handleShowSolution = () => {
    setUserCode(lesson.exercise.solution);
    setOutput('Solución cargada. ¡Intenta ejecutarla para entenderla!');
    setOutputType(OutputType.Info);
  };

  const handleQuizAnswered = (isCorrect: boolean) => {
    if (isCorrect) {
      onMarkCompleted(lesson.id);
    }
  };
  
  const getOutputClasses = () => {
    switch (outputType) {
      case OutputType.Success:
        return 'bg-emerald-900/50 border-emerald-700 text-emerald-200';
      case OutputType.Error:
        return 'bg-red-900/50 border-red-700 text-red-200';
      case OutputType.Loading:
        return 'bg-sky-900/50 border-sky-700 text-sky-200 animate-pulse';
      case OutputType.Info:
        return 'bg-blue-900/50 border-blue-700 text-blue-200';
      default:
        return 'bg-slate-900/70 border-slate-700 text-slate-400';
    }
  };

  return (
    <div className="bg-slate-800/50 backdrop-blur-md shadow-2xl rounded-xl p-6 md:p-8 mx-2 md:mx-0 border border-slate-700/50">
      <h2 className="text-3xl font-bold text-sky-400 mb-6 pb-3 border-b-2 border-sky-800">{lesson.title}</h2>

      {!apiKeyAvailable && outputType !== OutputType.Error && (
         <div className="mb-6 p-4 bg-yellow-800/70 text-yellow-200 border border-yellow-700 rounded-lg">
            <strong>Advertencia:</strong> La clave API de Gemini no está configurada. La ejecución de código por IA está deshabilitada. Podrás ver los ejercicios, pero no ejecutarlos.
         </div>
      )}

      {/* Theory Section */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-emerald-400 mb-3 flex items-center">
          <BookOpenIcon className="w-7 h-7 mr-2 text-emerald-400" />
          📚 Teoría
        </h3>
        <div className="prose prose-invert max-w-none text-slate-300 prose-code:text-amber-400 prose-strong:text-sky-300 prose-headings:text-sky-400" 
             dangerouslySetInnerHTML={{ __html: lesson.theory }} />
      </section>

      {/* Code Example Section */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-amber-400 mb-3 flex items-center">
            <CodeBracketIcon className="w-7 h-7 mr-2 text-amber-400" />
            💻 Ejemplo de Código
        </h3>
        <pre className="bg-slate-900 p-4 rounded-lg text-sm text-slate-200 overflow-x-auto shadow-inner border border-slate-700">
          <code>{lesson.example}</code>
        </pre>
      </section>

      {/* Exercise Section */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-pink-400 mb-3 flex items-center">
          <BeakerIcon className="w-7 h-7 mr-2 text-pink-400" />
          🎯 Ejercicio Práctico
        </h3>
        <p className="text-slate-300 mb-4">{lesson.exercise.description}</p>
        <textarea
          value={userCode}
          onChange={(e) => setUserCode(e.target.value)}
          placeholder="Escribe tu código Python aquí..."
          className="w-full h-48 p-3 bg-slate-900 text-slate-200 border border-slate-700 rounded-lg font-mono text-sm focus:ring-2 focus:ring-pink-500 focus:border-pink-500 shadow-inner resize-y"
          spellCheck="false"
        />
        <div className="mt-4 flex flex-wrap gap-3 items-center">
          <button
            onClick={handleRunCode}
            disabled={outputType === OutputType.Loading || !apiKeyAvailable}
            className="px-5 py-2.5 bg-pink-600 hover:bg-pink-500 disabled:bg-slate-500 text-white font-semibold rounded-lg shadow-md transition-colors duration-150 flex items-center"
          >
            <PlayIcon className="w-5 h-5 mr-2" />
            {outputType === OutputType.Loading ? 'Ejecutando...' : 'Ejecutar Código'}
          </button>
          <button
            onClick={handleShowSolution}
            className="px-5 py-2.5 bg-slate-600 hover:bg-slate-500 text-white font-semibold rounded-lg shadow-md transition-colors duration-150 flex items-center"
          >
            <LightbulbIcon className="w-5 h-5 mr-2" />
            Ver Solución
          </button>
        </div>
        <div className={`mt-4 p-4 rounded-lg font-mono text-sm whitespace-pre-wrap min-h-[60px] border shadow-inner ${getOutputClasses()}`}>
          {output}
        </div>
      </section>

      {/* Quiz Section */}
      <section>
        <QuizComponent quiz={lesson.quiz} onQuizAnswered={handleQuizAnswered} lessonId={lesson.id} />
      </section>
    </div>
  );
};

export default LessonCardComponent;
