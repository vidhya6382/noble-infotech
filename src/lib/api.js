
import servicesData from "@/data/services";
import projectsData from "@/data/projects";
import testimonialsData from "@/data/testimonials";

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "";
export const isMockMode = !API_BASE_URL;

/** Small fetch wrapper with JSON handling and readable errors. */
async function request(path, options = {}) {
  const res = await fetch(`${API_BASE_URL}${path}`, {
    headers: { "Content-Type": "application/json", ...(options.headers || {}) },
    ...options,
  });

  let data = null;
  try {
    data = await res.json();
  } catch {
    // response had no JSON body
  }

  if (!res.ok) {
    const message = data?.message || `Request failed with status ${res.status}`;
    throw new Error(message);
  }
  return data;
}

/* ---------------- Content (read) ---------------- */

// விரும்பும் வரிசை (service id-கள்)
const SERVICE_ORDER = [
  "reels-creative-design",
  "digital-marketing",
  "brand-strategy",
  "google-ads",
  "whatsapp-email-marketing",
  "web-development",
  "seo"
];

function sortServices(list) {
  const pos = (s) => {
    const i = SERVICE_ORDER.indexOf(s.id);
    return i === -1 ? 999 : i; // பட்டியலில் இல்லாதவை கடைசியில்
  };
  return [...list].sort((a, b) => pos(a) - pos(b));
}

export async function getServices() {
  if (isMockMode) return sortServices(servicesData);
  const data = await request("/api/services");
  return sortServices(
    data.filter((s) => !/software/i.test(s.title || s.name || ""))
  );
}

// BACKEND: GET /api/projects → Array<Project> (same shape as src/data/projects.js)
export async function getProjects() {
  if (isMockMode) return projectsData;
  return request("/api/projects");
}

// BACKEND: GET /api/testimonials → Array<Testimonial> (same shape as src/data/testimonials.js)
export async function getTestimonials() {
  if (isMockMode) return testimonialsData;
  return request("/api/testimonials");
}

/* ---------------- Contact form (write) ---------------- */

export async function submitContactForm(payload) {
  if (isMockMode) {
    // Simulated network delay so the loading state can be seen.
    await new Promise((resolve) => setTimeout(resolve, 1200));
    console.info("[mock] Contact form payload:", payload);
    return { success: true, message: "Thanks! Your message has been received." };
  }

  return request("/api/contact/", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}
