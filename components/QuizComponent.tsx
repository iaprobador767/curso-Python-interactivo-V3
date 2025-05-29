
import React, { useState } from 'react';
import { Quiz, QuizOption as QuizOptionType } from '../types';
import { CheckCircleIcon, XCircleIcon, QuestionMarkCircleIcon } from './icons';


interface QuizComponentProps {
  quiz: Quiz;
  onQuizAnswered: (isCorrect: boolean) => void;
  lessonId: string; // To reset state if lesson changes
}

const QuizComponent: React.FC<QuizComponentProps> = ({ quiz, onQuizAnswered, lessonId }) => {
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState<boolean>(false);

  // Reset state when lessonId changes (meaning new quiz)
  React.useEffect(() => {
    setSelectedOptionIndex(null);
    setSubmitted(false);
  }, [lessonId, quiz]);

  const handleOptionClick = (index: number) => {
    if (submitted) return;
    setSelectedOptionIndex(index);
  };

  const handleSubmit = () => {
    if (selectedOptionIndex === null) return;
    setSubmitted(true);
    const isCorrect = quiz.options[selectedOptionIndex].isCorrect;
    onQuizAnswered(isCorrect);
  };

  const getOptionClasses = (option: QuizOptionType, index: number): string => {
    let baseClasses = "block w-full text-left p-3 my-2 rounded-lg border-2 transition-all duration-150 cursor-pointer focus:outline-none focus:ring-2 focus:ring-opacity-50";
    if (!submitted) {
      return `${baseClasses} ${selectedOptionIndex === index ? 'bg-sky-700 border-sky-500 ring-sky-500' : 'bg-slate-700 hover:bg-slate-600 border-slate-600'}`;
    }
    // Submitted
    if (option.isCorrect) {
      return `${baseClasses} bg-emerald-700 border-emerald-500 text-emerald-100 cursor-default`;
    }
    if (index === selectedOptionIndex && !option.isCorrect) {
      return `${baseClasses} bg-red-700 border-red-500 text-red-100 cursor-default`;
    }
    return `${baseClasses} bg-slate-700 border-slate-600 text-slate-400 cursor-default opacity-70`;
  };

  return (
    <div className="bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-700">
      <h3 className="text-xl font-semibold text-amber-400 mb-1 flex items-center">
        <QuestionMarkCircleIcon className="w-6 h-6 mr-2 text-amber-400" />
        Pregunta de Repaso
      </h3>
      <p className="text-slate-300 mb-4" dangerouslySetInnerHTML={{ __html: quiz.question }}></p>
      
      <div>
        {quiz.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionClick(index)}
            disabled={submitted}
            className={getOptionClasses(option, index)}
          >
            {option.text}
            {submitted && option.isCorrect && <CheckCircleIcon className="w-5 h-5 inline-block ml-2 text-emerald-300" />}
            {submitted && index === selectedOptionIndex && !option.isCorrect && <XCircleIcon className="w-5 h-5 inline-block ml-2 text-red-300" />}
          </button>
        ))}
      </div>

      {!submitted && selectedOptionIndex !== null && (
        <button
          onClick={handleSubmit}
          className="mt-4 w-full bg-sky-600 hover:bg-sky-500 text-white font-semibold py-2.5 px-4 rounded-lg transition-colors duration-150 flex items-center justify-center"
        >
          Enviar Respuesta
        </button>
      )}

      {submitted && selectedOptionIndex !== null && (
        <div className={`mt-4 p-3 rounded-lg text-center font-medium ${quiz.options[selectedOptionIndex].isCorrect ? 'bg-emerald-600 text-emerald-100' : 'bg-red-600 text-red-100'}`}>
          {quiz.options[selectedOptionIndex].isCorrect ? '¡Correcto! 🎉 Has reforzado tu aprendizaje.' : 'Respuesta incorrecta. ¡Sigue intentando y revisa la teoría!'}
        </div>
      )}
    </div>
  );
};

export default QuizComponent;

