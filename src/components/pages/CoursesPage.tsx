import React from 'react';
import { PageId } from '../../types/index';
import { EXAM_LEVELS, ACADEMY_INFO } from '../../data/coursesData';
import { MessageCircle, Phone, ArrowRight } from 'lucide-react';

interface CoursesPageProps {
  onNavigate: (page: PageId) => void;
}

export const CoursesPage: React.FC<CoursesPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-16 space-y-12">
      {/* Header */}
      <div className="space-y-3 text-center max-w-2xl mx-auto">
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          Hindi Examination Levels
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          We provide structured coaching for all 8 recognized Hindi examination levels. Students can
          start as absolute beginners and progress step-by-step.
        </p>
      </div>

      {/* The 8 Levels - Clean Single Structured List (No repetitive enquire buttons) */}
      <div className="space-y-4">
        {EXAM_LEVELS.map((level) => (
          <div
            key={level.id}
            className="bg-white p-5 sm:p-6 rounded-xl border border-slate-200/90 shadow-2xs space-y-2 hover:border-slate-300 transition-colors"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-md bg-blue-50 text-blue-900 font-bold text-xs flex items-center justify-center font-mono">
                  {level.levelNumber}
                </span>
                <div className="flex items-baseline gap-2">
                  <h2 className="text-base sm:text-lg font-bold text-slate-900">{level.name}</h2>
                  <span className="text-sm font-semibold text-amber-700">{level.hindiName}</span>
                </div>
              </div>

              <span className="text-[11px] font-medium text-slate-500">{level.stage}</span>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pl-10">
              {level.description}
            </p>

            <div className="text-xs text-slate-500 pl-10 pt-1">
              <span className="font-semibold text-slate-700">Skills: </span>
              <span>{level.skills}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Single Clean Contact Prompt at bottom (Replacing 8 repetitive buttons) */}
      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center space-y-4">
        <div className="space-y-1">
          <h3 className="font-bold text-slate-900 text-base">Have questions about which level to begin with?</h3>
          <p className="text-xs text-slate-600">
            We will help assess your current reading/writing level and suggest the right batch.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
          <a
            href={`https://wa.me/${ACADEMY_INFO.primaryPhoneRaw}?text=${encodeURIComponent(
              'Hello, I would like guidance on which Hindi level I should join.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-lg flex items-center gap-1.5"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>Ask on WhatsApp</span>
          </a>

          <button
            onClick={() => {
              onNavigate('home');
              setTimeout(() => {
                const el = document.getElementById('contact-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            className="px-4 py-2 text-xs font-semibold text-white bg-blue-900 hover:bg-blue-800 rounded-lg flex items-center gap-1.5"
          >
            <span>Enquire Now</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
