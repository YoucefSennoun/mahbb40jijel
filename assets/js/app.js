/* ============================================
   MOSQUE WEBSITE - MAIN APPLICATION
   Hai 40 Hectares, Jijel, Algeria
   ============================================ */

// ── Configuration ──
const CONFIG = {
  // Jijel, Algeria coordinates
  latitude: 36.821,
  longitude: 5.7635,
  // Calculation method 19 = Algeria
  method: 19,
  // Aladhan API base URL
  apiBase: 'https://api.aladhan.com/v1',
  // Default language
  defaultLang: 'ar',
  // Storage key
  langKey: 'mosque-lang-preference',
};

// ── Content Data (Bilingual) ──
const CONTENT = {
  ar: {
    dir: 'rtl',
    lang: 'ar',
    // Header
    logoName: 'مسجد حي 40 هكتار',
    logoLocation: 'جيجل، الجزائر',
    navHome: 'الرئيسية',
    navPrayer: 'مواقيت الصلاة',
    navAbout: 'عن المسجد',
    navPrograms: 'البرامج',
    navServices: 'الخدمات',
    navResources: 'الموارد',
    navContact: 'اتصل بنا',

    // Hero
    bismillah: 'بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ',
    heroTitle: 'مسجد حي 40 هكتار',
    heroSubtitle: 'بيت من بيوت الله في مدينة جيجل — مكان للعبادة والتعلم والتآخي في طاعة الله سبحانه وتعالى',
    heroBtnPrayer: 'مواقيت الصلاة',
    heroBtnAbout: 'تعرف علينا',
    heroScroll: 'اكتشف المزيد',

    // Prayer Times
    prayerTitle: 'مواقيت الصلاة',
    prayerSubtitle: 'أوقات الصلاة اليومية لمدينة جيجل، الجزائر',
    gregorianDate: 'التاريخ الميلادي',
    hijriDate: 'التاريخ الهجري',
    nextPrayer: 'الصلاة القادمة',
    fajr: 'الفجر',
    sunrise: 'الشروق',
    dhuhr: 'الظهر',
    asr: 'العصر',
    maghrib: 'المغرب',
    isha: 'العشاء',
    hours: 'ساعة',
    minutes: 'دقيقة',
    seconds: 'ثانية',

    // About
    aboutTitle: 'عن المسجد',
    aboutSubtitle: 'تعرف على مسجد حي 40 هكتار',
    aboutHeading: 'مسجد حي 40 هكتار — جيجل',
    aboutText1: 'يقع مسجد حي 40 هكتار في قلب مدينة جيجل، وهو صرح ديني يخدم سكان الحي والمنطقة المحيطة. يقدم المسجد خدمات دينية متنوعة تشمل إقامة الصلوات الخمس وصلاة الجمعة والتراويح.',
    aboutText2: 'يتميز المسجد بموقعه المتميز في حي 40 هكتار، حيث يستقبل المصلين يومياً ويقدم دروساً وحلقات علمية في مختلف العلوم الشرعية.',
    featureQuran: 'حلقات تحفيظ القرآن',
    featureLessons: 'دروس علمية يومية',
    featureWomen: 'برامج نسائية',
    featureYouth: 'أنشطة الشباب',

    // Programs
    programsTitle: 'البرامج والأنشطة',
    programsSubtitle: 'برامج متنوعة لخدمة المجتمع وتعليم الدين',
    program1Title: 'حلقات القرآن الكريم',
    program1Desc: 'حلقات يومية لتحفيظ القرآن الكريم وتجويده للأطفال والكبار مع مشايخ متخصصين',
    program1Schedule: 'يومياً بعد صلاة الفجر والعصر',
    program2Title: 'الدروس العلمية',
    program2Desc: 'دروس في الفقه والعقيدة والتفسير والحديث والسيرة النبوية الشريفة',
    program2Schedule: 'بعد صلاة المغرب يومياً',
    program3Title: 'برنامج الشباب',
    program3Desc: 'أنشطة تربوية وترفيهية للشباب تشمل مسابقات حفظ القرآن ورحلات ودورات تكوينية',
    program3Schedule: 'كل سبت',
    program4Title: 'التعليم القرآني للأطفال',
    program4Desc: 'برنامج متكامل لتعليم الأطفال القرآن الكريم والأخلاق الإسلامية وأحكام الدين',
    program4Schedule: 'أيام الأسبوع من الأحد إلى الخميس',
    program5Title: 'البرامج النسائية',
    program5Desc: 'دروس وحلقات علمية مخصصة للنساء في الفقه والتربية الإسلامية وتحفيظ القرآن',
    program5Schedule: 'أيام الأحد والثلاثاء والخميس',
    program6Title: 'محاضرات وندوات',
    program6Desc: 'محاضرات دورية يلقيها علماء ودعاة في مواضيع دينية ومجتمعية متنوعة',
    program6Schedule: 'شهرياً',

    // Services
    servicesTitle: 'الخدمات',
    servicesSubtitle: 'خدمات المسجد للمجتمع',
    service1Title: 'عقد القران',
    service1Desc: 'تنظيم مراسم عقد القران وفق الشريعة الإسلامية',
    service2Title: 'صلاة الجنازة',
    service2Desc: 'تنظيم صلاة الجنازة وتقديم الدعم للأسر',
    service3Title: 'الزكاة والصدقات',
    service3Desc: 'جمع وتوزيع الزكاة والصدقات على المحتاجين',
    service4Title: 'الاستشارات الشرعية',
    service4Desc: 'تقديم الفتاوى والاستشارات الشرعية للمسلمين',

    // Resources
    resourcesTitle: 'الموارد الإسلامية',
    resourcesSubtitle: 'مصادر مفيدة لتعميق المعرفة الدينية',
    resource1Title: 'الفتوى الإلكترونية',
    resource1Desc: 'خدمة الفتوى الإلكترونية من وزارة الشؤون الدينية والأوقاف',
    resource1Link: 'زيارة الموقع',
    resource2Title: 'القرآن الكريم',
    resource2Desc: 'الاستماع إلى القرآن الكريم بأصوات مختلف القراء',
    resource2Link: 'الاستماع الآن',
    resource3Title: 'التقويم الهجري',
    resource3Desc: 'معرفة التواريخ الهجرية والمناسبات الدينية',
    resource3Link: 'عرض التقويم',

    // Contact
    contactTitle: 'اتصل بنا',
    contactSubtitle: 'تواصل معنا لأي استفسار',
    contactHeading: 'تواصل معنا',
    contactText: 'نرحب بجميع استفساراتكم واقتراحاتكم. لا تترددوا في التواصل معنا عبر أي من الوسائل التالية.',
    contactAddress: 'العنوان',
    contactAddressValue: 'حي 40 هكتار، جيجل، الجزائر 18000',
    contactPhone: 'الهاتف',
    contactEmail: 'البريد الإلكتروني',
    contactHours: 'أوقات العمل',
    contactHoursValue: 'مفتوح يومياً لجميع الصلوات',
    formName: 'الاسم الكامل',
    formEmail: 'البريد الإلكتروني',
    formSubject: 'الموضوع',
    formMessage: 'الرسالة',
    formSend: 'إرسال الرسالة',

    // Quran Banner
    quranVerse: 'إِنَّمَا يَعْمُرُ مَسَاجِدَ اللَّهِ مَنْ آمَنَ بِاللَّهِ وَالْيَوْمِ الْآخِرِ وَأَقَامَ الصَّلَاةَ وَآتَى الزَّكَاةَ وَلَمْ يَخْشَ إِلَّا اللَّهَ',
    quranReference: 'سورة التوبة — الآية 18',

    // Announcements
    announcementsTitle: 'الإعلانات والأخبار',
    announcementsSubtitle: 'آخر الأخبار والإعلانات من المسجد',
    announcement1Badge: 'إعلان',
    announcement1Title: 'مواعيد صلاة التراويح',
    announcement1Text: 'نعلم المصلين الكرام أن صلاة التراويح تقام يومياً خلال شهر رمضان المبارك بعد صلاة العشاء مباشرة.',
    announcement1Date: 'إدارة المسجد',
    announcement2Badge: 'جديد',
    announcement2Title: 'دورة تحفيظ القرآن الكريم',
    announcement2Text: 'يسرنا الإعلان عن فتح باب التسجيل في دورة تحفيظ القرآن الكريم للأطفال والكبار. المقاعد محدودة.',
    announcement2Date: 'التسجيل مفتوح',
    announcement3Badge: 'مهم',
    announcement3Title: 'صيانة وتجديد المسجد',
    announcement3Text: 'يتم حالياً إجراء أعمال صيانة وتجديد في بعض أجزاء المسجد. نعتذر عن أي إزعاج ونشكر تفهمكم.',
    announcement3Date: 'إدارة المسجد',

    // Stats
    stat1Number: '5',
    stat1Label: 'صلوات يومية',
    stat2Number: '200+',
    stat2Label: 'مصلٍّ يومياً',
    stat3Number: '50+',
    stat3Label: 'طالب قرآن',
    stat4Number: '10+',
    stat4Label: 'برنامج أسبوعي',

    // Footer
    footerDesc: 'مسجد حي 40 هكتار — بيت من بيوت الله في مدينة جيجل، مكان للعبادة والتعلم وخدمة المجتمع.',
    footerQuickLinks: 'روابط سريعة',
    footerPrograms: 'البرامج',
    footerContact: 'التواصل',
    footerRights: '© 2025 مسجد حي 40 هكتار — جيجل، الجزائر. جميع الحقوق محفوظة.',
    footerQuran: 'وَأَنَّ الْمَسَاجِدَ لِلَّهِ فَلَا تَدْعُوا مَعَ اللَّهِ أَحَدًا',
  },

  en: {
    dir: 'ltr',
    lang: 'en',
    // Header
    logoName: 'Hai 40 Hectares Mosque',
    logoLocation: 'Jijel, Algeria',
    navHome: 'Home',
    navPrayer: 'Prayer Times',
    navAbout: 'About',
    navPrograms: 'Programs',
    navServices: 'Services',
    navResources: 'Resources',
    navContact: 'Contact',

    // Hero
    bismillah: 'بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ',
    heroTitle: 'Hai 40 Hectares Mosque',
    heroSubtitle: 'A house of Allah in the city of Jijel — a place for worship, learning, and brotherhood in obedience to Allah.',
    heroBtnPrayer: 'Prayer Times',
    heroBtnAbout: 'Learn More',
    heroScroll: 'Discover More',

    // Prayer Times
    prayerTitle: 'Prayer Times',
    prayerSubtitle: 'Daily prayer times for Jijel, Algeria',
    gregorianDate: 'Gregorian Date',
    hijriDate: 'Hijri Date',
    nextPrayer: 'Next Prayer',
    fajr: 'Fajr',
    sunrise: 'Sunrise',
    dhuhr: 'Dhuhr',
    asr: 'Asr',
    maghrib: 'Maghrib',
    isha: 'Isha',
    hours: 'Hours',
    minutes: 'Minutes',
    seconds: 'Seconds',

    // About
    aboutTitle: 'About the Mosque',
    aboutSubtitle: 'Learn about Hai 40 Hectares Mosque',
    aboutHeading: 'Hai 40 Hectares Mosque — Jijel',
    aboutText1: 'Located in the heart of Jijel city, Hai 40 Hectares Mosque is a religious landmark serving the neighborhood and surrounding areas. The mosque offers various religious services including the five daily prayers, Friday prayers, and Tarawih.',
    aboutText2: 'The mosque stands out with its prominent location in the Hai 40 Hectares neighborhood, welcoming worshippers daily and providing educational lessons and scholarly circles in various Islamic sciences.',
    featureQuran: 'Quran Memorization',
    featureLessons: 'Daily Islamic Lessons',
    featureWomen: "Women's Programs",
    featureYouth: 'Youth Activities',

    // Programs
    programsTitle: 'Programs & Activities',
    programsSubtitle: 'Diverse programs for community service and religious education',
    program1Title: 'Quran Circles',
    program1Desc: 'Daily circles for Quran memorization and Tajweed for children and adults with specialized scholars.',
    program1Schedule: 'Daily after Fajr and Asr prayers',
    program2Title: 'Islamic Studies',
    program2Desc: 'Lessons in Fiqh, Aqeedah, Tafsir, Hadith, and the Prophet\'s biography.',
    program2Schedule: 'Daily after Maghrib prayer',
    program3Title: 'Youth Program',
    program3Desc: 'Educational and recreational activities for youth including Quran competitions, trips, and training courses.',
    program3Schedule: 'Every Saturday',
    program4Title: 'Children\'s Quran Education',
    program4Desc: 'A comprehensive program teaching children the Quran, Islamic ethics, and religious rulings.',
    program4Schedule: 'Weekdays Sunday to Thursday',
    program5Title: "Women's Programs",
    program5Desc: 'Dedicated lessons and study circles for women in Fiqh, Islamic education, and Quran memorization.',
    program5Schedule: 'Sunday, Tuesday & Thursday',
    program6Title: 'Lectures & Seminars',
    program6Desc: 'Periodic lectures delivered by scholars on various religious and social topics.',
    program6Schedule: 'Monthly',

    // Services
    servicesTitle: 'Services',
    servicesSubtitle: 'Mosque services for the community',
    service1Title: 'Marriage Services',
    service1Desc: 'Organizing marriage ceremonies according to Islamic law.',
    service2Title: 'Funeral Prayer',
    service2Desc: 'Organizing funeral prayers and providing family support.',
    service3Title: 'Zakat & Charity',
    service3Desc: 'Collection and distribution of Zakat and charity to those in need.',
    service4Title: 'Islamic Consultation',
    service4Desc: 'Providing fatwas and Islamic consultations for Muslims.',

    // Resources
    resourcesTitle: 'Islamic Resources',
    resourcesSubtitle: 'Useful sources to deepen religious knowledge',
    resource1Title: 'Electronic Fatwa',
    resource1Desc: 'Electronic Fatwa service from the Ministry of Religious Affairs and Endowments.',
    resource1Link: 'Visit Website',
    resource2Title: 'Holy Quran',
    resource2Desc: 'Listen to the Holy Quran recited by various renowned reciters.',
    resource2Link: 'Listen Now',
    resource3Title: 'Hijri Calendar',
    resource3Desc: 'Learn about Hijri dates and religious occasions throughout the year.',
    resource3Link: 'View Calendar',

    // Contact
    contactTitle: 'Contact Us',
    contactSubtitle: 'Get in touch with us for any inquiries',
    contactHeading: 'Get in Touch',
    contactText: 'We welcome all your inquiries and suggestions. Please don\'t hesitate to reach out through any of the following channels.',
    contactAddress: 'Address',
    contactAddressValue: 'Hai 40 Hectares, Jijel, Algeria 18000',
    contactPhone: 'Phone',
    contactEmail: 'Email',
    contactHours: 'Hours',
    contactHoursValue: 'Open daily for all prayers',
    formName: 'Full Name',
    formEmail: 'Email Address',
    formSubject: 'Subject',
    formMessage: 'Message',
    formSend: 'Send Message',

    // Quran Banner
    quranVerse: 'إِنَّمَا يَعْمُرُ مَسَاجِدَ اللَّهِ مَنْ آمَنَ بِاللَّهِ وَالْيَوْمِ الْآخِرِ وَأَقَامَ الصَّلَاةَ وَآتَى الزَّكَاةَ وَلَمْ يَخْشَ إِلَّا اللَّهَ',
    quranReference: 'Surah At-Tawbah — Verse 18',

    // Announcements
    announcementsTitle: 'Announcements & News',
    announcementsSubtitle: 'Latest news and announcements from the mosque',
    announcement1Badge: 'Announcement',
    announcement1Title: 'Tarawih Prayer Schedule',
    announcement1Text: 'We inform worshippers that Tarawih prayer is held daily during the blessed month of Ramadan immediately after Isha prayer.',
    announcement1Date: 'Mosque Administration',
    announcement2Badge: 'New',
    announcement2Title: 'Quran Memorization Course',
    announcement2Text: 'We are pleased to announce the opening of registration for the Quran memorization course for children and adults. Seats are limited.',
    announcement2Date: 'Registration Open',
    announcement3Badge: 'Important',
    announcement3Title: 'Mosque Renovation',
    announcement3Text: 'Maintenance and renovation work is currently underway in some parts of the mosque. We apologize for any inconvenience and thank you for your understanding.',
    announcement3Date: 'Mosque Administration',

    // Stats
    stat1Number: '5',
    stat1Label: 'Daily Prayers',
    stat2Number: '200+',
    stat2Label: 'Daily Worshippers',
    stat3Number: '50+',
    stat3Label: 'Quran Students',
    stat4Number: '10+',
    stat4Label: 'Weekly Programs',

    // Footer
    footerDesc: 'Hai 40 Hectares Mosque — a house of Allah in Jijel city, a place for worship, learning, and serving the community.',
    footerQuickLinks: 'Quick Links',
    footerPrograms: 'Programs',
    footerContact: 'Contact',
    footerRights: '© 2025 Hai 40 Hectares Mosque — Jijel, Algeria. All rights reserved.',
    footerQuran: 'وَأَنَّ الْمَسَاجِدَ لِلَّهِ فَلَا تَدْعُوا مَعَ اللَّهِ أَحَدًا',
  }
};

// ── State ──
let currentLang = localStorage.getItem(CONFIG.langKey) || CONFIG.defaultLang;
let prayerTimesData = null;
let countdownInterval = null;

// ── Prayer Names Mapping ──
const PRAYER_KEYS = ['Fajr', 'Sunrise', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];
const PRAYER_ICONS = {
  Fajr: '🌙',
  Sunrise: '🌅',
  Dhuhr: '☀️',
  Asr: '🌤️',
  Maghrib: '🌇',
  Isha: '🌃'
};
const PRAYER_NAME_MAP = {
  Fajr: 'fajr',
  Sunrise: 'sunrise',
  Dhuhr: 'dhuhr',
  Asr: 'asr',
  Maghrib: 'maghrib',
  Isha: 'isha'
};

// ════════════════════════════════════════════
//  INITIALIZATION
// ════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  initNavigation();
  initScrollAnimations();
  initPrayerTimes();
  initBackToTop();
  initContactForm();
});

// ════════════════════════════════════════════
//  LANGUAGE SYSTEM
// ════════════════════════════════════════════
function initLanguage() {
  applyLanguage(currentLang);

  // Set up language toggle buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      if (lang !== currentLang) {
        currentLang = lang;
        localStorage.setItem(CONFIG.langKey, lang);
        applyLanguage(lang);
      }
    });
  });
}

function applyLanguage(lang) {
  const content = CONTENT[lang];
  if (!content) return;

  // Set document direction and language
  document.body.setAttribute('dir', content.dir);
  document.documentElement.setAttribute('lang', content.lang);

  // Update all translatable elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (content[key]) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = content[key];
      } else {
        el.textContent = content[key];
      }
    }
  });

  // Update language toggle buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Update prayer time card names if data is loaded
  if (prayerTimesData) {
    updatePrayerDisplay();
  }
}

// ════════════════════════════════════════════
//  NAVIGATION
// ════════════════════════════════════════════
function initNavigation() {
  const header = document.querySelector('.header');
  const mobileToggle = document.querySelector('.mobile-menu-toggle');
  const nav = document.querySelector('.nav');
  const navLinks = document.querySelectorAll('.nav-link');

  // Header scroll effect
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
  });

  // Mobile menu toggle
  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      mobileToggle.classList.toggle('active');
      nav.classList.toggle('open');
      document.body.style.overflow = nav.classList.contains('open') ? 'hidden' : '';
    });
  }

  // Close mobile menu on link click
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (nav.classList.contains('open')) {
        mobileToggle.classList.remove('active');
        nav.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  });

  // Active section tracking
  const sections = document.querySelectorAll('section[id]');
  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -80% 0px',
    threshold: 0
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => sectionObserver.observe(section));
}

// ════════════════════════════════════════════
//  PRAYER TIMES
// ════════════════════════════════════════════
async function initPrayerTimes() {
  try {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();

    const url = `${CONFIG.apiBase}/timings/${dd}-${mm}-${yyyy}?latitude=${CONFIG.latitude}&longitude=${CONFIG.longitude}&method=${CONFIG.method}`;

    const response = await fetch(url);
    const data = await response.json();

    if (data.code === 200) {
      prayerTimesData = data.data;
      updatePrayerDisplay();
      updateDateDisplay();
      startCountdown();
    }
  } catch (error) {
    console.error('Failed to fetch prayer times:', error);
    showPrayerError();
  }
}

function updatePrayerDisplay() {
  const content = CONTENT[currentLang];
  const timings = prayerTimesData.timings;

  PRAYER_KEYS.forEach(key => {
    const card = document.querySelector(`.prayer-card[data-prayer="${key}"]`);
    if (card) {
      const nameEl = card.querySelector('.prayer-card-name');
      const nameArEl = card.querySelector('.prayer-card-name-ar');
      const timeEl = card.querySelector('.prayer-card-time');

      if (nameEl) nameEl.textContent = content[PRAYER_NAME_MAP[key]];
      if (nameArEl && currentLang === 'en') {
        nameArEl.textContent = CONTENT.ar[PRAYER_NAME_MAP[key]];
      } else if (nameArEl && currentLang === 'ar') {
        nameArEl.textContent = '';
      }
      if (timeEl) {
        // Clean the time string (remove timezone info)
        const time = timings[key].split(' ')[0];
        timeEl.textContent = time;
      }
    }
  });

  highlightCurrentPrayer();
}

function updateDateDisplay() {
  const date = prayerTimesData.date;

  const gregorianEl = document.getElementById('gregorian-date');
  const hijriEl = document.getElementById('hijri-date');

  if (gregorianEl) {
    gregorianEl.textContent = date.readable;
  }
  if (hijriEl) {
    const h = date.hijri;
    hijriEl.textContent = `${h.day} ${h.month.ar} ${h.year}`;
  }
}

function getNextPrayer() {
  if (!prayerTimesData) return null;

  const now = new Date();
  const timings = prayerTimesData.timings;
  // Only consider actual prayer times (not sunrise)
  const prayerOrder = ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];

  for (const prayer of prayerOrder) {
    const timeStr = timings[prayer].split(' ')[0];
    const [hours, minutes] = timeStr.split(':').map(Number);
    const prayerTime = new Date(now);
    prayerTime.setHours(hours, minutes, 0, 0);

    if (prayerTime > now) {
      return { name: prayer, time: prayerTime };
    }
  }

  // If all prayers have passed, next is tomorrow's Fajr
  const fajrStr = timings.Fajr.split(' ')[0];
  const [fh, fm] = fajrStr.split(':').map(Number);
  const tomorrowFajr = new Date(now);
  tomorrowFajr.setDate(tomorrowFajr.getDate() + 1);
  tomorrowFajr.setHours(fh, fm, 0, 0);

  return { name: 'Fajr', time: tomorrowFajr };
}

function highlightCurrentPrayer() {
  const next = getNextPrayer();
  if (!next) return;

  document.querySelectorAll('.prayer-card').forEach(card => {
    card.classList.remove('active');
  });

  const activeCard = document.querySelector(`.prayer-card[data-prayer="${next.name}"]`);
  if (activeCard) {
    activeCard.classList.add('active');
  }
}

function startCountdown() {
  if (countdownInterval) clearInterval(countdownInterval);

  function updateCountdown() {
    const next = getNextPrayer();
    if (!next) return;

    const content = CONTENT[currentLang];
    const now = new Date();
    const diff = next.time - now;

    if (diff <= 0) {
      // Prayer time reached, refresh data
      initPrayerTimes();
      return;
    }

    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    const nameEl = document.getElementById('next-prayer-name');
    const hoursEl = document.getElementById('countdown-hours');
    const minutesEl = document.getElementById('countdown-minutes');
    const secondsEl = document.getElementById('countdown-seconds');

    if (nameEl) nameEl.textContent = content[PRAYER_NAME_MAP[next.name]];
    if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
    if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
    if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');
  }

  updateCountdown();
  countdownInterval = setInterval(updateCountdown, 1000);
}

function showPrayerError() {
  const grid = document.querySelector('.prayer-grid');
  if (grid) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 2rem; color: var(--color-text-muted);">
        <p>⚠️ Unable to load prayer times. Please check your internet connection.</p>
      </div>
    `;
  }
}

// ════════════════════════════════════════════
//  SCROLL ANIMATIONS
// ════════════════════════════════════════════
function initScrollAnimations() {
  const elements = document.querySelectorAll('.animate-on-scroll');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  elements.forEach(el => observer.observe(el));
}

// ════════════════════════════════════════════
//  BACK TO TOP
// ════════════════════════════════════════════
function initBackToTop() {
  const btn = document.querySelector('.back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 500);
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ════════════════════════════════════════════
//  CONTACT FORM
// ════════════════════════════════════════════
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Simple validation
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    if (!data.name || !data.email || !data.message) {
      alert(currentLang === 'ar' ? 'يرجى ملء جميع الحقول المطلوبة' : 'Please fill in all required fields');
      return;
    }

    // Simulate form submission
    const btn = form.querySelector('.btn-primary');
    const originalText = btn.textContent;
    btn.textContent = currentLang === 'ar' ? 'جاري الإرسال...' : 'Sending...';
    btn.disabled = true;

    setTimeout(() => {
      alert(currentLang === 'ar' ? 'تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.' : 'Your message has been sent successfully! We will get back to you soon.');
      form.reset();
      btn.textContent = originalText;
      btn.disabled = false;
    }, 1500);
  });
}
