const SHOW_PARTNER_LOGOS = false; // TODO(owner): set true only after brand-guideline clearance
/**
 * ==========================================================================
 * THOKOZANI PHANGA — PORTFOLIO CLIENT-SIDE SCRIPT
 * Concept: "Translation" (Dense becomes clear, evidence becomes story)
 * Vanilla JavaScript (Zero Dependencies, Fully Accessible)
 * ==========================================================================
 */

/**
 * 01. CENTRAL DATA & CONFIGURATION BLOCK
 * Edit all links, case studies, contact details, and copy here.
 */
const PORTFOLIO_CONFIG = {
  profile: {
    name: "Thokozani Phanga",
    preferredName: "Thoko",
    title: "Health Communications Specialist & Founder, Zisamale Health",
    location: "Lilongwe, Malawi",
    email: "Thokospoon@gmail.com",
    phone: "+265991302332",
    phoneDisplay: "+265 991 302 332",
    linkedIn: "https://www.linkedin.com/in/thokozanispoonphanga/",
    scholarship: "Mastercard Foundation Scholar, University of Oxford (PGDip Global Health Research)",
    undergrad: "Bachelor of Social Science (BSocSc), University of Malawi, Chancellor College"
  },


  // Interactive Case Studies
  caseStudies: {
    "fashion-futures": {
      title: "Fashion Futures: Namibia",
      subtitle: "Research report on youth engagement in sustainability within Namibia's creative economy",
      type: "Research Report",
      client: "Nataal & British Council",
      date: "November 2019",
      coverImage: "assets/images/case-fashion-futures.jpg",
      liveLink: "https://nataal.com/fashion-futures-namibia",
      role: "Field Researcher & Lead Editorial Author",
      tags: ["Qualitative Research", "Editorial Authoring", "Youth Engagement", "Creative Economy"],
      challenge: "Health and sustainability research is often framed in academic or institutional abstractions that disconnect from grassroots creative communities. In Windhoek, young designers, models, and creators were developing circular fashion initiatives, but had no accessible public platform translating their structural barriers into an actionable editorial narrative for international cultural funders.",
      whatIDid: "I wrote a research report exploring youth engagement in sustainability practices within the fashion industry, drawing on qualitative research I conducted in Namibia. I interviewed designers, content creators, models and industry leaders in Windhoek, and translated what they told me into an editorial piece for a public audience, asking how young creatives can engage with sustainability in a growing fashion scene and what stands in their way. Published on Nataal in November 2019 as part of the Fashion Futures series with the British Council. The report was presented at the Fashion Futures Launch event.",
      output: "An editorial research report published by premier African cultural journal Nataal in partnership with the British Council. Presented and disseminated directly at the Fashion Futures launch event to international delegates, creatives, and policymakers.",
      impact: "Elevated southern African creative sustainability on global platforms, bridged policy research with youth culture, and established a qualitative baseline for British Council creative economy programming across Southern Africa."
    },

    "cure-cleft": {
      title: "Beit CURE Malawi Launches Cleft Service Line",
      subtitle: "Transforming surgical protocol into patient dignity and family trust",
      type: "Strategic Communications & Launch",
      client: "Beit CURE Children's Hospital",
      date: "2025",
      coverImage: "assets/images/case-cure-cleft.jpg",
      liveLink: "https://malawi.cure.org/news/beit-cure-malawi-launches-cleft-service-line/",
      role: "Communications Officer & Strategic Campaign Lead",
      tags: ["Clinical Translation", "Patient Storytelling", "Health Equity", "Partner Relations"],
      challenge: "Introducing a brand new surgical service line for cleft lip and palate in Malawi required navigating deep cultural stigma, widespread misinformation, and complex clinical jargon that intimidated rural caregivers who needed care most.",
      whatIDid: "I wrote an article announcing a new cleft lip and palate service at Beit CURE Children's Hospital. I turned clinical information into a clear story for families and partners, using patient stories and clinicians' voices, and ending with a direct call to action for families. The service line has since treated over 30 children with cleft lip and palate, in addition to the 2,500 orthopaedic surgeries the hospital performs each year.",
      output: "Comprehensive launch feature, multi-channel press communications, social media storytelling campaign, and direct outreach materials in English and vernacular channels for hospital partners and communities.",
      impact: "Directly contributed to the successful launch and intake of the new service line, treating over 30 children with cleft lip and palate in its inaugural cohort, integrating seamlessly into the hospital's ~2,500 annual surgical operations."
    },

    "cure-annual-report": {
      title: "2025 CURE Children's Hospital of Malawi Annual Report",
      subtitle: "Story curation, leadership voice, and visual direction distributed to partners globally",
      type: "Editorial Leadership & Publication",
      client: "CURE International",
      date: "Published March 2026",
      coverImage: "assets/images/case-cure-annual-report.jpg",
      liveLink: "https://issuu.com/cureintl/docs/2025_cure_children_s_hospital_of_malawi_annual_rep",
      role: "Lead Editor & Story Director",
      tags: ["Editorial Leadership", "Annual Report", "Global Stakeholder Relations", "Impact Data"],
      challenge: "Hospital annual reports are often dense data repositories that fail to convey the transcendent human reality of clinical healing. Beit CURE needed a cohesive editorial publication that balanced rigorous surgical metrics with ethical, dignified patient narratives for international donors and ministry partners.",
      whatIDid: "I led the editorial development of the hospital's 2025 annual report. I wrote the stories, edited the Executive Director's letter and selected the images for each page. I coordinated with CURE's global marketing team to align the hospital's content with the wider organisation, keeping one consistent voice across the report. Published in March 2026 and distributed to donors and partners globally.",
      output: "A full-length, publication-grade digital and print annual report, published March 2026 and distributed internationally via Issuu and global donor networks.",
      impact: "Delivered a benchmark publication strengthening donor confidence, celebrating ~2,500 annual surgeries, and providing a transparent, moving record of pediatric healthcare delivery in Malawi."
    }
  },

  // Zisamale Translation Demo Examples
  translationDemo: [
    {
      id: "clinical",
      name: "Pediatric Surgery",
      raw: "Unilateral congenital cheiloschisis repair: reconstruction of the orbicularis oris muscle, restoration of vermilion border symmetry, and long-term surveillance for velopharyngeal insufficiency.",
      translated: "A simple, life-changing surgery that repairs a child's cleft lip, restores their natural smile, and ensures they can speak and eat without pain."
    },
    {
      id: "research",
      name: "Environmental Health",
      raw: "Longitudinal socio-ecological surveillance indicates sub-optimal adherence to secondary water purification regimes due to infrastructure variance and gender-skewed domestic labor allocation.",
      translated: "When clean water is miles away, women and girls walk hours every morning to fetch it. Without taps in the village, families are forced to drink water that makes them sick."
    },
    {
      id: "donor",
      name: "Donor Reporting",
      raw: "Capital asset utilization reached 94.2% across orthopaedic surgical cohorts with bilateral multi-sectoral subsidy interventions offsetting patient fiscal liabilities.",
      translated: "Thanks to donor partners, the hospital operated at full capacity this year — ensuring 2,500 children received life-changing surgery completely free of charge."
    }
  ],

  // 04B. WEEKLY OXFORD RESEARCH DISPATCHES & FIELD JOURNAL
  dispatches: {
    "dispatch-04": {
      id: "dispatch-04",
      title: "The Information Intermediary: Why Clinical Trials Fail Without Translation at District Clinics",
      category: "Oxford Research",
      filterCategory: "oxford",
      date: "October 2026 • 5 min read",
      authorRole: "Oxford Thesis Track • Field Note #04",
      citation: "Phanga, T. (2026). The Information Intermediary: Why Clinical Trials Fail Without Translation at District Clinics. Oxford Global Health Field Notes & Translation Dispatches, Vol. 1, Issue 4. University of Oxford.",
      hook: "In evidence-based medicine, we measure p-values and sample sizes. But in a rural district clinic in central Malawi, the efficacy of a trial depends entirely on who translates the consent form into the vernacular of maternal grief.",
      paragraphs: [
        "In global health research, protocol design takes place in air-conditioned seminar rooms and statistical institutes thousands of miles away from the communities being studied. We scrutinize randomized controlled trial architectures, power calculations, and p-values. Yet when that protocol lands at a rural district hospital in central Malawi, its actual efficacy and ethical validity hinge on a single, frequently ignored figure: the health information intermediary.",
        "An information intermediary is not merely a translator converting English into Chichewa. They are cultural negotiators. When clinical trials present a 12-page informed consent form detailing genomic sequencing or pharmacokinetic double-blind regimens, mothers arrive carrying not clinical vocabulary, but lived urgency, maternal anxiety, and community histories of biomedical mistrust.",
        "During my fieldwork and research track with the Oxford PGDip in Global Health Research, I observed how systemic misalignments happen. When an institutional investigator treats informed consent as a legal compliance checklist rather than an active dialogue of respect, participants nod in polite compliance while withholding true comprehension.",
        "True knowledge translation requires restructuring our research incentives. We must treat the community health worker, the bilingual nurse, and the local communications lead not as auxiliary logistical staff, but as core methodological co-investigators. Without their translation, evidence cannot generate sustained public health action."
      ]
    },
    "dispatch-03": {
      id: "dispatch-03",
      title: "Beyond Plain Language: What Pediatric Cleft Surgery Taught Me About Medical Dignity",
      category: "Clinical Communications",
      filterCategory: "clinical",
      date: "September 2026 • 4 min read",
      authorRole: "Pediatric Surgical Equity • Field Note #03",
      citation: "Phanga, T. (2026). Beyond Plain Language: What Pediatric Cleft Surgery Taught Me About Medical Dignity. Zisamale Health & Beit CURE Fieldwork Dispatches.",
      hook: "When a mother brings an infant with an unrepaired cleft lip to Beit CURE, she isn't seeking technical details on cheilorrhaphy (cleft-lip repair). She is seeking permission to believe her child has an unburdened future.",
      paragraphs: [
        "When we launched the cleft lip and palate service line at Beit CURE Children's Hospital, the primary barrier wasn't surgical capacity—Dr. Dorothy and Dr. Andrew are among the most skilled pediatric reconstructive surgeons on the continent. The barrier was fear, stigma, and deep-seated rural mythology.",
        "Families in rural districts had been told that a cleft condition was a spiritual curse, an ancestral retribution, or a fatal deformity that could never be repaired. Traditional medical brochures laden with anatomical cross-sections and surgical risk percentages only compounded that dread.",
        "Our strategic communications pivoted around dignity. We stopped talking about 'congenital maxillofacial anomalies' and started telling stories of neighborhood children who had undergone surgery, returned to primary school, and were thriving. We quoted surgeons not on technical margins, but on their pastoral commitment to restoring a child's complete social belonging.",
        "Over 30 children were treated in that first cohort. The lesson for global health communications was profound: plain language is the baseline, but empathy and cultural dignity are what ultimately bring families across the clinic threshold."
      ]
    },
    "dispatch-02": {
      id: "dispatch-02",
      title: "The Ethics of Extraction: Why Qualitative Research in Southern Africa Must Build Reciprocity",
      category: "Field Ethics & Methods",
      filterCategory: "ethics",
      date: "September 2026 • 6 min read",
      authorRole: "Methodology & Ethics • Field Note #02",
      citation: "Phanga, T. (2026). The Ethics of Extraction: Why Qualitative Research in Southern Africa Must Build Reciprocity. Research Translation & De-colonial Methodologies Working Paper.",
      hook: "Too many international initiatives treat Southern African communities as raw data quarries. Ethical knowledge translation demands returning research findings in forms communities can actually act upon.",
      paragraphs: [
        "In 2019, when researching youth engagement with sustainability in Namibia for the British Council and Nataal, I was struck by how frequently creative practitioners expressed exhaustion with external researchers. 'People come to Windhoek, interview us for two weeks, publish a report behind a paywall or in a glossy London brochure, and we never hear from them again,' one designer told me.",
        "This extractive dynamic is pervasive across global health and development research in Southern Africa. Communities provide the lived trauma, the clinical morbidity data, and the qualitative narratives; Northern institutions claim the citations, the academic prestige, and the grant renewals.",
        "At Zisamale Health, our methodological stance is rooted in active reciprocity. Every qualitative study must have a defined knowledge return plan. If we gather insights on health seeking behaviors, we must produce community-facing radio spots, pictorial field guides, or town-hall briefs in the local language.",
        "Ethical research dissemination does not end when a paper is accepted by a high-impact journal. It ends when the people whose lives generated the data have the tools and power to use those findings for their own self-determination."
      ]
    },
    "dispatch-01": {
      id: "dispatch-01",
      title: "Rooted Scholarship: Why Southern Scholars Must Lead Global Health Research",
      category: "Oxford Perspective",
      filterCategory: "oxford",
      date: "August 2026 • 4 min read",
      authorRole: "Mastercard Foundation Scholar • Field Note #01",
      citation: "Phanga, T. (2026). Rooted Scholarship: Why Southern Scholars Must Lead Global Health Research. Mastercard Foundation Scholars Oxford Dispatches.",
      hook: "Reflections on joining the Mastercard Foundation Scholars cohort at Oxford, and why true knowledge translation requires scholars deeply rooted in the very healthcare systems global health purports to serve.",
      paragraphs: [
        "Walking the cobblestones of Oxford while holding a Bachelor of Social Sciences from the University of Malawi, Chancellor College, brings a dual consciousness. You are surrounded by centuries of institutional prestige, yet your mind remains anchored in the maternity wards of Kamuzu Central Hospital and the rural health posts of Dedza and Lilongwe.",
        "As a Mastercard Foundation Scholar pursuing the PGDip in Global Health Research, I see daily how urgent it is for scholars from the Global South to lead the intellectual architecture of this discipline. For too long, African professionals were relegated to field enumerators and local project coordinators, while theoretical frameworks were imported from abroad.",
        "When those who formulate research questions have personally navigated the fragilities of decentralized healthcare systems, the questions asked are fundamentally different. We do not just ask 'what is the prevalence rate?'; we ask 'why does life-saving knowledge get intercepted between the district health office and the rural mother?'",
        "This weekly dispatch series is my commitment to bridging these two worlds: bringing Oxford's methodological rigor to Malawi's frontline health realities, and ensuring Malawi's grassroots resilience informs the global academic canon."
      ]
    }
  }
};

/**
 * 02. APPLICATION CONTROLLER
 */
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initScrollProgress();
  initStickyNav();
  initMobileMenu();
  initAnimatedCounters();
  initScrollReveal();
  initCaseStudyModal();
  initDispatches();
  initTranslationDemo();
  initContactForm();
});

/**
 * 03. THEME TOGGLE (LIGHT / DARK)
 */
function initTheme() {
  const toggleBtn = document.getElementById("theme-toggle");
  if (!toggleBtn) return;

  const savedTheme = localStorage.getItem("thoko-portfolio-theme") || 
    (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

  setTheme(savedTheme);

  toggleBtn.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme") || "light";
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("thoko-portfolio-theme", newTheme);
  });
}

function setTheme(theme) {
  const toggleBtn = document.getElementById("theme-toggle");
  const labelEl = document.getElementById("theme-toggle-label");

  if (theme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
    if (labelEl) labelEl.textContent = "Light Mode";
    if (toggleBtn) {
      toggleBtn.setAttribute("aria-label", "Switch to light mode");
      toggleBtn.setAttribute("title", "Currently Dark mode. Click to switch to Light mode.");
    }
  } else {
    document.documentElement.removeAttribute("data-theme");
    if (labelEl) labelEl.textContent = "Dark Mode";
    if (toggleBtn) {
      toggleBtn.setAttribute("aria-label", "Switch to dark mode");
      toggleBtn.setAttribute("title", "Currently Light mode. Click to switch to Dark mode.");
    }
  }
}

/**
 * 04. SCROLL PROGRESS BAR
 */
function initScrollProgress() {
  const bar = document.getElementById("scroll-progress");
  if (!bar) return;

  window.addEventListener("scroll", () => {
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    bar.style.width = scrolled + "%";
  }, { passive: true });
}

/**
 * 05. STICKY NAV & ACTIVE LINK HIGHLIGHTING (SCROLLSPY)
 */
function initStickyNav() {
  const nav = document.querySelector(".site-nav");
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[id]");

  // Shrink nav on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  }, { passive: true });

  // ScrollSpy with IntersectionObserver
  const observerOptions = {
    root: null,
    rootMargin: "-25% 0px -65% 0px",
    threshold: 0
  };

  const spyObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navLinks.forEach((link) => {
          link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
        });
      }
    });
  }, observerOptions);

  sections.forEach((sec) => spyObserver.observe(sec));
}

/**
 * 06. MOBILE MENU
 */
function initMobileMenu() {
  const toggleBtn = document.querySelector(".mobile-toggle");
  const menu = document.querySelector(".nav-menu");
  const links = document.querySelectorAll(".nav-menu .nav-link");

  if (!toggleBtn || !menu) return;

  toggleBtn.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("open");
    toggleBtn.classList.toggle("open");
    toggleBtn.setAttribute("aria-expanded", isOpen);
  });

  links.forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("open");
      toggleBtn.classList.remove("open");
      toggleBtn.setAttribute("aria-expanded", "false");
    });
  });
}


/**
 * 08. ANIMATED COUNTERS FOR STATS
 */
function initAnimatedCounters() {
  const statNumbers = document.querySelectorAll(".stat-counter");
  if (!statNumbers.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute("data-target"), 10);
        const prefix = el.getAttribute("data-prefix") || "";
        const suffix = el.getAttribute("data-suffix") || "";
        const duration = 1600;
        const start = 0;
        const startTime = performance.now();

        function updateCounter(currentTime) {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const easeOut = 1 - Math.pow(2, -10 * progress);
          const currentVal = Math.floor(start + (target - start) * easeOut);
          const display = el.getAttribute("data-display");

          if (progress < 1) {
            el.textContent = prefix + currentVal.toLocaleString();
            requestAnimationFrame(updateCounter);
          } else {
            el.textContent = display || `${prefix}${target.toLocaleString()}${suffix}`;
          }
        }

        requestAnimationFrame(updateCounter);
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.25 });

  statNumbers.forEach((num) => observer.observe(num));
}

/**
 * 09. SCROLL REVEAL (SUBTLE TRANSLATE & FADE)
 */
function initScrollReveal() {
  const revealElements = document.querySelectorAll(".reveal");
  if (!revealElements.length) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    revealElements.forEach(el => el.classList.add("revealed"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
      }
    });
  }, {
    rootMargin: "0px 0px -60px 0px",
    threshold: 0.1
  });

  revealElements.forEach(el => observer.observe(el));
}

/**
 * 10. CASE STUDY DETAIL MODAL
 */
function initCaseStudyModal() {
  const modal = document.getElementById("case-study-modal");
  const closeBtn = document.getElementById("modal-close-btn");
  const detailButtons = document.querySelectorAll("[data-case-id]");

  if (!modal) return;

  function openCaseStudy(caseId) {
    const data = PORTFOLIO_CONFIG.caseStudies[caseId];
    if (!data) return;

    document.getElementById("modal-title").textContent = data.title;
    document.getElementById("modal-subtitle").textContent = data.subtitle;
    document.getElementById("modal-type").textContent = data.type;
    document.getElementById("modal-date").textContent = data.date;
    document.getElementById("modal-client").textContent = data.client;
    document.getElementById("modal-role").textContent = data.role;
    document.getElementById("modal-challenge").textContent = data.challenge;
    document.getElementById("modal-what-i-did").textContent = data.whatIDid;
    document.getElementById("modal-output").textContent = data.output;
    document.getElementById("modal-impact").textContent = data.impact;

    const liveBtn = document.getElementById("modal-live-link");
    if (liveBtn) {
      liveBtn.href = data.liveLink;
    }

    const imgEl = document.getElementById("modal-cover-img");
    if (imgEl) {
      imgEl.src = data.coverImage;
      imgEl.alt = `${data.title} cover artwork`;
    }

    modal.classList.add("open");
    document.body.style.overflow = "hidden";
    if (closeBtn) closeBtn.focus();
  }

  function closeModal() {
    modal.classList.remove("open");
    document.body.style.overflow = "";
  }

  detailButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const caseId = btn.getAttribute("data-case-id");
      openCaseStudy(caseId);
    });
  });

  if (closeBtn) closeBtn.addEventListener("click", closeModal);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("open")) {
      closeModal();
    }
  });
}

/**
 * 10B. WEEKLY DISPATCHES & OXFORD RESEARCH READER
 */
function initDispatches() {
  const filterButtons = document.querySelectorAll(".dispatch-filter-btn");
  const dispatchCards = document.querySelectorAll(".dispatch-card");
  const readButtons = document.querySelectorAll(".btn-read-dispatch");
  const modal = document.getElementById("dispatch-reader-modal");
  const scrollWindow = document.getElementById("dispatch-modal-scroll-window");
  const readingBar = document.getElementById("dispatch-reading-bar");
  const copyCitationBtn = document.getElementById("btn-copy-citation");
  const discussBtn = document.getElementById("dispatch-email-discuss");

  if (!modal) return;

  const closeBtn = document.getElementById("dispatch-modal-close");
  const closeBottomBtn = document.getElementById("dispatch-modal-close-bottom");
  const titleEl = document.getElementById("dispatch-modal-title");
  const categoryEl = document.getElementById("dispatch-modal-category");
  const dateEl = document.getElementById("dispatch-modal-date");
  const contentEl = document.getElementById("dispatch-modal-content");
  const citationEl = document.getElementById("dispatch-modal-citation");

  // 1. Topic Filtering Tabs
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.getAttribute("data-filter");

      dispatchCards.forEach(card => {
        const cat = card.getAttribute("data-category");
        if (filter === "all" || cat === filter) {
          card.style.display = "";
          card.style.opacity = "1";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  // 2. Reading Progress Calculation
  if (scrollWindow && readingBar) {
    scrollWindow.addEventListener("scroll", () => {
      const scrollTop = scrollWindow.scrollTop;
      const scrollHeight = scrollWindow.scrollHeight - scrollWindow.clientHeight;
      const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      readingBar.style.width = `${Math.min(progress, 100)}%`;
    }, { passive: true });
  }

  // 3. One-Click Academic Citation Copy
  if (copyCitationBtn && citationEl) {
    copyCitationBtn.addEventListener("click", () => {
      const text = citationEl.textContent.trim();
      navigator.clipboard.writeText(text).then(() => {
        const iconEl = document.getElementById("copy-citation-icon");
        const textEl = document.getElementById("copy-citation-text");
        copyCitationBtn.classList.add("copied");
        if (iconEl) iconEl.textContent = "✓";
        if (textEl) textEl.textContent = "Citation Copied!";

        setTimeout(() => {
          copyCitationBtn.classList.remove("copied");
          if (iconEl) iconEl.textContent = "📋";
          if (textEl) textEl.textContent = "Copy Citation";
        }, 2200);
      }).catch(() => {
        // Fallback prompt
        window.prompt("Copy citation:", text);
      });
    });
  }

  // 4. Open Full Essay in Reader Modal
  function openDispatch(dispatchId) {
    const dispatch = PORTFOLIO_CONFIG.dispatches[dispatchId];
    if (!dispatch) return;

    if (titleEl) titleEl.textContent = dispatch.title;
    if (categoryEl) categoryEl.textContent = dispatch.category;
    if (dateEl) dateEl.textContent = dispatch.date;
    if (citationEl) citationEl.textContent = dispatch.citation;

    if (contentEl) {
      contentEl.innerHTML = dispatch.paragraphs.map(p => `<p>${p}</p>`).join("");
    }

    if (discussBtn) {
      const emailSubject = encodeURIComponent(`Discussion: ${dispatch.title}`);
      discussBtn.href = `mailto:Thokospoon@gmail.com?subject=${emailSubject}`;
    }

    if (readingBar) readingBar.style.width = "0%";
    if (scrollWindow) scrollWindow.scrollTop = 0;

    modal.classList.add("open");
    document.body.style.overflow = "hidden";
    if (closeBtn) closeBtn.focus();
  }

  function closeDispatchModal() {
    modal.classList.remove("open");
    document.body.style.overflow = "";
  }

  readButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-dispatch-id");
      openDispatch(id);
    });
  });

  if (closeBtn) closeBtn.addEventListener("click", closeDispatchModal);
  if (closeBottomBtn) closeBottomBtn.addEventListener("click", closeDispatchModal);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeDispatchModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("open")) {
      closeDispatchModal();
    }
  });
}

/**
 * 11. ZISAMALE TRANSLATION DEMO TABS
 */
function initTranslationDemo() {
  const tabButtons = document.querySelectorAll(".demo-tab-btn");
  const rawTextEl = document.getElementById("demo-raw-text");
  const transTextEl = document.getElementById("demo-translated-text");

  if (!tabButtons.length || !rawTextEl || !transTextEl) return;

  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      tabButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const demoId = btn.getAttribute("data-demo-id");
      const demoItem = PORTFOLIO_CONFIG.translationDemo.find(d => d.id === demoId);

      if (demoItem) {
        rawTextEl.textContent = demoItem.raw;
        transTextEl.textContent = demoItem.translated;
      }
    });
  });
}

/**
 * 12. CONTACT FORM (VALIDATION + MAILTO FALLBACK)
 */
function initContactForm() {
  const form = document.getElementById("contact-form");
  const statusMsg = document.getElementById("form-status-msg");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("contact-name").value.trim();
    const email = document.getElementById("contact-email").value.trim();
    const org = document.getElementById("contact-org").value.trim();
    const service = document.getElementById("contact-service").value;
    const message = document.getElementById("contact-message").value.trim();
    const honeypot = (document.getElementById("contact-website") || {}).value || "";

    if (honeypot.trim()) {
      return;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!name || !email || !message || !emailPattern.test(email)) {
      if (statusMsg) {
        statusMsg.textContent = "Please check the required fields. A valid email address is needed.";
        statusMsg.style.color = "#B8472E";
      }
      return;
    }

    const subject = encodeURIComponent(`Project Inquiry: ${service} — ${name} (${org || 'Independent'})`);
    const body = encodeURIComponent(
      `Hello Thoko,\n\n` +
      `My name is ${name} from ${org || 'Independent'}.\n` +
      `Project Scope: ${service}\n` +
      `Reply Email: ${email}\n\n` +
      `Message:\n${message}\n\n` +
      `— Sent via portfolio contact form`
    );

    const mailtoUrl = `mailto:${PORTFOLIO_CONFIG.profile.email}?subject=${subject}&body=${body}`;

    if (statusMsg) {
      statusMsg.innerHTML = "Opening your email client... I reply within three working days. You can also email directly at <a href='mailto:" +
        PORTFOLIO_CONFIG.profile.email + "' style='text-decoration:underline;'>" + PORTFOLIO_CONFIG.profile.email + "</a>";
      statusMsg.style.color = "var(--accent)";
    }

    window.location.href = mailtoUrl;
  });
}


// Partner logos are intentionally hidden until brand-guideline clearance; set SHOW_PARTNER_LOGOS = true to enable.
if (typeof document !== 'undefined' && !SHOW_PARTNER_LOGOS) {
  document.addEventListener('DOMContentLoaded', () => {
    document.body.setAttribute('data-partner-logos', 'false');
  });
}
