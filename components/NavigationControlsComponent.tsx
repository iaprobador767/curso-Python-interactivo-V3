
import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from './icons';

interface NavigationControlsComponentProps {
  onPrevious: () => void;
  onNext: () => void;
  canPrevious: boolean;
  canNext: boolean;
}

const NavigationControlsComponent: React.FC<NavigationControlsComponentProps> = ({
  onPrevious,
  onNext,
  canPrevious,
  canNext,
}) => {
  return (
    <div className="flex justify-between items-center mt-8 mb-12 px-4">
      <button
        onClick={onPrevious}
        disabled={!canPrevious}
        className="px-6 py-3 bg-sky-600 hover:bg-sky-500 disabled:bg-slate-700 disabled:text-slate-500 disabled:cursor-not-allowed text-white font-semibold rounded-lg shadow-md transition-all duration-150 flex items-center"
      >
        <ChevronLeftIcon className="w-5 h-5 mr-2" />
        Anterior
      </button>
      <button
        onClick={onNext}
        disabled={!canNext}
        className="px-6 py-3 bg-sky-600 hover:bg-sky-500 disabled:bg-slate-700 disabled:text-slate-500 disabled:cursor-not-allowed text-white font-semibold rounded-lg shadow-md transition-all duration-150 flex items-center"
      >
        Siguiente
        <ChevronRightIcon className="w-5 h-5 ml-2" />
      </button>
    </div>
  );
};

export default NavigationControlsComponent;
