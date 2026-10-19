const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "×" : "☰";
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("copyEmail").addEventListener("click", async () => {
  const email = "kumarvinay052001@gmail.com";
  const status = document.getElementById("copyStatus");
  try {
    await navigator.clipboard.writeText(email);
    status.textContent = "Email copied to clipboard.";
  } catch {
    status.textContent = "Please copy the email manually: " + email;
  }
});