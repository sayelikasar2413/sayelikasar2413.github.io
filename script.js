// Typing animation
const typedText = document.getElementById("typedText");

const roles = [
  "BTech CSE Student (AI & Analytics)",
  "Machine Learning Enthusiast",
  "Frontend Developer Intern",
  "Data Analytics Learner"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentRole = roles[roleIndex];

  if (!isDeleting) {
    typedText.textContent = currentRole.substring(0, charIndex++);
    if (charIndex > currentRole.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1000);
      return;
    }
  } else {
    typedText.textContent = currentRole.substring(0, charIndex--);
    if (charIndex < 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }

  setTimeout(typeEffect, isDeleting ? 60 : 100);
}
typeEffect();


// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});


// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
    navMenu.classList.remove("show");
  });
});


// Active nav link highlight
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 130;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });
//projrct
  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

function toggleProjectImages() {
  const images = document.getElementById("projectImages");

  if (images.style.display === "grid") {
    images.style.display = "none";
  } else {
    images.style.display = "grid";
  }
}

// Certificate Modal (PDF)
function openCert(file, title) {
  document.getElementById("certModal").style.display = "flex";
  document.getElementById("certTitle").innerText = title;
  document.getElementById("certViewer").src = file;
}

function closeCert() {
  document.getElementById("certModal").style.display = "none";
  document.getElementById("certViewer").src = "";
}


// Close modal when clicking outside
window.addEventListener("click", function (e) {
  const modal = document.getElementById("certModal");
  if (e.target === modal) {
    closeCert();
  }
});


// Scroll reveal
const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
  revealElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
