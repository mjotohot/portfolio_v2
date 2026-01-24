const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("translate-x-full");
});

function closeMenu() {
  mobileMenu.classList.add("translate-x-full");
}

// Scroll Progress Indicator
window.addEventListener("scroll", () => {
  const scrollHeight =
    document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = (window.scrollY / scrollHeight) * 100;
  document.getElementById("scroll-progress").style.width = scrolled + "%";
});

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in-visible");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll(
      ".experience-item, .stat-card, .testimonial-card, .project-card",
    )
    .forEach((el) => {
      observer.observe(el);
    });
});

const projects = [
  {
    title: "Retinalyze.ai",
    description:
      "An AI-powered web application for early detection of stroke risk, leveraging retinal imaging analysis and patient health records to provide timely and accurate assessments",
    image: "/images/retinal.png",
    tags: ["React", "Tailwind CSS", "Supabase", "yolov8"],
    type: "Student Capstone",
    tooltip: "Built for university students' capstone project",
    demo: "https://retinalyze.vercel.app",
    github: "https://github.com/mjotohot/Retinalyze.git",
  },
  {
    title: "Luxlights Admin Dashboard",
    description:
      "A comprehensive admin dashboard for managing staffs, orders, and customer data with real-time updates.",
    image: "/images/luxlights.jpg",
    tags: ["Vue", "Tailwind CSS", "Supabase"],
    type: "Client Project",
    tooltip: "Outsourced development from external clients",
    demo: "#",
    github: "#",
  },
  {
    title: "Baranggay MS",
    description:
      "Mobile-friendly system for barangay administration with resident management, event tracking, and document management features.",
    image: "/images/brgy.png",
    tags: ["React", "Tailwind CSS", "Supabase", "Capacitor.js"],
    type: "Student Capstone",
    tooltip: "Built for university students' capstone project",
    demo: "#",
    github: "https://github.com/mjotohot/BrgySystem.git",
  },
  {
    title: "GradeEase",
    description:
      "A web-based app that enables teachers to manage student records, track academic progress, promote students to the next grade level, and update personal information, while providing parents with secure accounts to monitor their children’s grades and school data",
    image: "/images/grade.png",
    tags: ["React", "Tailwind CSS", "Supabase"],
    type: "Student Capstone",
    tooltip: "Built for university students' capstone project",
    demo: "https://grade-ease-three.vercel.app/",
    github: "https://github.com/mjotohot/GradeEase.git",
  },
  {
    title: "MCES",
    description:
      "A web-based app that automates the SF10 (Learner’s Permanent Academic Record), simplifying the tracking of student information and academic progress in line with Philippine DepEd standards",
    image: "/images/mces.png",
    tags: ["React", "Tailwind CSS", "Supabase"],
    type: "Student Capstone",
    tooltip: "Built for university students' capstone project",
    demo: "https://mces.vercel.app/",
    github: "https://github.com/mjotohot/MCES.git",
  },
  {
    title: "QR-Based Visitor MS",
    description:
      "A web-based app that uses QR codes to verify visitor appointments quickly and securely. Gate guards scan QR codes for instant access approval, while the system logs all check-ins and check-outs for efficient visitor tracking.",
    image: "/images/vms.png",
    tags: ["React", "Tailwind CSS", "Supabase"],
    type: "Student Capstone",
    tooltip: "Built for university students' capstone project",
    demo: "#",
    github: "https://github.com/mjotohot/Visitor_MS.git",
  },
  {
    title: "Butuanon Online Scholarship Application",
    description:
      "A web-based scholarship management system for the Butuanon Online Scholarship Program, supporting applicant submissions and multi-level administration through role-based access for super administrators, administrators, and applicants.",
    image: "/images/butuanon.png",
    tags: ["React", "Tailwind CSS", "Supabase"],
    type: "Student Capstone",
    tooltip: "Built for university students' capstone project",
    demo: "#",
    github: "#",
  },
  {
    title: "E-Commerce Website",
    description:
      "A web-based e-commerce platform developed as a student project, featuring product listings, shopping cart functionality, secure checkout, and user account management to simulate a complete online shopping experience",
    image: "/images/ecom.jpg",
    tags: ["React", "Tailwind CSS", "Strapi"],
    type: "Student Commission",
    tooltip: "Commissioned project from students",
    demo: "#",
    github: "https://github.com/mjotohot/Richard_Shop.git",
  },
  {
    title: "GeoRent",
    description:
      "A mobile-based car rental system that allows users to browse available vehicles, book rentals, and manage their reservations.",
    image: "/images/georent.jpg",
    tags: ["React", "Tailwind CSS", "Supabase", "Capacitor.js"],
    type: "Student Capstone",
    tooltip: "Commissioned project from students",
    demo: "#",
    github: "",
  },
  {
    title: "Marketing Agency Website for Personal Trainers",
    description:
      "A marketing agency static website designed to help personal trainers grow their businesses through digital marketing services. The project was discontinued before full completion.",
    image: "/images/leadlift.png",
    tags: ["Next", "Tailwind CSS"],
    type: "Client Project",
    tooltip: "Outsourced development from external clients",
    demo: "https://webapp-theta-fawn.vercel.app/",
    github: "https://github.com/mjotohot/LandingPage.git",
  },
  {
    title: "NCIP Admin Dashboard",
    description:
      "Developed an admin management system for a survey profiling platform, enabling centralized survey configuration, user management, and monitoring of synchronized online and offline data.",
    image: "/images/ncip.jpg",
    tags: ["React", "React-Bootstrap", "Supabase"],
    type: "Student Capstone",
    tooltip: "Built for university students' capstone project",
    demo: "#",
    github: "https://github.com/mjotohot/NCIP-Web.git",
  },
  {
    title: "AssessMate",
    description:
      "Mobile-based application that checks student essays and provides feedback using AI technology based on rubrics set by the teacher.",
    image: "/images/asessmate.jpg",
    tags: ["React", "React-Bootstrap", "Supabase"],
    type: "Capstone Project",
    tooltip: "Built for university students' capstone project",
    demo: "#",
    github: "#",
  },
];

const badgeColors = {
  "Student Capstone": "bg-blue-600 text-white",
  "Student Commission": "bg-green-600 text-white",
  "Client Project": "bg-purple-900 text-white",
  "OJT Project": "bg-yellow-500 text-white",
  "Capstone Project": "bg-red-600 text-white",
};

// Modal for no demo available
function createDemoModal() {
  const modal = document.createElement("div");
  modal.id = "demo-modal";
  modal.className =
    "fixed inset-0 bg-black/60 bg-opacity-50 flex items-center justify-center z-50 hidden";
  modal.innerHTML = `
    <div class="bg-white dark:bg-gray-800 rounded-lg p-8 max-w-md w-full mx-4 shadow-xl">
      <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Demo Not Available
      </h3>
      <p class="text-gray-600 dark:text-gray-300 mb-6">
        This project demo is not publicly available at the moment. Contact me for more information.
      </p>
      <button
        onclick="document.getElementById('demo-modal').classList.add('hidden')"
        class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition"
      >
        Close
      </button>
    </div>
  `;
  document.body.appendChild(modal);
}

// Render projects dynamically
const projectsContainer = document.querySelector("#projects .grid");
projects.forEach((project, index) => {
  const card = document.createElement("div");
  card.className =
    "project-card group flex flex-col h-full hover:shadow-lg dark:hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl opacity-0";

  const imageLink = document.createElement("a");
  imageLink.className =
    "relative w-full h-56 md:h-64 lg:h-72 overflow-hidden rounded-t-xl block cursor-pointer";

  if (project.demo !== "#") {
    imageLink.href = project.demo;
    imageLink.target = "_blank";
    imageLink.rel = "noopener noreferrer";
  } else {
    imageLink.href = "#";
    imageLink.addEventListener("click", (e) => {
      e.preventDefault();
      document.getElementById("demo-modal").classList.remove("hidden");
    });
  }

  imageLink.innerHTML = `
    <img
      src="${project.image}"
      alt="${project.title}"
      class="absolute inset-0 z-10 w-full h-full object-contain rounded-t-xl
        transition-transform duration-500 group-hover:scale-105"
    />
    <img
      src="${project.image}"
      aria-hidden="true"
      class="absolute inset-0 w-full h-full object-cover blur-xl scale-110 opacity-40"
    />
    <div class="absolute top-3 left-3 group/badge z-20">
      <div
        class="flex items-center gap-1 px-3 text-xs py-1 rounded-r-lg cursor-pointer shadow-lg
              ${badgeColors[project.type] || "bg-gray-600 text-white"}"
      >
        ${project.type}
        <svg class="w-3 h-3 opacity-80" fill="currentColor" viewBox="0 0 20 20">
          <path
            fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-4a1 1 0 100 2 1 1 0 000-2zm-1 4a1 1 0 112 0v4a1 1 0 11-2 0v-4z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <div
        class="pointer-events-none absolute left-0 top-full mt-1
              w-max max-w-[220px]
              opacity-0 scale-95
              group-hover/badge:opacity-100 group-hover/badge:scale-100
              transition-all duration-200
              bg-gray-900 text-white text-xs rounded px-3 py-2 shadow-lg z-50"
      >
        ${project.tooltip}
      </div>
    </div>
  `;

  card.appendChild(imageLink);

  const content = document.createElement("div");
  content.className = "p-6 flex flex-col flex-1";
  content.innerHTML = `
    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
      ${project.title}
    </h3>
    <p class="text-gray-600 dark:text-gray-300 mb-4 text-sm">
      ${project.description}
    </p>
    <div class="flex flex-wrap gap-2 mt-auto mb-4">
      ${project.tags
        .map(
          (tag) =>
            `<span class="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded text-xs">
              ${tag}
            </span>`,
        )
        .join("")}
    </div>
  `;

  card.appendChild(content);
  projectsContainer.appendChild(card);
});

// Create modal on page load
document.addEventListener("DOMContentLoaded", () => {
  createDemoModal();
});

const testimonials = [
  {
    name: "Ma'am Jen",
    role: "Internship Supervisor, Navigatu TBI",
    testimonial:
      "Resourceful and can able to work with less supervision. Able to deliver output beyond expectations. Can easily adapt in learning frameworks.",
  },
  {
    name: "Mae Naidal",
    role: "QR-Based Visitor MS Client",
    testimonial:
      "Delivered exceptional work on our capstone project. Professional, communicative, and technically skilled. Highly recommended!",
  },
  {
    name: "Fil Revilla",
    role: "NCIP Web & Mobile Client",
    testimonial:
      "A dedicated and talented developer. He consistently goes above and beyond to ensure project success. His abilities are impressive.",
  },
  {
    name: "Mich",
    role: "Retinalyze.ai Client",
    testimonial:
      "Working with him was a pleasure. He is skilled, communicative, and dedicated to delivering quality work. Our project was a success thanks to his efforts.",
  },
];

// Render testimonials dynamically
const testimonialCarousel = document.getElementById("testimonials-carousel");
if (testimonialCarousel) {
  testimonials.forEach((testimonial) => {
    const card = document.createElement("div");
    card.className = "testimonial-item flex-shrink-0 w-80";
    card.innerHTML = `
      <div class="testimonial-card bg-gray-50 dark:bg-gray-800 p-8 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow h-full flex flex-col">
          <div class="mb-4">
            <h4 class="font-semibold text-gray-900 dark:text-white">${testimonial.name}</h4>
            <p class="text-sm text-gray-600 dark:text-gray-400">${testimonial.role}</p>
          </div>
        <p class="text-gray-600 dark:text-gray-300 italic flex-1">"${testimonial.testimonial}"</p>
      </div>
    `;
    testimonialCarousel.appendChild(card);
  });

  // Duplicate testimonials for seamless loop
  testimonials.forEach((testimonial) => {
    const card = document.createElement("div");
    card.className = "testimonial-item flex-shrink-0 w-80";
    card.innerHTML = `
      <div class="testimonial-card bg-gray-50 dark:bg-gray-800 p-8 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow h-full flex flex-col">
          <div class="mb-4">
            <h4 class="font-semibold text-gray-900 dark:text-white">${testimonial.name}</h4>
            <p class="text-sm text-gray-600 dark:text-gray-400">${testimonial.role}</p>
          </div>
        <p class="text-gray-600 dark:text-gray-300 italic flex-1">"${testimonial.testimonial}"</p>
      </div>
    `;
    testimonialCarousel.appendChild(card);
  });
}

// Typewriter effect
const texts = ["Hi, I'm Marion", "I'm a Web Developer"];
let index = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
  const currentText = texts[index];
  const h1 = document.querySelector(".typewriter h1");
  if (!isDeleting) {
    h1.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === currentText.length) {
      isDeleting = true;
      setTimeout(typeWriter, 1000); // Pause before deleting
    } else {
      setTimeout(typeWriter, 100); // Typing speed
    }
  } else {
    h1.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      index = (index + 1) % texts.length;
      setTimeout(typeWriter, 500); // Pause before next text
    } else {
      setTimeout(typeWriter, 50); // Deleting speed
    }
  }
}

// Initialize typewriter on load
document.addEventListener("DOMContentLoaded", () => {
  const h1 = document.querySelector(".typewriter h1");
  h1.textContent = "";
  typeWriter();
});

const MIN_LOADER_TIME = 3000;
const startTime = performance.now();

window.addEventListener("load", () => {
  const overlay = document.getElementById("loader-overlay");
  if (!overlay) return;

  const elapsed = performance.now() - startTime;
  const remaining = Math.max(0, MIN_LOADER_TIME - elapsed);

  setTimeout(() => {
    overlay.style.opacity = "0";
    overlay.style.pointerEvents = "none";
    overlay.setAttribute("aria-hidden", "true");

    setTimeout(() => {
      overlay.remove();
    }, 800);
  }, remaining);
});
