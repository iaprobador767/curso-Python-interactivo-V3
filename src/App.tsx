import React, { useState, useEffect, useCallback } from 'react';
import { Lesson, CompletedLessons } from './types';
import { LESSONS_DATA } from './constants';
import HeaderComponent from './components/HeaderComponent';
import LessonNavigationComponent from './components/LessonNavigationComponent';
import LessonCardComponent from './components/LessonCardComponent';
import NavigationControlsComponent from './components/NavigationControlsComponent';

const App: React.FC = () => {
  const [lessons, setLessons] = useState<Lesson[]>(LESSONS_DATA);
  const [currentLessonId, setCurrentLessonId] = useState<string>(LESSONS_DATA[0]?.id || '');
  const [completedLessons, setCompletedLessons] = useState<CompletedLessons>(new Set());

  useEffect(() => {
    // In a real app, you might load lessons or user progress from an API here
    setLessons(LESSONS_DATA);
    if (LESSONS_DATA.length > 0) {
      setCurrentLessonId(LESSONS_DATA[0].id);
    }
  }, []);

  const handleSelectLesson = (lessonId: string) => {
    setCurrentLessonId(lessonId);
  };

  const markLessonCompleted = useCallback((lessonId: string) => {
    setCompletedLessons(prev => new Set(prev).add(lessonId));
  }, []);

  const currentLessonIndex = lessons.findIndex(lesson => lesson.id === currentLessonId);
  const currentLesson = lessons[currentLessonIndex];

  const handleNextLesson = () => {
    if (currentLessonIndex < lessons.length - 1) {
      setCurrentLessonId(lessons[currentLessonIndex + 1].id);
    }
  };

  const handlePreviousLesson = () => {
    if (currentLessonIndex > 0) {
      setCurrentLessonId(lessons[currentLessonIndex - 1].id);
    }
  };

  const progress = lessons.length > 0 ? (completedLessons.size / lessons.length) * 100 : 0;

  if (!currentLesson) {
    // Could show a loading spinner or error message
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
          key={currentLesson.id} // Ensure re-render and state reset for card when lesson changes
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