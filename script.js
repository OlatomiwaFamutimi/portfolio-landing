/* script.js — portfolio demos */
(() => {
  "use strict";

  // Tiny helpers
  const $ = (id) => document.getElementById(id);
  const setText = (id, txt) => { const el = $(id); if (el) el.textContent = txt; };
  const setHTML = (id, html) => { const el = $(id); if (el) el.innerHTML = html; };

  // Safe get value
  const val = (id) => ($(id) ? $(id).value : "");

  // ========== Error handling demo ==========
  function handleParse() {
    try {
      // Expect a number; deliberately try JSON.parse to demo an error
      JSON.parse(val("errInput"));
      setText("error", "Parsed successfully (you probably entered JSON).");
      $("error").className = "panel success";
    } catch (e) {
      setText("error", Parse error: ${e.message});
      $("error").className = "panel dashed";
    }
  }

  function handleValidate() {
    const n = Number(val("errInput"));
    if (Number.isNaN(n)) {
      setText("error", "Please enter a valid number (e.g., 42).");
      $("error").className = "panel dashed";
    } else {
      setText("error", Valid number: ${n});
      $("error").className = "panel success";
    }
  }

  function handleThrow() {
    try {
      throw new Error("This is a custom error 🚨");
    } catch (e) {
      setText("error", e.message);
      $("error").className = "panel dashed";
    }
  }

  // ========== Simple calculator ==========
  function runCalc() {
    // Just a tiny demo—adds 10 to whatever was typed
    const n = Number(val("errInput"));
    if (Number.isNaN(n)) {
      setText("calcResult", "Enter a number above first.");
      return;
    }
    setText("calcResult", Result: ${n + 10});
  }

  // ========== Extra JS demos ==========
  function toggleTheme() {
    document.body.classList.toggle("dark");
    localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
  }

  function showWelcome() {
    setHTML("messageBox", "Welcome 👋 — happy coding!");
  }

  function checkDay() {
    const day = new Date().toLocaleDateString(undefined, { weekday: "long" });
    setText("messageBox", Today is ${day}.);
  }

  function genNumbers() {
    const nums = Array.from({ length: 5 }, () => Math.floor(Math.random() * 100));
    setText("messageBox", Generated: ${nums.join(", ")});
  }

  function goToGitHub() {
    window.open("https://github.com/olatomiwafamutimi", "_blank", "noopener");
  }

  // ========== Wire up once DOM is ready ==========
  window.addEventListener("DOMContentLoaded", () => {
    // Restore theme
    if (localStorage.getItem("theme") === "dark") document.body.classList.add("dark");

    // Error handling buttons
    $("parseBtn")?.addEventListener("click", handleParse);
    $("validateBtn")?.addEventListener("click", handleValidate);
    $("throwBtn")?.addEventListener("click", handleThrow);

    // Calculator
    $("calcBtn")?.addEventListener("click", runCalc);

    // Extra demos (only attach if elements exist in your HTML)
    $("themeBtn")?.addEventListener("click", toggleTheme);
    $("welcomeBtn")?.addEventListener("click", showWelcome);
    $("dayBtn")?.addEventListener("click", checkDay);
    $("genBtn")?.addEventListener("click", genNumbers);
    $("githubBtn")?.addEventListener("click", goToGitHub);
  });
})();