import React, { useState } from 'react';
import { PageId } from '../../types/index';
import { ACADEMY_INFO, EXAM_LEVELS, KEY_BENEFITS, BRAND_ASSETS } from '../../data/coursesData';
import {
  MessageCircle,
  Phone,
  ArrowRight,
  Star,
  ExternalLink,
  Globe,
  Send,
  CheckCircle2,
  MapPin,
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    levelInterested: 'Prathamic (Beginner)',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) return;

    const msg = `*New Hindi Coaching Enquiry*
- Name: ${formData.name}
- Phone: ${formData.phone}
- Level: ${formData.levelInterested}
${formData.message ? `- Note: ${formData.message}` : ''}`;

    const url = `https://wa.me/${ACADEMY_INFO.primaryPhoneRaw}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* 1. HERO SECTION - Attractive & Radiant Warm Atmosphere */}
      <section className="pt-10 sm:pt-16 pb-10 px-4 sm:px-8 hero-gradient rounded-3xl border border-amber-200/40 mx-2 sm:mx-4 shadow-xs">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-300/60 text-amber-800 text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                <span>Hindi Coaching & Tuition</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
                Master Hindi with Confidence
              </h1>

              <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-xl">
                Personalized Hindi coaching for school students, professionals, and language
                learners in India and abroad. We offer structured guidance for all 8 examination
                levels from beginner alphabet basics to advanced literature.
              </p>

              {/* Attractive, Inviting Actions */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onNavigate('courses')}
                  className="px-5 py-3 text-xs sm:text-sm font-semibold text-white bg-blue-900 hover:bg-blue-800 rounded-xl transition-all shadow-md shadow-blue-950/20 flex items-center gap-2 active:scale-98"
                >
                  <span>Explore 8 Exam Levels</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={`https://wa.me/${ACADEMY_INFO.primaryPhoneRaw}?text=${encodeURIComponent(
                    ACADEMY_INFO.whatsappPrefill
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4.5 py-3 text-xs sm:text-sm font-semibold text-emerald-800 bg-white hover:bg-emerald-50 border border-emerald-300 rounded-xl transition-all shadow-xs flex items-center gap-2 active:scale-98"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp Us</span>
                </a>

                <a
                  href={`tel:${ACADEMY_INFO.primaryPhoneRaw}`}
                  className="px-4.5 py-3 text-xs sm:text-sm font-semibold text-amber-950 bg-amber-100/80 hover:bg-amber-200/80 border border-amber-300/90 rounded-xl transition-all shadow-xs flex items-center gap-2 active:scale-98"
                >
                  <Phone className="w-4 h-4 text-amber-700" />
                  <span>Call Us</span>
                </a>
              </div>

              {/* Metrics */}
              <div className="pt-4 border-t border-amber-200/50 flex items-center gap-4 sm:gap-6 text-xs text-slate-600">
                <div>
                  <span className="font-bold text-slate-900 text-sm tabular-nums">
                    {ACADEMY_INFO.studentsTrainedCount}
                  </span>{' '}
                  Students Trained
                </div>
                <span>·</span>
                <div>
                  <span className="font-bold text-slate-900 text-sm">8</span> Examination Levels
                </div>
                <span>·</span>
                <div className="flex items-center gap-1 text-slate-600">
                  <Globe className="w-3.5 h-3.5 text-amber-600" />
                  <span>India & Overseas</span>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white">
                <img
                  src={BRAND_ASSETS.classroomPhoto}
                  alt="Hindi coaching class"
                  className="w-full h-auto aspect-4/3 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHY LEARN WITH US */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="border-t border-slate-200/80 pt-12 space-y-8">
          <div className="max-w-xl">
            <h2 className="text-2xl font-bold text-slate-900">Why Choose Our Academy</h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Practical, gentle, and disciplined coaching for stress-free learning.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {KEY_BENEFITS.map((benefit, i) => (
              <div
                key={i}
                className="brand-card p-6 rounded-2xl border space-y-3"
              >
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-800 border border-amber-300/50 flex items-center justify-center font-bold text-xs">
                  0{i + 1}
                </div>
                <h3 className="font-bold text-slate-900 text-sm">{benefit.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. EXAM LEVELS PREVIEW - 8 levels summarized */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="brand-card p-6 sm:p-8 rounded-3xl border space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-semibold text-amber-700 uppercase tracking-wider block">
                Overview
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Coaching for All 8 Examination Levels
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                From Prathamic (beginner) to Praveen Uttarardh (advanced).
              </p>
            </div>

            <button
              onClick={() => onNavigate('courses')}
              className="px-4 py-2 text-xs font-semibold text-blue-900 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-lg transition-colors whitespace-nowrap self-start sm:self-auto"
            >
              View Full Details →
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {EXAM_LEVELS.map((level) => (
              <div
                key={level.id}
                className="bg-amber-50/30 hover:bg-amber-50/60 transition-colors p-3.5 rounded-xl border border-amber-200/50 space-y-1"
              >
                <span className="text-[10px] font-mono font-bold text-amber-700">
                  Level {level.levelNumber}
                </span>
                <p className="font-bold text-xs sm:text-sm text-slate-900">{level.name}</p>
                <p className="text-xs text-amber-800 font-medium">{level.hindiName}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TRAINER SECTION - With only 'Enquire Now' as requested */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 grid grid-cols-1 md:grid-cols-12 gap-8 items-center shadow-2xs">
          <div className="md:col-span-4">
            <div className="rounded-xl overflow-hidden border border-slate-200">
              <img
                src={BRAND_ASSETS.trainerPhoto}
                alt="Trainer R Kiruthika"
                className="w-full h-auto aspect-4/3 object-cover"
              />
            </div>
          </div>

          <div className="md:col-span-8 space-y-3">
            <span className="text-xs font-semibold text-amber-700 uppercase tracking-wider block">
              Trainer Profile
            </span>
            <h2 className="text-2xl font-bold text-slate-900">{ACADEMY_INFO.trainerName}</h2>
            <p className="text-xs font-medium text-slate-500">{ACADEMY_INFO.trainerRole}</p>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {ACADEMY_INFO.trainerBio}
            </p>

            {/* Only 'Enquire Now' button here as requested */}
            <div className="pt-2">
              <button
                onClick={scrollToContact}
                className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-blue-900 hover:bg-blue-800 rounded-xl transition-all shadow-md shadow-blue-950/20 active:scale-98"
              >
                Enquire Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. GOOGLE REVIEWS SECTION */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 text-center space-y-4">
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 max-w-xl mx-auto space-y-3 shadow-2xs">
          <div className="flex justify-center text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
            ))}
          </div>

          <h3 className="text-xl font-bold text-slate-900">Google Reviews & Location</h3>
          <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
            Read direct ratings, student feedback, and find directions to our center on Google Maps.
          </p>

          <div className="pt-2 flex justify-center">
            <a
              href={ACADEMY_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-lg inline-flex items-center gap-1.5 shadow-2xs transition-colors"
            >
              <span>View Reviews on Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* 6. CONTACT & ENQUIRY SECTION - Kept cleanly in the home page only */}
      <section id="contact-section" className="max-w-6xl mx-auto px-4 sm:px-6 scroll-mt-24">
        <div className="border-t border-slate-200/80 pt-12 space-y-8">
          <div className="max-w-xl">
            <span className="text-xs font-semibold text-amber-700 tracking-wider uppercase block">
              Get in Touch
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Contact & Enquiries
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Connect directly with our coaching center for batch admissions, questions, or guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Quick Contact Info */}
            <div className="md:col-span-5 space-y-4">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-4 shadow-2xs">
                <div>
                  <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                    Academy Contact
                  </p>
                  <p className="text-base font-bold text-slate-900">{ACADEMY_INFO.name}</p>
                </div>

                <div className="pt-2 border-t border-slate-100 space-y-3 text-xs">
                  <div>
                    <p className="text-slate-400">Phone Numbers:</p>
                    <a
                      href={`tel:${ACADEMY_INFO.primaryPhoneRaw}`}
                      className="font-mono font-bold text-slate-900 hover:text-blue-900 text-sm block mt-0.5"
                    >
                      {ACADEMY_INFO.primaryPhone}
                    </a>
                    <a
                      href={`tel:${ACADEMY_INFO.secondaryPhoneRaw}`}
                      className="font-mono text-slate-600 hover:text-slate-900 text-xs block mt-0.5"
                    >
                      {ACADEMY_INFO.secondaryPhone}
                    </a>
                  </div>

                  <div>
                    <p className="text-slate-400">WhatsApp:</p>
                    <a
                      href={`https://wa.me/${ACADEMY_INFO.primaryPhoneRaw}?text=${encodeURIComponent(
                        ACADEMY_INFO.whatsappPrefill
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-700 font-semibold hover:underline flex items-center gap-1 mt-0.5"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Chat on WhatsApp ({ACADEMY_INFO.primaryPhone})</span>
                    </a>
                  </div>

                  <div>
                    <p className="text-slate-400">Location:</p>
                    <p className="text-slate-800 font-medium">{ACADEMY_INFO.locationDisplay}</p>
                    <a
                      href={ACADEMY_INFO.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-900 font-semibold hover:underline inline-flex items-center gap-1 mt-1 text-xs"
                    >
                      <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      <span>Open in Google Maps</span>
                      <ExternalLink className="w-3 h-3 text-slate-400" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Clean Enquiry Form */}
            <div className="md:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 space-y-4 shadow-2xs">
              <h3 className="text-lg font-bold text-slate-900">Send an Enquiry</h3>
              <p className="text-xs text-slate-500">
                Fill in your details below to send your enquiry directly to our WhatsApp.
              </p>

              {submitted ? (
                <div className="p-4 bg-emerald-50 text-emerald-800 rounded-xl text-xs space-y-1">
                  <p className="font-bold flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Thank you! Enquiry forwarded.</span>
                  </p>
                  <p>We look forward to speaking with you.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your Name"
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Phone Number <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Mobile number"
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Exam Level / Interested In
                    </label>
                    <select
                      value={formData.levelInterested}
                      onChange={(e) => setFormData({ ...formData, levelInterested: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs bg-white"
                    >
                      <option value="Prathamic (Level 1)">1. Prathamic (Beginner)</option>
                      <option value="Madhyama (Level 2)">2. Madhyama</option>
                      <option value="Rashtrabhasha (Level 3)">3. Rashtrabhasha</option>
                      <option value="Praveshika (Level 4)">4. Praveshika</option>
                      <option value="Visharad Poorvardh (Level 5)">5. Visharad Poorvardh</option>
                      <option value="Visharad Uttarardh (Level 6)">6. Visharad Uttarardh</option>
                      <option value="Praveen Poorvardh (Level 7)">7. Praveen Poorvardh</option>
                      <option value="Praveen Uttarardh (Level 8)">8. Praveen Uttarardh</option>
                      <option value="General Spoken / Tuition">General Spoken / Online Classes</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Message <span className="text-slate-400 font-normal">(Optional)</span>
                    </label>
                    <textarea
                      rows={2}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Any details about student age, country/location, goals..."
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-blue-900 hover:bg-blue-800 rounded-lg flex items-center justify-center gap-1.5 transition-colors shadow-2xs"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit & Chat on WhatsApp</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
