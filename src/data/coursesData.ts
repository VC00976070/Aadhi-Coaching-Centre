export interface CourseLevel {
  id: string;
  levelNumber: number;
  name: string;
  hindiName: string;
  stage: string;
  description: string;
  skills: string;
}

// Easily replaceable brand assets - swap paths whenever you update logo or photo
export const BRAND_ASSETS = {
  logo: '/assets/aistudio/image_38a97133.png',
  trainerPhoto: '/src/assets/images/trainer_r_kiruthika_1792758616109.jpg',
  classroomPhoto: '/src/assets/images/hero_hindi_learning_1792758615536.jpg',
};

export const ACADEMY_INFO = {
  name: 'Aadhi Hindi Coaching Center',
  tagline: 'Learn Hindi with Ease & Confidence',
  trainerName: 'R Kiruthika',
  trainerRole: 'Hindi Language Trainer',
  trainerBio:
    'R Kiruthika is an experienced Hindi trainer dedicated to helping learners speak, read, and write Hindi fluently. With a patient, personalized approach, classes are tailored for beginners, school students, professionals, and advanced exam aspirants alike.',
  primaryPhone: '+91 85248 12411',
  secondaryPhone: '+91 97890 87456',
  primaryPhoneRaw: '918524812411',
  secondaryPhoneRaw: '919789087456',
  // Official Google Maps location & reviews link
  googleMapsUrl:
    'https://www.google.com/maps/place/Aadhi+hindi+coaching+center/@10.9712151,77.003449,17z/data=!4m16!1m9!3m8!1s0x3ba85b07a59a71e1:0x80eeddfc41bc3a8f!2sAadhi+hindi+coaching+center!8m2!3d10.9712151!4d77.003449!9m1!1b1!16s%2Fg%2F11yq8q2bl3!3m5!1s0x3ba85b07a59a71e1:0x80eeddfc41bc3a8f!8m2!3d10.9712151!4d77.003449!16s%2Fg%2F11yq8q2bl3?entry=ttu&g_ep=EgoyMDI2MTAxOS4wIKXMDSoASAFQAw%3D%3D',
  locationDisplay: 'Coimbatore, Tamil Nadu, India',
  whatsappPrefill: 'Hello, I would like to know more about the Hindi classes.',
  studentsTrainedCount: '100+',
};

export const EXAM_LEVELS: CourseLevel[] = [
  {
    id: 'prathamic',
    levelNumber: 1,
    name: 'Prathamic',
    hindiName: 'प्राथमिक',
    stage: 'Level 1 (Beginner)',
    description: 'Foundational introduction to the Hindi alphabet (Varnamala), phonetics, sound pronunciation, and basic daily vocabulary.',
    skills: 'Devanagari script, Matras, simple words & basic reading',
  },
  {
    id: 'madhyama',
    levelNumber: 2,
    name: 'Madhyama',
    hindiName: 'मध्यमा',
    stage: 'Level 2 (Elementary)',
    description: 'Building sentence structures, fundamental grammar, verb forms, and short moral stories with basic translation.',
    skills: 'Tenses, sentence formation, short essays & comprehension',
  },
  {
    id: 'rashtrabhasha',
    levelNumber: 3,
    name: 'Rashtrabhasha',
    hindiName: 'राष्ट्रभाषा',
    stage: 'Level 3 (Intermediate)',
    description: 'Practical spoken and written expression, formal letter writing, intermediate prose, poetry, and idioms.',
    skills: 'Letter writing, prose analysis, poetry & practical vocabulary',
  },
  {
    id: 'praveshika',
    levelNumber: 4,
    name: 'Praveshika',
    hindiName: 'प्रवेशिका',
    stage: 'Level 4 (Secondary)',
    description: 'Comprehensive study of classical Hindi prose, poetry appreciation, and formal Hindi grammar (Vyakaran).',
    skills: 'Advanced grammar, formal essays & translation',
  },
  {
    id: 'visharad-poorvardh',
    levelNumber: 5,
    name: 'Visharad Poorvardh',
    hindiName: 'विशारद पूर्वार्ध',
    stage: 'Level 5 (Higher Part 1)',
    description: 'First part of the higher literature tier covering classic Hindi plays, prose, and medieval poetry.',
    skills: 'Literary criticism, drama & classical poetry',
  },
  {
    id: 'visharad-uttarardh',
    levelNumber: 6,
    name: 'Visharad Uttarardh',
    hindiName: 'विशारद उत्तरार्ध',
    stage: 'Level 6 (Higher Part 2)',
    description: 'Second part completing the Visharad study with in-depth Hindi literary history, short stories, and applied translation.',
    skills: 'Hindi literature history, modern fiction & advanced translation',
  },
  {
    id: 'praveen-poorvardh',
    levelNumber: 7,
    name: 'Praveen Poorvardh',
    hindiName: 'प्रवीण पूर्वार्ध',
    stage: 'Level 7 (Degree Part 1)',
    description: 'Advanced study covering ancient epics, linguistics, poetics (Kavya Shastra), and philosophical Hindi essays.',
    skills: 'Kavya Shastra poetics, ancient texts & dialectology',
  },
  {
    id: 'praveen-uttarardh',
    levelNumber: 8,
    name: 'Praveen Uttarardh',
    hindiName: 'प्रवीण उत्तरार्ध',
    stage: 'Level 8 (Degree Part 2 & Pandit)',
    description: 'Pinnacle level preparing students for Hindi Pandit qualification, comparative literature, and advanced pedagogy.',
    skills: 'Teaching methodology, administrative Hindi & complete literature',
  },
];

export const KEY_BENEFITS = [
  {
    title: 'Individual Attention',
    desc: 'Dedicated focus on reading, writing, and speaking at the student’s natural learning pace.',
  },
  {
    title: 'Beginner-Friendly Teaching',
    desc: 'Bilingual explanations (Tamil & English) so non-native speakers learn without hesitation.',
  },
  {
    title: 'Global & Domestic Reach',
    desc: 'Teaching students across India as well as overseas learners (NRIs & foreign residents) via online sessions.',
  },
  {
    title: 'Complete Exam Guidance',
    desc: 'Structured coaching, past question review, and handwriting practice for all 8 examination tiers.',
  },
];
