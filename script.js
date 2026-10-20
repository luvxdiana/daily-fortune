// Storage

const STORAGE_DATE_KEY = "dailyFortuneDate";
const STORAGE_TEXT_KEY = "dailyFortuneText";
const STORAGE_ID_KEY = "dailyFortuneId";
const STORAGE_LANGUAGE_KEY = "dailyFortuneLanguage";

// Elements

const page = document.getElementById("page");
const subtitle = document.getElementById("subtitle");
const envelopeButton = document.getElementById("envelopeButton");
const actionButton = document.getElementById("actionButton");
const actionIcon = document.getElementById("actionIcon");
const actionLabel = document.getElementById("actionLabel");
const actionArrow = document.getElementById("actionArrow");
const paperLabel = document.getElementById("paperLabel");
const fortuneText = document.getElementById("fortuneText");
const helperText = document.getElementById("helperText");
const timerCard = document.getElementById("timerCard");
const timerTitle = document.getElementById("timerTitle");
const timerValue = document.getElementById("timerValue");
const timerNote = document.getElementById("timerNote");
const languagePicker = document.getElementById("languagePicker");
const languageToggle = document.getElementById("languageToggle");
const languageCode = document.getElementById("languageCode");
const languageMenu = document.getElementById("languageMenu");
const languageOptions = document.querySelectorAll(".language-option");

let countdownInterval = null;

// Language

function getInitialLanguage() {
  const saved = localStorage.getItem(STORAGE_LANGUAGE_KEY);
  if (saved && Object.hasOwn(uiTranslations, saved)) return saved;

  const browserLanguage = (navigator.language || "en").toLowerCase();
  if (browserLanguage.startsWith("uk")) return "uk";
  if (/^(no|nb|nn)(-|$)/.test(browserLanguage)) return "no";
  return "en";
}

let currentLanguage = getInitialLanguage();

function closeLanguageMenu() {
  languageMenu.hidden = true;
  languageToggle.setAttribute("aria-expanded", "false");
}

function updateLanguageUI() {
  const texts = uiTranslations[currentLanguage];
  const codes = { en: "EN", uk: "UA", no: "NO" };

  document.documentElement.lang =
    currentLanguage === "no" ? "nb" : currentLanguage;
  languageCode.textContent = codes[currentLanguage];
  languageToggle.setAttribute("aria-label", texts.languageLabel);

  subtitle.textContent = texts.subtitle;
  paperLabel.textContent = texts.paperLabel;
  timerTitle.textContent = texts.timerTitle;
  timerNote.textContent = texts.timerNote;
  envelopeButton.setAttribute("aria-label", texts.openButton);

  languageOptions.forEach((option) => {
    option.setAttribute(
      "aria-pressed",
      String(option.dataset.language === currentLanguage),
    );
  });
}

function setLanguage(language) {
  if (!Object.hasOwn(uiTranslations, language)) return;
  currentLanguage = language;
  localStorage.setItem(STORAGE_LANGUAGE_KEY, language);
  updateLanguageUI();
  renderFortune();
  closeLanguageMenu();
}

languageToggle.addEventListener("click", () => {
  const shouldOpen = languageMenu.hidden;
  languageMenu.hidden = !shouldOpen;
  languageToggle.setAttribute("aria-expanded", String(shouldOpen));
});

languageOptions.forEach((option) => {
  option.addEventListener("click", () => setLanguage(option.dataset.language));
});

document.addEventListener("click", (event) => {
  if (!languagePicker.contains(event.target)) closeLanguageMenu();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !languageMenu.hidden) {
    closeLanguageMenu();
    languageToggle.focus();
  }
});

// Date

function getTodayKey() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function getNextMidnight() {
  const midnight = new Date();
  midnight.setHours(24, 0, 0, 0);
  return midnight;
}

function formatTime(ms) {
  const total = Math.max(0, Math.floor(ms / 1000));
  const hours = String(Math.floor(total / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((total % 3600) / 60)).padStart(2, "0");
  const seconds = String(total % 60).padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
}

// Fortune

function getStoredFortuneId() {
  const savedId = localStorage.getItem(STORAGE_ID_KEY);
  if (savedId !== null && /^\d+$/.test(savedId)) {
    const id = Number(savedId);
    if (id < fortuneTranslations.length) return id;
  }

  // Previous versions stored the English message instead of its index.
  const oldText = localStorage.getItem(STORAGE_TEXT_KEY);
  const index = fortuneTranslations.findIndex(
    (fortune) => fortune.en === oldText,
  );
  if (index !== -1) localStorage.setItem(STORAGE_ID_KEY, String(index));
  return index;
}

function getStoredFortuneText() {
  const id = getStoredFortuneId();
  if (id !== -1) return fortuneTranslations[id][currentLanguage];
  return localStorage.getItem(STORAGE_TEXT_KEY);
}

function saveFortune(id) {
  localStorage.setItem(STORAGE_DATE_KEY, getTodayKey());
  localStorage.setItem(STORAGE_ID_KEY, String(id));
  localStorage.setItem(STORAGE_TEXT_KEY, fortuneTranslations[id].en);
}

function clearFortune() {
  localStorage.removeItem(STORAGE_DATE_KEY);
  localStorage.removeItem(STORAGE_ID_KEY);
  localStorage.removeItem(STORAGE_TEXT_KEY);
}

function showClosedState() {
  const texts = uiTranslations[currentLanguage];
  page.classList.remove("revealed");
  fortuneText.textContent = texts.prompt;
  helperText.textContent = texts.closedHelper;
  actionIcon.textContent = "✦";
  actionLabel.textContent = texts.openButton;
  actionArrow.textContent = "→";
  actionButton.disabled = false;
  envelopeButton.disabled = false;
  timerCard.hidden = true;
}

function showRevealedState(text) {
  const texts = uiTranslations[currentLanguage];
  page.classList.add("revealed");
  fortuneText.textContent = text;
  helperText.textContent = texts.openedHelper;
  actionIcon.textContent = "☁";
  actionLabel.textContent = texts.openedButton;
  actionArrow.textContent = "✦";
  actionButton.disabled = true;
  envelopeButton.disabled = true;
  timerCard.hidden = false;
  startCountdown();
}

function renderFortune() {
  const today = getTodayKey();
  if (localStorage.getItem(STORAGE_DATE_KEY) === today) {
    const message = getStoredFortuneText();
    if (message) {
      showRevealedState(message);
      return;
    }
  }

  clearInterval(countdownInterval);
  countdownInterval = null;
  if (localStorage.getItem(STORAGE_DATE_KEY) !== today) clearFortune();
  showClosedState();
}

function openFortune() {
  if (localStorage.getItem(STORAGE_DATE_KEY) === getTodayKey()) {
    renderFortune();
    return;
  }

  const id = Math.floor(Math.random() * fortuneTranslations.length);
  saveFortune(id);
  renderFortune();
}

// Timer

function startCountdown() {
  clearInterval(countdownInterval);

  function updateCountdown() {
    if (localStorage.getItem(STORAGE_DATE_KEY) !== getTodayKey()) {
      clearInterval(countdownInterval);
      countdownInterval = null;
      clearFortune();
      showClosedState();
      return;
    }

    const remaining = getNextMidnight().getTime() - Date.now();
    timerValue.textContent = formatTime(remaining);
  }

  updateCountdown();
  countdownInterval = setInterval(updateCountdown, 1000);
}

// Start

envelopeButton.addEventListener("click", openFortune);
actionButton.addEventListener("click", openFortune);
updateLanguageUI();
renderFortune();

// Service Worker

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js").catch((error) => {
      console.error("Service Worker error:", error);
    });
  });
}
