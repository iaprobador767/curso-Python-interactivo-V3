import React from 'react';
import { PYTHON_LOGO_SVG } from '../constants';

interface HeaderComponentProps {
  progress: number;
}

const HeaderComponent: React.FC<HeaderComponentProps> = ({ progress }) => {
  return (
    <header className="py-8 px-4 text-center text-white">
      <div className="flex items-center justify-center mb-4">
        <div dangerouslySetInnerHTML={{ __html: PYTHON_LOGO_SVG }} />
        <h1 className="text-4xl md:text-5xl font-bold ml-3 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-blue-500 to-green-400">
          Curso de Python Interactivo
        </h1>
      </div>
      <p className="text-lg text-slate-300 mb-6">
        Aprende Python paso a paso con ejercicios prácticos y un simulador de código.
      </p>
      <div className="w-full max-w-2xl mx-auto bg-slate-700 rounded-full h-3.5 shadow-inner">
        <div
          className="bg-gradient-to-r from-sky-500 to-emerald-500 h-3.5 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
        ></div>
      </div>
      {progress > 0 && progress < 100 && (
         <p className="text-sm text-sky-400 mt-2">{Math.round(progress)}% completado</p>
      )}
      {progress === 100 && (
         <p className="text-sm text-emerald-400 mt-2">¡Felicidades! Has completado todas las lecciones. 🎉</p>
      )}
    </header>
  );
};

export default HeaderComponent;