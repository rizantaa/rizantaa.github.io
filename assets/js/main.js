/* ============================================================
   main.js — Interaksi website portofolio
   1. Toggle bahasa ID/EN (data-i18n)
   2. Menu mobile (hamburger)
   3. Animasi reveal saat scroll
   4. Scrollspy navbar
   ============================================================ */

(function () {
  "use strict";

  /* ---------- 1. Bahasa ID/EN ---------- */
  var langBtn = document.getElementById("langBtn");
  var currentLang = localStorage.getItem("lang") || "id";

  function applyLang(lang) {
    var dict = I18N[lang];
    if (!dict) return;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key]) el.textContent = dict[key];
    });

    document.documentElement.lang = lang === "id" ? "id-ID" : "en";
    document.title = dict.page_title;
    langBtn.textContent = lang === "id" ? "EN" : "ID";
    localStorage.setItem("lang", lang);
    currentLang = lang;
  }

  langBtn.addEventListener("click", function () {
    applyLang(currentLang === "id" ? "en" : "id");
  });

  applyLang(currentLang);

  /* ---------- 2. Menu mobile ---------- */
  var hamburger = document.getElementById("hamburger");
  var navLinks = document.getElementById("navLinks");

  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("open");
  });

  navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      hamburger.classList.remove("active");
      navLinks.classList.remove("open");
    });
  });

  /* ---------- 3. Reveal animation ---------- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add("visible");
    });
  }

  /* ---------- 4. Scrollspy navbar ---------- */
  var sections = document.querySelectorAll("main section[id], header[id]");
  var menuLinks = document.querySelectorAll(".nav-links a");

  function onScroll() {
    var pos = window.scrollY + 140;
    var currentId = "home";
    sections.forEach(function (sec) {
      if (pos >= sec.offsetTop) currentId = sec.id;
    });
    menuLinks.forEach(function (a) {
      var target = a.getAttribute("href").replace("#", "");
      if (target === currentId) {
        a.classList.add("active");
      } else {
        a.classList.remove("active");
      }
    });
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();