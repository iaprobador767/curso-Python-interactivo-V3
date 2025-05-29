 import React, { useState, useMemo, useCallback } from 'react';
import { Lesson, CompletedLessons } from './types';
import { LESSONS_DATA } from './constants';
import HeaderComponent from './components/HeaderComponent';
import LessonNavigationComponent from './components/LessonNavigationComponent';
import LessonCardComponent from './components/LessonCardComponent';
import NavigationControlsComponent from './components/NavigationControlsComponent';

const lessons = LESSONS_DATA; // Asume que no cambia en tiempo de ejecución

const App: React.FC = () => {
  const [currentLessonId, setCurrentLessonId] = useState<string>(lessons[0]?.id || '');
  const [completedLessons, setCompletedLessons] = useState<CompletedLessons>(new Set());

  // Calcula índice y lección solo cuando cambia el id
  const { currentLessonIndex, currentLesson } = useMemo(() => {
    const idx = lessons.findIndex(lesson => lesson.id === currentLessonId);
    return { currentLessonIndex: idx, currentLesson: lessons[idx] };
  }, [currentLessonId]);

  const handleSelectLesson = useCallback(setCurrentLessonId, []);

  const markLessonCompleted = useCallback((lessonId: string) => {
    setCompletedLessons(prev => new Set(prev).add(lessonId));
  }, []);

  const handleNextLesson = useCallback(() => {
    if (currentLessonIndex < lessons.length - 1) {
      setCurrentLessonId(lessons[currentLessonIndex + 1].id);
    }
  }, [currentLessonIndex]);

  const handlePreviousLesson = useCallback(() => {
    if (currentLessonIndex > 0) {
      setCurrentLessonId(lessons[currentLessonIndex - 1].id);
    }
  }, [currentLessonIndex]);

  const progress = lessons.length > 0 ? (completedLessons.size / lessons.length) * 100 : 0;

  if (!currentLesson) {
    return <div className="text-center text-xl p-10">Cargando lecciones...</div>;
  }

  return (
    <div className="container mx-auto max-w-4xl px-2 sm:px-4 pb-10">
      <HeaderComponent progress={progress} />
      <LessonNavigationComponent
        lessons={lessons}
        currentLessonId={currentLessonId}
        completedLessons={completedLessons}
        onSelectLesson={handleSelectLesson}
      />
      <main>
        <LessonCardComponent
          key={currentLesson.id}
          lesson={currentLesson}
          onMarkCompleted={markLessonCompleted}
        />
      </main>
      <NavigationControlsComponent
        onPrevious={handlePreviousLesson}
        onNext={handleNextLesson}
        canPrevious={currentLessonIndex > 0}
        canNext={currentLessonIndex < lessons.length - 1}
      />
      <footer className="text-center text-sm text-slate-500 mt-12 py-6 border-t border-slate-700">
        <p>&copy; {new Date().getFullYear()} Curso Interactivo de Python. Mejorado con React y Tailwind.</p>
        <p>Inspirado en el código original y adaptado para ejecución directa en navegador.</p>
      </footer>
    </div>
  );
};

export default App;
