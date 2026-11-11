// date.js — Footer Date Injection
document.addEventListener('DOMContentLoaded', () => {
 const year = new Date().getFullYear();
 const lastMod = new Date(document.lastModified).toLocaleDateString('en-US', {
 year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'
 });

 const yearEl = document.getElementById('currentyear');
 const lastModEl = document.getElementById('lastModified');
 if (yearEl) yearEl.textContent = year;
 if (lastModEl) lastModEl.textContent = lastMod;
});
