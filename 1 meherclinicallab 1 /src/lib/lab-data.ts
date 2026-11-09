export const LAB = {
  name: "Meher Clinical Laboratory",
  tagline: "Your Trusted Partner in Accurate Diagnostics Since 2002",
  since: 2002,
  phone: "+91 9422666178",
  phoneRaw: "919422666178",
  email: "meherclinicallab@gmail.com",
  domain: "meherclinicallab.com",
  siteUrl: "https://meherclinicallab.com",
  address:
    "Shop 8, Samarth Building, Near Government Hospital, Karjat, Maharashtra 410201",
  hours: "Mon – Sun · 8:00 AM – 9:00 PM",
  mapsUrl:
    "https://maps.google.com?q=Meher%20clinical%20laboratory,%20Shop%208%20samarth%20bldg,%20near%20dagade%20vada%20paav,%20Karjat,%20Maharashtra%20410201&ftid=0x3be7fb9b3d47f821:0x78fe20d514748872",
  logo: "https://res.cloudinary.com/dgfwwnn4x/image/upload/v1784311761/IMG_9331_ta0jt8.jpg",
  pathologistPhoto:
    "https://res.cloudinary.com/dgfwwnn4x/image/upload/v1784311778/PHOTO-2026-07-17-23-09-36_hjxvhp.jpg",
  pathologistName: "Mr Abid Khan",
  qualification: "B.Sc.  ADMLT",
};

export const wa = (message: string) =>
  `https://wa.me/${LAB.phoneRaw}?text=${encodeURIComponent(message)}`;

// price = number in INR, or null = "Contact for Price"
export type Test = {
  name: string;
  price: number | null;
};

export type TestCategory = {
  id: string;
  icon: string;
  title: string;
  short: string;
  tests: Test[];
};

export const priceLabel = (p: number | null) =>
  p === null ? "Contact for Price" : `₹${p.toLocaleString("en-IN")}`;

export const CATEGORIES: TestCategory[] = [
  {
    id: "haematology",
    icon: "🩸",
    title: "Haematology",
    short: "Complete blood work-up and coagulation studies.",
    tests: [
      { name: "Complete Blood Count (CBC)", price: 200 },
      { name: "Hemoglobin (Hb)", price: 100 },
      { name: "ESR (Erythrocyte Sedimentation Rate)", price: 100 },
      { name: "Peripheral Blood Smear", price: 600 },
      { name: "Platelet Count", price: 150 },
      { name: "Blood Group & Rh Typing", price: 50 },
      { name: "Reticulocyte Count", price: 400 },
      { name: "Coagulation Profile (PT, APTT, INR)", price: 800 },
      { name: "Bleeding Time & Clotting Time", price: 100 },
      { name: "G6PD Test", price: 800 },
      { name: "Malarial parasite", price: 100 },
    ],
  },
  {
    id: "biochemistry",
    icon: "🧬",
    title: "Biochemistry",
    short: "Sugar, lipids, liver, kidney & vitamins.",
    tests: [
      { name: "Blood Sugar - Fasting", price: 50 },
      { name: "Blood Sugar - PP", price: 50 },
      { name: "Blood Sugar - Random", price: 50 },
      { name: "HbA1c (Glycosylated Hemoglobin)", price: 500 },
      { name: "Lipid Profile", price: 500 },
      { name: "Liver Function Test (LFT)", price: 500 },
      { name: "Kidney Function Test (KFT/RFT)", price: 600 },
      { name: "Calcium", price: 150 },
      { name: "Phosphorus", price: 250 },
      { name: "Magnesium", price: 300 },
      { name: "Amylase", price: 500 },
      { name: "Lipase", price: 1000 },
      { name: "LDH", price: 400 },
      { name: "CPK", price: 600 },
      { name: "CK-MB", price: 600 },
      { name: "Electrolytes (Na, K, Cl)", price: 400 },
      { name: "Blood Glucose Tolerance Test (GTT)", price: 150 },
      { name: "C-Reactive Protein (CRP)", price: 500 },
    ],
  },
  {
    id: "pathology",
    icon: "🔬",
    title: "Clinical Pathology",
    short: "Urine, stool, semen & body fluid analysis.",
    tests: [
      { name: "Urine Routine & Microscopy", price: 100 },
      { name: "Stool Routine & Microscopy", price: 400 },
      { name: "Urine Culture & Sensitivity", price: 1000 },
      { name: "Urine Pregnancy Test", price: 100 },
      { name: "Semen Analysis", price: 400 },
      { name: "Body Fluid Analysis (Pleural, Peritoneal, CSF)", price: null },
      { name: "24-Hour Urine Protein", price: 500 },
      { name: "Urine Microalbumin", price: 500 },
      { name: "Stool Occult Blood", price: 300 },
    ],
  },
  {
    id: "serology",
    icon: "🦠",
    title: "Serology / Immunology",
    short: "Infection screening & antibody testing.",
    tests: [
      { name: "Widal Test (Typhoid) - Slide Method", price: 100 },
      { name: "Dengue NS1 Antigen", price: 600 },
      { name: "Dengue IgM/IgG", price: 600 },
      { name: "Malaria Antigen (Rapid)", price: 300 },
      { name: "HIV 1 & 2 (ELISA/Rapid)", price: 300 },
      { name: "HBsAg (Hepatitis B)", price: 200 },
      { name: "HCV (Hepatitis C)", price: 400 },
      { name: "VDRL/RPR (Syphilis)", price: 100 },
      { name: "RA Factor (Rheumatoid Arthritis)", price: 350 },
      { name: "ASO Titre", price: 600 },
      { name: "ANA (Antinuclear Antibody)", price: 900 },
      { name: "Chikungunya IgM", price: 1400 },
      { name: "Leptospira IgM", price: 1400 },
      { name: "Typhidot IgM", price: 300 },
    ],
  },
  {
    id: "hormones",
    icon: "🧪",
    title: "Hormones & Special Tests",
    short: "Thyroid, fertility, tumour markers & more.",
    tests: [
      { name: "Thyroid Profile (T3, T4, TSH)", price: 400 },
      { name: "Free T3, Free T4", price: 600 },
      { name: "Prolactin", price: 600 },
      { name: "Testosterone", price: 900 },
      { name: "FSH", price: 500 },
      { name: "LH", price: 500 },
      { name: "Estradiol (E2)", price: 1000 },
      { name: "Progesterone", price: null },
      { name: "Beta HCG (Pregnancy)", price: 800 },
      { name: "PSA (Prostate Specific Antigen)", price: 1000 },
      { name: "CA-125", price: 1250 },
      { name: "CA 19-9", price: 1400 },
      { name: "CEA (Tumor Markers)", price: 1200 },
      { name: "AFP (Alpha Fetoprotein)", price: 1000 },
      { name: "Insulin Fasting", price: 900 },
      { name: "Cortisol", price: 900 },
      { name: "PTH (Parathyroid Hormone)", price: null },
      { name: "Vitamin D (25-OH)", price: 1200 },
      { name: "Vitamin B12", price: 1000 },
      { name: "Iron Studies (Serum Iron, TIBC, Ferritin)", price: 800 },
      { name: "Torch-8", price: 2800 },
      { name: "Torch-10", price: 3200 },
      { name: "dual marker", price: 2600 },
      { name: "qudrapel marker", price: 3200 },
    ],
  },
  {
    id: "cardiac",
    icon: "🫀",
    title: "Cardiac Markers",
    short: "Detect and monitor cardiac risk & events.",
    tests: [
      { name: "Troponin I / Troponin T", price: 1500 },
      { name: "CK-MB", price: 600 },
      { name: "LDH", price: 400 },
      { name: "BNP / NT-proBNP", price: 3000 },
      { name: "D-Dimer", price: 1600 },
      { name: "Homocysteine", price: 1400 },
      { name: "Lipid Profile", price: 500 },
      { name: "hs-CRP", price: 600 },
    ],
  },
  {
    id: "diabetes",
    icon: "🍬",
    title: "Diabetes Panel",
    short: "Comprehensive diabetes monitoring.",
    tests: [
      { name: "Fasting Blood Sugar", price: 50 },
      { name: "Post Prandial Blood Sugar", price: 50 },
      { name: "Random Blood Sugar", price: 50 },
      { name: "HbA1c", price: 500 },
      { name: "GTT (Glucose Tolerance Test)", price: 150 },
      { name: "Insulin Fasting", price: 200 },
      { name: "C-Peptide", price: null },
      { name: "Urine Microalbumin", price: null },
    ],
  },
  {
    id: "arthritis",
    icon: "🦴",
    title: "Arthritis & Bone Profile",
    short: "Joint pain, bone health & inflammation.",
    tests: [
      { name: "RA Factor", price: 350 },
      { name: "ASO Titre", price: 600 },
      { name: "Uric Acid", price: 150 },
      { name: "Calcium", price: 150 },
      { name: "Phosphorus", price: 250 },
      { name: "Vitamin D", price: 1200 },
      { name: "ANA", price: 900 },
      { name: "Anti-CCP", price: 1300 },
      { name: "Alkaline Phosphatase", price: 150 },
    ],
  },
  {
    id: "microbiology",
    icon: "🧫",
    title: "Microbiology / Culture",
    short: "Culture & sensitivity across samples.",
    tests: [
      { name: "Blood Culture & Sensitivity", price: null },
      { name: "Urine Culture & Sensitivity", price: null },
      { name: "Stool Culture", price: null },
      { name: "Sputum Culture", price: null },
      { name: "Wound Swab Culture", price: null },
      { name: "Throat Swab Culture", price: null },
      { name: "AFB (TB) Smear & Culture", price: null },
      { name: "Fungal Culture", price: null },
    ],
  },
];

// Expandable Profile Groups for Biochemistry
export type ProfileGroup = {
  id: string;
  parentName: string;
  parentPrice: number;
  categoryId: string;
  category: string;
  subTests: { name: string; price: number }[];
};

export const PROFILE_GROUPS: ProfileGroup[] = [
  {
    id: "lipid",
    parentName: "Lipid Profile",
    parentPrice: 500,
    categoryId: "biochemistry",
    category: "Biochemistry",
    subTests: [
      { name: "Cholesterol", price: 150 },
      { name: "HDL", price: 150 },
      { name: "Triglyceride", price: 150 },
      { name: "CDL", price: 200 },
    ],
  },
  {
    id: "lft",
    parentName: "Liver Function Test (LFT)",
    parentPrice: 500,
    categoryId: "biochemistry",
    category: "Biochemistry",
    subTests: [
      { name: "Billirubin", price: 150 },
      { name: "SGPT", price: 150 },
      { name: "SGOT", price: 150 },
      { name: "Alkaline phosphate", price: 150 },
      { name: "Protien/albumin", price: 150 },
    ],
  },
  {
    id: "kft",
    parentName: "Kidney Function Test (KFT/RFT)",
    parentPrice: 600,
    categoryId: "biochemistry",
    category: "Biochemistry",
    subTests: [
      { name: "Creatinine", price: 150 },
      { name: "Urea", price: 150 },
      { name: "Uric acid", price: 150 },
      { name: "calcium", price: 150 },
      { name: "electrolyte", price: 400 },
    ],
  },
];

// Flat list for global search across categories (includes parent profiles and sub-tests)
export type FlatTest = Test & {
  category: string;
  categoryId: string;
  isProfile?: boolean;
  isSubTest?: boolean;
  parentName?: string;
  parentPrice?: number;
};

export const ALL_TESTS: FlatTest[] = [
  ...CATEGORIES.flatMap((c) =>
    c.tests.map((t) => {
      const isProf = PROFILE_GROUPS.some((g) => g.parentName === t.name);
      return {
        ...t,
        category: c.title,
        categoryId: c.id,
        isProfile: isProf,
      };
    })
  ),
  ...PROFILE_GROUPS.flatMap((g) =>
    g.subTests.map((st) => ({
      name: st.name,
      price: st.price,
      category: g.category,
      categoryId: g.categoryId,
      isSubTest: true,
      parentName: g.parentName,
      parentPrice: g.parentPrice,
    }))
  ),
];

export type Package = {
  id: string;
  emoji: string;
  name: string;
  best: string;
  tests: string[];
  badge?: string;
};

export const PACKAGES: Package[] = [
  {
    id: "body",
    emoji: "💚",
    name: "Healthcare Body Profile",
    best: "Complete body health screening",
    badge: "Most Popular",
    tests: [
      "CBC (Complete Blood Count)",
      "Fasting Blood Sugar",
      "Liver Function Test (LFT)",
      "Kidney Function Test (KFT/RFT)",
      "Lipid Profile",
      "Vitamin B12",
      "TFT (Thyroid Function Test)",
      "Vitamin D3",
      "HbA1c",
    ],
  },
  {
    id: "cardiac",
    emoji: "🫀",
    name: "Healthcare Cardiac Profile",
    best: "Heart health assessment & cardiac risk evaluation",
    tests: [
      "CBC (Complete Blood Count)",
      "Lipid Profile",
      "CK-MB",
      "LDH",
      "Lipoprotein A",
      "Homocysteine",
    ],
  },
  {
    id: "fever",
    emoji: "🤒",
    name: "Healthcare Fever profile",
    best: "Ideal for fever-related screening and infection assessment.",
    tests: [
      "CBC",
      "Malarial parasite",
      "Widal",
      "Dengue(NS1)",
      "urine",
      "CRP",
    ],
  },
  {
    id: "hormone",
    emoji: "💜",
    name: "Healthcare Hormone Profile",
    best: "Hormonal health evaluation & fertility assessment",
    badge: "For Women",
    tests: [
      "TFT (Thyroid Function Test)",
      "FSH",
      "LH",
      "Prolactin",
      "AMH",
    ],
  },
  {
    id: "cancer-female",
    emoji: "🩷",
    name: "Healthcare Cancer Profile (Female)",
    best: "Cancer screening for women",
    badge: "Female",
    tests: [
      "CBC (Complete Blood Count)",
      "AFP (Alpha Fetoprotein)",
      "CA 19.9",
      "CA 15.5",
      "CA 125",
      "CEA",
    ],
  },
  {
    id: "cancer-male",
    emoji: "💙",
    name: "Healthcare Cancer Profile (Male)",
    best: "Cancer screening for men",
    badge: "Male",
    tests: [
      "CBC (Complete Blood Count)",
      "AFP (Alpha Fetoprotein)",
      "CEA",
      "PSA (Prostate Specific Antigen)",
      "CA 19.9",
    ],
  },
];

export const REVIEWS = [
  {
    name: "Rajesh Patil",
    city: "Karjat",
    text: "Meher Clinical Laboratory has been our family's trusted lab for over 10 years. The reports are always accurate and the staff is very friendly and professional. Highly recommended!",
  },
  {
    name: "Sneha Deshmukh",
    city: "Karjat",
    text: "I was very impressed with their home collection service. The technician came on time, was very polite, and I received my reports on WhatsApp the same evening. Excellent service!",
  },
  {
    name: "Amit Sharma",
    city: "Kashele",
    text: "Best pathology lab in Karjat! The rates are very reasonable compared to branded labs, and the quality of reports is equally good. I always come here for all my family's tests.",
  },
  {
    name: "Priya Joshi",
    city: "Neral",
    text: "I got my full body checkup done here and the experience was great. Very clean lab, modern equipment, and the pathologist explained my reports in detail.",
  },
  {
    name: "Suresh Kulkarni",
    city: "Karjat",
    text: "Been visiting Meher Lab since 2005. The accuracy of their reports is unmatched. My doctor also prefers their reports. The 23 years of experience really shows in their work.",
  },
  {
    name: "Meena Bhosale",
    city: "Karjat",
    text: "Quick, affordable, and reliable. Got my thyroid and sugar tests done — reports came on the same day. The staff made me feel very comfortable.",
  },
  {
    name: "Vikram Gaikwad",
    city: "Karjat",
    text: "My elderly mother needed blood tests but couldn't visit the lab. Their home collection team came home and collected samples very carefully. Reports were sent on WhatsApp.",
  },
  {
    name: "Anjali More",
    city: "Khalapur",
    text: "I compared their rates with big labs in Mumbai — Meher Lab is much more affordable with the same quality. No need to go to the city for blood tests anymore!",
  },
];

export const FAQS = [
  {
    q: "What are the working hours of Meher Clinical Laboratory?",
    a: "We are open all 6 days from 8:00 AM to 9:00 PM",
  },
  {
    q: "Do you offer home sample collection?",
    a: "Yes — we offer home sample collection across the Karjat area. Book on WhatsApp at +91 9422666178.",
  },
  {
    q: "How long does it take to get reports?",
    a: "Most routine test reports are available on the same day. Some specialised tests may take 24–48 hours.",
  },
  {
    q: "How will I receive my reports?",
    a: "Reports are sent via WhatsApp. You can also collect physical reports from our lab or receive them via email.",
  },
  {
    q: "Do I need to come empty stomach for blood tests?",
    a: "For fasting tests (blood sugar fasting, lipid profile, etc.) you should fast for 10–12 hours. For other tests, fasting isn't required.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept Cash, UPI (Google Pay, PhonePe, Paytm), and bank transfer.",
  },
  {
    q: "Do you provide corporate health checkup services?",
    a: "Yes — we offer customised corporate packages with bulk pricing and on-site collection at your office.",
  },
  {
    q: "Are your reports accepted by all hospitals and doctors?",
    a: "Yes. Our reports follow standard medical protocols and are accepted by all hospitals, clinics, and doctors.",
  },
  {
    q: "How can I book a test?",
    a: "Call us at +91 9422666178, message us on WhatsApp, or visit our lab directly at Samarth Building, near Government Hospital, Karjat.",
  },
];

export const AREAS = [
  "Karjat Town",
  "Karjat Station",
  "Kashele",
  "Neral",
  "Khalapur",
  "Kalamb",
  "Palasdari",
  "Chowk",
];
