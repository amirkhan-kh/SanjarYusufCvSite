export const site = {
  title: "Sanjar Yusupov — Noldan Junior Pentestinggacha 10 oyda | Geeks Andijan",
  description:
    "Andijonda offline kiberxavfsizlik kursi: tarmoqlar, Linux, web razvedka va OWASP Top 10. 110 ta amaliy dars, xavfsiz laboratoriyalar va professional pentest hisoboti. Ustoz — Sanjar Yusupov.",
  brand: "Geeks",
  city: "Andijan",
};

export const contacts = {
  phone: "+998 90 211 31 23",
  phoneHref: "tel:+998902113123",
  instagram: "https://www.instagram.com/geeks.andijan",
  telegram: "https://t.me/geeks_support",
};

export const mentor = {
  name: "Sanjar Yusupov",
  firstName: "Sanjar",
  role: "Pentester · Ustoz",
  bio: "Faoliyati davomida turli real web-ilovalar va raqamli tizimlarning xavfsizligini tekshirish bo‘yicha loyihalarda ishtirok etgan. Endi shu amaliy tajribani Geeks Andijonda yangi avlod kiberxavfsizlik mutaxassislariga o‘rgatadi.",
  highlights: [
    { value: "Ko‘p yillik", label: "amaliy tajriba" },
    { value: "Web · API", label: "xavfsizlik testlari" },
    { value: "NDA", label: "mijoz maxfiyligi" },
  ],
  privacy:
    "Mijozlar va loyihalarga oid ma’lumotlar NDA asosida himoyalangan. Shu sababli loyihalar nomi, kompaniya ma’lumotlari, URL manzillari va aniqlangan zaifliklar tafsilotlari ochiq portfolio’da ko‘rsatilmaydi — faqat oshkor qilishga ruxsat berilgan umumiy ma’lumotlar keltirilgan.",
};

export const hero = {
  badge: "Yangi guruhga qabul ochiq",
  titleLines: ["Noldan Junior", "Pentestinggacha"],
  note: "(Kiberxavfsizlik)",
  accent: "10 oyda",
  text: "Tarmoqlar, Linux, web razvedka va OWASP Top 10. 110 ta amaliy dars, xavfsiz laboratoriyalarda real zaifliklarni topish va kurs oxirida professional pentest hisoboti.",
  primary: "Bepul konsultatsiyaga yozilish",
  secondary: "Dasturni ko‘rish",
  chips: [
    "Foundation",
    "Web Reconnaissance",
    "Client-Side Attacks",
    "Injection Vulnerabilities",
    "File Upload & Server-Side",
    "Authentication",
    "Web Attacks",
    "API Security",
    "Common Apps & Methodology",
  ],
};

export const stats = [
  { value: "10", suffix: " oy", label: "o‘qish davomiyligi", count: 10 },
  { value: "110", suffix: "", label: "amaliy dars", count: 110 },
  { value: "3", suffix: "×", label: "haftada, 90 daqiqadan", count: 3 },
  { value: "10–12", suffix: "", label: "o‘quvchi guruhda" },
];

export const roadmap = {
  eyebrow: "Yo‘l xaritasi",
  text: "Kurs 10 oy davomida 3 ta asosiy bosqichda olib boriladi: avval mustahkam poydevor, keyin web razvedka va nihoyat amaliy laboratoriyalarda real zaifliklar.",
  modules: [
    {
      n: "01",
      meta: "1–2 oy · 22 dars",
      title: "Asosiy bilimlar",
      text: "Kompyuter, internet, tarmoqlar va serverlar qanday ishlashi, Linux, ma’lumotlarni himoyalash asoslari va web-saytlar tuzilishi.",
      points: ["Tarmoqlar va serverlar", "Linux operatsion tizimi", "Web qanday ishlaydi"],
    },
    {
      n: "02",
      meta: "3-oy · 11 dars",
      title: "Web razvedka",
      text: "Ochiq manbalardan sayt, server va domen haqida ma’lumot yig‘ish — xavfsizlik tekshiruvidan oldingi razvedka jarayoni.",
      points: ["Sayt texnologiyalarini aniqlash", "Server va domen ma’lumotlari", "Ochiq manbalar (OSINT)"],
    },
    {
      n: "03",
      meta: "4–10 oy · 77 dars",
      title: "Amaliy pentest",
      text: "Maxsus tayyorlangan xavfsiz laboratoriyalarda OWASP Top 10 zaifliklarini bosqichma-bosqich topish va tahlil qilish.",
      points: ["OWASP Top 10 zaifliklari", "Zaiflik sababi va aniqlanishi", "Himoya va pentest hisoboti"],
      featured: true,
    },
  ],
};

export const projects = {
  eyebrow: "Natija",
  items: [
    {
      tag: "1–2 oy · Poydevor",
      title: "Fundamental bilimlar",
      text: "Tarmoqlar, portlar, Linux terminali va HTTP qanday ishlashini chuqur tushunish — har bir hujum va himoyaning asosi.",
      stack: ["Linux", "Tarmoqlar", "HTTP"],
      hue: 196,
      preview: "terminal" as const,
      url: "kali@lab: ~",
    },
    {
      tag: "4–7 oy · Laboratoriya",
      title: "Zaiflikni topish",
      text: "Burp Suite bilan so‘rovlarni ushlash, SQLi, XSS va IDOR kabi zaifliklarni xavfsiz laboratoriyada aniqlash va tasdiqlash.",
      stack: ["Burp Suite", "SQLmap", "FFUF"],
      hue: 176,
      preview: "intercept" as const,
      url: "burp · proxy/intercept",
    },
    {
      tag: "8–10 oy · Chuqur bosqich",
      title: "Pentestni chuqur o‘rganish",
      text: "Razvedkadan zaiflikni tasdiqlashgacha to‘liq pentest jarayoni, Bug Bounty metodologiyasi va professional hisobot.",
      stack: ["OWASP Top 10", "Nuclei", "Hisobot"],
      hue: 210,
      preview: "report" as const,
      url: "pentest-report · lab-07",
      featured: true,
    },
  ],
};

export const experience = [
  {
    period: "01 · Web",
    company: "Web-sayt va ilovalar xavfsizligi",
    role: "Pentest",
    place: "real loyihalar",
    text: "Real web-ilovalarni OWASP Top 10 bo‘yicha to‘liq xavfsizlik tekshiruvidan o‘tkazish.",
    current: true,
  },
  {
    period: "02 · API",
    company: "Tizim va API’larni sinash",
    role: "API testing",
    place: "REST · GraphQL",
    text: "Backend tizimlari, integratsiyalar va API’larni sinovdan o‘tkazish.",
  },
  {
    period: "03 · Access",
    company: "Kirish va ruxsatlar",
    role: "Access control",
    place: "rollar · sessiyalar",
    text: "Autentifikatsiya, sessiyalar, rollar va IDOR / Broken Access Control holatlarini tekshirish.",
  },
  {
    period: "04 · Analysis",
    company: "Zaifliklarni aniqlash va tahlil",
    role: "Vulnerability assessment",
    place: "xavf darajasi",
    text: "Topilgan zaifliklarni tasdiqlash, ta’sir darajasini baholash va xavf toifasini belgilash.",
  },
  {
    period: "05 · Config",
    company: "Tizim konfiguratsiyasi",
    role: "Configuration review",
    place: "server · xizmatlar",
    text: "Server, xizmatlar va muhit sozlamalaridagi Security Misconfiguration holatlarini aniqlash.",
  },
  {
    period: "06 · Report",
    company: "Hisobot va tavsiyalar",
    role: "Reporting",
    place: "mijoz uchun",
    text: "Topilmalar, isbotlar va tuzatish bo‘yicha tavsiyalardan iborat professional xavfsizlik hisoboti.",
  },
];

export const skills = [
  { group: "Razvedka", items: ["Nmap", "Subfinder", "Amass", "httpx", "WhatWeb", "Wappalyzer"] },
  { group: "Web testlar", items: ["Burp Suite", "FFUF", "Gobuster", "Dirsearch", "Katana"] },
  { group: "Zaifliklar skaneri", items: ["SQLmap", "Nuclei", "Nikto", "Dalfox", "WPScan"] },
  { group: "Ekspluatatsiya va tarmoq", items: ["Metasploit", "Hydra", "Ncat", "Wireshark"] },
  { group: "Tillar", items: ["Python", "JavaScript", "HTML", "CSS"] },
];

export const audience = {
  eyebrow: "Kimlar uchun",
  title: "Tajriba shart emas — noldan boshlaymiz",
  items: [
    "12–18 yoshdagi, IT’ga qiziqadigan yoshlar",
    "Qaysi IT yo‘nalishdan boshlashni bilmayotganlar",
    "Farzandiga kelajak kasbini bermoqchi bo‘lgan ota-onalar",
    "YouTube’dan o‘rganib, tizim topa olmaganlar",
  ],
};

export const format = {
  eyebrow: "O‘qish formati",
  title: "Offline, Andijonda, kichik guruhda",
  items: [
    { label: "Jadval", value: "Haftada 3 kun" },
    { label: "Dars davomiyligi", value: "90 daqiqa" },
    { label: "Guruh hajmi", value: "10–12 o‘quvchi" },
    { label: "Umumiy muddat", value: "10 oy" },
  ],
};
