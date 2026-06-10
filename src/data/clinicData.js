export const clinicInfo = {
  name: "Dr. Adane Medical Centre",
  tagline: "Your Health, Our Commitment",
  address: "14 Bole Road, Addis Ababa, Ethiopia",
  phone: "+251 11 550 20203",
  email: "hello@adanemedical.et",
  hours: [
    { day: "Monday – Friday", time: "8:00 AM – 6:00 PM" },
    { day: "Saturday", time: "9:00 AM – 3:00 PM" },
    { day: "Sunday", time: "Emergency Only" },
  ],
  socials: {
    facebook: "#",
    twitter: "#",
    instagram: "#",
    linkedin: "#",
  },
};

export const services = [
  { id: 1, category: "Primary Care", name: "General Consultation", icon: "🩺", duration: "30 min", price: 400, description: "Comprehensive health assessment and treatment for everyday illnesses, preventive care, and chronic disease management." },
  { id: 2, category: "Primary Care", name: "Child Health Check", icon: "👶", duration: "45 min", price: 450, description: "Growth monitoring, vaccinations, and developmental assessments for children from birth through adolescence." },
  { id: 3, category: "Diagnostics", name: "Blood Work & Lab Tests", icon: "🧪", duration: "15 min", price: 300, description: "Full-panel blood tests including CBC, metabolic panels, lipid profiles, and specialized diagnostics." },
  { id: 4, category: "Diagnostics", name: "ECG & Cardiac Screening", icon: "🫀", duration: "30 min", price: 600, description: "12-lead electrocardiogram with interpretation to assess heart rhythm and detect early cardiac issues." },
  { id: 5, category: "Specialist", name: "Dermatology", icon: "🧴", duration: "40 min", price: 700, description: "Skin conditions, acne, eczema, psoriasis, and minor surgical skin procedures performed by a board-certified dermatologist." },
  { id: 6, category: "Specialist", name: "Ophthalmology", icon: "👁️", duration: "45 min", price: 650, description: "Eye exams, vision testing, glaucoma screening, and prescription eyewear referrals." },
  { id: 7, category: "Specialist", name: "Orthopedics", icon: "🦴", duration: "45 min", price: 750, description: "Joint pain, sports injuries, fractures, and musculoskeletal conditions treated with modern techniques." },
  { id: 8, category: "Wellness", name: "Nutrition Counseling", icon: "🥗", duration: "50 min", price: 500, description: "Personalized dietary planning and lifestyle coaching to support weight management and chronic disease prevention." },
  { id: 9, category: "Wellness", name: "Mental Health Support", icon: "🧠", duration: "60 min", price: 800, description: "Confidential counseling sessions for anxiety, depression, and stress management with licensed therapists." },
  { id: 10, category: "Primary Care", name: "Travel Medicine", icon: "✈️", duration: "30 min", price: 350, description: "Vaccinations, malaria prophylaxis, and health advice for international travel destinations." },
  { id: 11, category: "Diagnostics", name: "Ultrasound Imaging", icon: "📷", duration: "30 min", price: 800, description: "Abdominal, pelvic, and soft tissue ultrasound performed by an experienced radiographer." },
  { id: 12, category: "Wellness", name: "Physiotherapy", icon: "💪", duration: "60 min", price: 600, description: "Evidence-based rehabilitation for post-injury recovery, chronic pain, and mobility improvement." },
];

export const team = [
  { id: 1, name: "Dr. Mekdes Alemu", role: "General Practitioner & Medical Director", bio: "With 18 years of clinical experience across Ethiopia and the UK, Dr. Alemu founded Vitalis with a single mission: make quality healthcare genuinely accessible.", initials: "MA", color: "bg-teal-600" },
  { id: 2, name: "Dr. Yonas Tadesse", role: "Specialist — Cardiology & Internal Medicine", bio: "Trained at Addis Ababa University and certified in Germany, Dr. Tadesse brings cutting-edge cardiac care to patients across East Africa.", initials: "YT", color: "bg-slate-600" },
  { id: 3, name: "Dr. Saba Haile", role: "Dermatologist & Aesthetic Medicine", bio: "A graduate of the University of Cape Town, Dr. Haile specializes in skin conditions common to tropical climates and provides evidence-based aesthetic treatments.", initials: "SH", color: "bg-amber-500" },
  { id: 4, name: "Nurse Tigist Bekele", role: "Head Nurse & Patient Coordinator", bio: "Tigist has 12 years of bedside nursing experience and leads our care team with exceptional attention to patient comfort and clinical excellence.", initials: "TB", color: "bg-teal-500" },
];

export const testimonials = [
  { id: 1, name: "Abrham K.", role: "Patient since 2021", text: "Vitalis completely changed how I think about healthcare. Every visit feels thorough, unhurried, and genuinely personal. I've never felt like just a number.", rating: 5 },
  { id: 2, name: "Sara M.", role: "Patient since 2020", text: "The dermatology team resolved a stubborn skin condition that three other clinics couldn't diagnose. Brilliant doctors and a beautifully clean facility.", rating: 5 },
  { id: 3, name: "Dawit F.", role: "Patient since 2022", text: "I brought my entire family here after my first visit. The pediatric care is outstanding and the staff makes children feel completely at ease.", rating: 5 },
  { id: 4, name: "Hana T.", role: "Patient since 2019", text: "Their mental health counseling service deserves much more recognition. Professional, confidential, and genuinely life-changing support.", rating: 5 },
];

export const stats = [
  { value: "12,000+", label: "Patients Served" },
  { value: "15+", label: "Years of Practice" },
  { value: "20+", label: "Medical Specialists" },
  { value: "98%", label: "Patient Satisfaction" },
];
