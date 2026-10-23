import React from 'react';
import { PageId } from '../../types/index';
import { ACADEMY_INFO, BRAND_ASSETS } from '../../data/coursesData';
import { Phone, MessageCircle, Globe, BookOpen, Clock, HeartHandshake, CheckCircle2 } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-16 space-y-14">
      {/* 1. Enhanced Header & Academy Overview */}
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <span className="text-xs font-semibold text-amber-700 tracking-wider uppercase block">
          About Our Academy
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Clear, Stress-Free Hindi Coaching for All Ages
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Dedicated to providing clear, patient, and stress-free Hindi coaching for learners of all
          age groups — from local school children and working professionals across India to
          international learners and NRIs residing abroad.
        </p>
      </div>

      {/* 2. Global & International Learners Highlight */}
      <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/90 shadow-2xs space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center shrink-0">
            <Globe className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900">
              Coaching Students Across India & Overseas
            </h2>
            <p className="text-xs text-slate-500">
              Convenient online sessions tailored for international time zones
            </p>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Beyond coaching students locally in Tamil Nadu and across India, we regularly teach
          students and working adults living abroad — including the United States, United Kingdom,
          UAE, Singapore, and Europe.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
          <div className="p-3.5 bg-slate-50/70 rounded-xl border border-slate-200/70 space-y-1">
            <p className="font-bold text-slate-900">NRI & Expatriate Families</p>
            <p className="text-slate-500">
              Helping children living abroad develop conversational fluency and connect with Indian roots.
            </p>
          </div>

          <div className="p-3.5 bg-slate-50/70 rounded-xl border border-slate-200/70 space-y-1">
            <p className="font-bold text-slate-900">Time-Zone Friendly</p>
            <p className="text-slate-500">
              Flexible scheduling arranged around school timings and professional working hours globally.
            </p>
          </div>

          <div className="p-3.5 bg-slate-50/70 rounded-xl border border-slate-200/70 space-y-1">
            <p className="font-bold text-slate-900">Zero-Hesitation Learning</p>
            <p className="text-slate-500">
              Patient bilingual instruction (English & Tamil) ensuring concepts are simple to understand.
            </p>
          </div>
        </div>
      </div>

      {/* 3. Trainer Profile - R Kiruthika */}
      <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 grid grid-cols-1 md:grid-cols-12 gap-8 items-center shadow-2xs">
        <div className="md:col-span-5">
          <div className="rounded-xl overflow-hidden border border-slate-200">
            <img
              src={BRAND_ASSETS.trainerPhoto}
              alt="Trainer R Kiruthika"
              className="w-full h-auto aspect-4/3 object-cover"
            />
          </div>
        </div>

        <div className="md:col-span-7 space-y-3">
          <span className="text-xs font-semibold text-amber-700 tracking-wider uppercase block">
            Meet the Trainer
          </span>
          <h2 className="text-2xl font-bold text-slate-900">{ACADEMY_INFO.trainerName}</h2>
          <p className="text-xs text-slate-500 font-medium">{ACADEMY_INFO.trainerRole}</p>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {ACADEMY_INFO.trainerBio}
          </p>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Classes are conducted in an encouraging environment where students can clarify doubts
            without pressure, master pronunciation, and build steady handwriting and exam confidence.
          </p>

          <div className="pt-2">
            <button
              onClick={() => {
                onNavigate('home');
                setTimeout(() => {
                  const el = document.getElementById('contact-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-blue-900 hover:bg-blue-800 rounded-xl transition-all shadow-md shadow-blue-950/20 active:scale-98"
            >
              Enquire Now
            </button>
          </div>
        </div>
      </div>

      {/* 4. Teaching Approach */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900">Our Teaching Approach</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-5 rounded-xl bg-white border border-slate-200/90 space-y-2 shadow-2xs">
            <h3 className="font-bold text-slate-900 text-sm">Gentle & Step-by-Step</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We start from letter sounds, strokes, and daily vocabulary without overwhelming the student.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white border border-slate-200/90 space-y-2 shadow-2xs">
            <h3 className="font-bold text-slate-900 text-sm">Bilingual Guidance</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              English and Tamil explanations make grammar rules intuitive and practical to apply.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white border border-slate-200/90 space-y-2 shadow-2xs">
            <h3 className="font-bold text-slate-900 text-sm">Handwriting & Speaking</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Daily practice of reading aloud and neat Devanagari script writing for long-term retention.
            </p>
          </div>
        </div>
      </div>

      {/* 5. Simple Action Bar */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 text-center space-y-3 shadow-2xs">
        <h3 className="text-base font-bold text-slate-900">Interested in joining or have questions?</h3>
        <p className="text-xs text-slate-600">
          Reach out directly to discuss batch options or book a consultation.
        </p>
        <div className="pt-1 flex justify-center gap-3">
          <a
            href={`https://wa.me/${ACADEMY_INFO.primaryPhoneRaw}?text=${encodeURIComponent(
              ACADEMY_INFO.whatsappPrefill
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-lg flex items-center gap-1.5"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>WhatsApp</span>
          </a>
          <button
            onClick={() => {
              onNavigate('home');
              setTimeout(() => {
                const el = document.getElementById('contact-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            className="px-4 py-2 text-xs font-semibold text-white bg-blue-900 hover:bg-blue-800 rounded-lg transition-colors"
          >
            Enquire Now
          </button>
        </div>
      </div>
    </div>
  );
};
