
import React from 'react';
import { Lesson, CompletedLessons } from '../types';
import { CheckCircleIcon } from './icons';

interface LessonNavigationComponentProps {
  lessons: Lesson[];
  currentLessonId: string;
  completedLessons: CompletedLessons;
  onSelectLesson: (lessonId: string) => void;
}

const LessonNavigationComponent: React.FC<LessonNavigationComponentProps> = ({
  lessons,
  currentLessonId,
  completedLessons,
  onSelectLesson,
}) => {
  return (
    <nav className="mb-8 px-4">
      <div className="flex flex-wrap justify-center gap-3">
        {lessons.map((lesson) => (
          <button
            key={lesson.id}
            onClick={() => onSelectLesson(lesson.id)}
            className={`
              px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ease-in-out
              focus:outline-none focus:ring-2 focus:ring-opacity-50 flex items-center group
              ${
                currentLessonId === lesson.id
                  ? 'bg-sky-500 text-white shadow-lg transform scale-105 ring-sky-400'
                  : completedLessons.has(lesson.id)
                  ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-md'
                  : 'bg-slate-600 hover:bg-slate-500 text-slate-200 shadow-md'
              }
            `}
            aria-current={currentLessonId === lesson.id ? "page" : undefined}
          >
            {completedLessons.has(lesson.id) && currentLessonId !== lesson.id && (
              <CheckCircleIcon className="w-4 h-4 mr-2 text-emerald-300 group-hover:text-emerald-200" />
            )}
            {lesson.title}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default LessonNavigationComponent;
