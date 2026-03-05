/* ===========================
   TRANSLATIONS
=========================== */

const translations = {
  en: {
    nav_about: "About",
    nav_education: "Education",
    nav_skills: "Skills",
    nav_resume: "Resume",

    about_title: "About Me",
    projects_title: "Projects in Progress",
    edu_title: "Education",
    skills_title: "Skills",
    contact_title: "Contact",

    about_text_1:
      "I'm a Computer Science student at BMCC currently working toward my associate degree. I'm developing my programming skills in Python, C++, JavaScript, HTML, and CSS while learning how software and web applications are built.",

    about_text_2:
      "I enjoy building small projects and experimenting with different technologies to strengthen my understanding of programming and problem solving. I also created a simple website for a local business to help customers easily access delivery services such as DoorDash, Grubhub, and Uber Eats.",

    name: "Mohamed Adebba",
    subtitle:
      "Passionate Computer Science Undergrad at BMCC • Aspiring Software Engineer",

    btn_projects: "View Projects",
    btn_contact: "Contact Me",

    p1_title: "Lovely Loveseats Receipt System",
p1_desc:
  "Currently building a Python program that generates customer receipts, calculates totals, and practices basic programming logic.",

  p2_title: "Tic-Tac-Toe",
  p2_desc:
    "Developing a Tic-Tac-Toe game to practice game logic, win-condition detection, and problem solving in programming.",

    p3_title: "Mohsena Hearts Association (In Progress)",
p3_desc:
  "Working on a website for a nonprofit organization to practice responsive design and online donation features.",

  p4_title: "Restaurant Website — Rivington Deli",
  p4_desc:
    "Designing a website for a local restaurant to showcase the business and provide easy access to delivery platforms such as DoorDash, Grubhub, and Uber Eats.",

    edu_school: "Borough of Manhattan Community College (BMCC)",
    edu_degree: "A.S. in Computer Science",
    edu_grad: "Expected Graduation: 2027",
    edu_gpa_label: "GPA:",

    skills_prog_title: "Programming",
    skills_core_title: "Core",
    skills_core_items: [
      "Problem Solving",
      "Communication",
      "Teamwork",
      "Attention to Detail"
    ],

    skills_lang_title: "Languages",
    skills_lang_items: [
      "Arabic (Excellent)",
      "English (Very Good)",
      "French (Good)"
    ],

    contact_email: "Email",
    contact_linkedin: "LinkedIn",
    contact_github: "GitHub",

    footer_name: "Mohamed Adebba",
    footer_rights: "All rights reserved."
  },

  fr: {
    nav_about: "À propos",
    nav_education: "Formation",
    nav_skills: "Compétences",
    nav_resume: "CV",

    about_title: "À propos de moi",
    projects_title: "Projets",
    edu_title: "Formation",
    skills_title: "Compétences",
    contact_title: "Contact",

    about_text_1:
      "Je suis étudiant en informatique à BMCC et je poursuis actuellement mon diplôme associé. Je développe mes compétences en Python, C++, JavaScript, HTML et CSS.",

    about_text_2:
      "J’aime créer de petits projets et expérimenter différentes technologies afin de renforcer ma compréhension de la programmation.",

    name: "Mohamed Adebba",
    subtitle:
      "Étudiant passionné en informatique à BMCC • Futur ingénieur logiciel",

    btn_projects: "Voir les projets",
    btn_contact: "Me contacter",

    p1_title: "Système de reçus Lovely Loveseats",
    p1_desc:
      "Projet Python qui génère des reçus clients et accélère le passage en caisse.",

    p2_title: "Morpion (Tic-Tac-Toe)",
    p2_desc:
      "Logique du jeu avec vérification des conditions de victoire.",

    p3_title: "Mohsena Hearts Association (En cours)",
    p3_desc:
      "Développement d’un site pour simplifier les dons.",

    p4_title: "Site vitrine — Rivington Deli",
    p4_desc:
      "Conception et développement d’un site pour présenter l’établissement.",

    edu_school: "Borough of Manhattan Community College (BMCC)",
    edu_degree: "A.S. en informatique",
    edu_grad: "Diplôme prévu : 2027",
    edu_gpa_label: "Moyenne (GPA) :",

    skills_prog_title: "Programmation",

    skills_core_title: "Compétences clés",
    skills_core_items: [
      "Résolution de problèmes",
      "Communication",
      "Travail d’équipe",
      "Sens du détail"
    ],

    skills_lang_title: "Langues",
    skills_lang_items: [
      "Arabe (Excellent)",
      "Anglais (Très bon)",
      "Français (Bon)"
    ],

    contact_email: "Email",
    contact_linkedin: "LinkedIn",
    contact_github: "GitHub",

    footer_name: "Mohamed Adebba",
    footer_rights: "Tous droits réservés."
  }
};

/* ===========================
   BRAND TYPEWRITER (TOP LEFT)
=========================== */

const brandPhrases = {
  en: [
    "Passionate Computer Science Undergrad",
    "Aspiring Software Engineer",
    "Web Developer"
  ],
  fr: [
    "Étudiant passionné en informatique",
    "Ingénieur logiciel en devenir",
    "Développeur web"
  ]
};

let brandTimer = null;

function startBrandTypewriter(phrases) {
  const el = document.getElementById("brandType");
  if (!el || !Array.isArray(phrases) || phrases.length === 0) return;

  // stop any previous loop
  if (brandTimer) clearTimeout(brandTimer);

  let phraseIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function tick() {
    const phrase = phrases[phraseIndex];

    if (!deleting) {
      charIndex++;
      el.textContent = phrase.slice(0, charIndex);

      if (charIndex >= phrase.length) {
        deleting = true;
        brandTimer = setTimeout(tick, 900); // pause at end
        return;
      }

      brandTimer = setTimeout(tick, 55);
    } else {
      charIndex--;
      el.textContent = phrase.slice(0, charIndex);

      if (charIndex <= 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        brandTimer = setTimeout(tick, 220); // small pause before next
        return;
      }

      brandTimer = setTimeout(tick, 28);
    }
  }

  tick();
}

/* ===========================
   BUILD UL LISTS
=========================== */

function buildList(id, items) {
  const ul = document.getElementById(id);
  if (!ul || !Array.isArray(items)) return;

  ul.innerHTML = "";
  items.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
  });
}

/* ===========================
   LANGUAGE SWITCH
=========================== */

function setLanguage(lang) {
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const val = translations?.[lang]?.[key];
    if (!val) return;
    el.textContent = val;
  });

  const heroName = document.getElementById("hero-name");
  const intro = document.getElementById("intro");

  if (heroName) heroName.textContent = translations[lang].name;
  if (intro) intro.textContent = translations[lang].subtitle;

  buildList("skills-core-list", translations[lang].skills_core_items);
  buildList("skills-langs-list", translations[lang].skills_lang_items);

  document.getElementById("btn-en")?.classList.toggle("active", lang === "en");
  document.getElementById("btn-fr")?.classList.toggle("active", lang === "fr");

  // ✅ restart typewriter in the current language
  startBrandTypewriter(brandPhrases[lang]);
}

/* ===========================
   INIT
=========================== */

document.addEventListener("DOMContentLoaded", () => {
  setLanguage("en");

  document.getElementById("btn-en")?.addEventListener("click", () => setLanguage("en"));
  document.getElementById("btn-fr")?.addEventListener("click", () => setLanguage("fr"));

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
});

window.addEventListener("load", () => {
  document.body.classList.add("devicon-loaded");
});