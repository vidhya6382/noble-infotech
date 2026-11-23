// Site-wide content for Noble Infotech.
// Company details come from the business card. Items marked "UPDATE" are
// placeholders — replace them with your real figures before going live.

export const company = {
  name: "Noble",
  fullName: "Noble Infotech",
  tagline: "websites & digital marketing that grow your business.",
  phones: ["+91 99943 53910", "+91 97513 45910"],
  phone: "+91 99943 53910",
  whatsapp: "+91 9994353910", // number used for the WhatsApp button (country code, no +)
  email: "info@nobleinfotech.in", // UPDATE: confirm your real email address
  website: "www.nobleinfotech.in",
  address: "200, RC Church Street, Alangulam, Tamil Nadu 627851",
  mapQuery: "200, RC Church Street, Alangulam, Tamil Nadu 627851",
  hours: "Mon – Sat, 9:30 AM – 6:30 PM",
   socials: [
    { name: "Instagram", href: "https://www.instagram.com/noble.infotech" },
    { name: "YouTube", href: "https://www.youtube.com/@nobleinfotech-z8l" },
  ],
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services", hasDropdown: true },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
];

// UPDATE: replace with your real numbers.
export const stats = [
  { value: 100, suffix: "+", label: "Projects Delivered" },
  { value: 50, suffix: "+", label: "Happy Clients" },
  { value: 8, suffix: "", label: "Core Services" },
  { value: 24, suffix: "/7", label: "WhatsApp Support" },
];

export const whyChooseUs = [
  {
    icon: "Layers",
    title: "Everything Under One Roof",
    text: "Software, website, ads, reels, SEO and branding, all handled by one team. No running between agencies.",
  },
  {
    icon: "MapPin",
    title: "Local Team, Personal Service",
    text: "Based in Alangulam, Tenkasi. Meet us in person, talk in Tamil or English, and get answers quickly.",
  },
  {
    icon: "Wallet",
    title: "Affordable Packages",
    text: "Plans designed for small and growing businesses, with clear pricing and no hidden charges.",
  },
  {
    icon: "Target",
    title: "Result-Focused Marketing",
    text: "We track calls, enquiries and sales from every campaign so you know what your money is doing.",
  },
  {
    icon: "Zap",
    title: "Fast Delivery",
    text: "Websites live in days and campaigns running within a week, with regular updates on progress.",
  },
  {
    icon: "Headphones",
    title: "Ongoing Support",
    text: "We stay with you after launch, with updates, changes and quick help on call or WhatsApp.",
  },
];

export const values = [
  { icon: "Heart", title: "Customer First", text: "Your business growth is how we measure our own success." },
  { icon: "Eye", title: "Honest & Transparent", text: "Clear pricing, clear reports and honest advice, every time." },
  { icon: "Lightbulb", title: "Creative Thinking", text: "Fresh ideas and designs that make your brand stand out locally and online." },
  { icon: "TrendingUp", title: "Keep Improving", text: "We learn the latest tools and platforms so your business stays ahead." },
];

// Departments shown in the "Our Team" section.
// To show real people instead, add { name, role, image } items and update the About page.
export const team = [
  {
    icon: "Code2",
    name: "Software & Web Team",
    role: "Custom software, websites, e-commerce and web apps",
  },
  {
    icon: "Megaphone",
    name: "Digital Marketing Team",
    role: "Meta Ads, Google Ads, SEO and lead generation",
  },
  {
    icon: "Clapperboard",
    name: "Creative Studio",
    role: "Reels, video editing, posters and graphic design",
  },
  {
    icon: "PenTool",
    name: "Brand & Content Team",
    role: "Brand strategy, copywriting and content calendars",
  },
];

export const achievements = [
  {
    icon: "Layers",
    title: "Complete Digital Solutions",
    text: "From custom software to marketing, one partner for every digital need.",
  },
  {
    icon: "MapPin",
    title: "Serving Tenkasi & Beyond",
    text: "Helping shops, schools, clinics and businesses across Tamil Nadu go digital.",
  },
  {
    icon: "Smartphone",
    title: "Mobile-First Everything",
    text: "Every website, reel and ad is designed for the phone screens your customers use.",
  },
  {
    icon: "Award",
    title: "Quality You Can See",
    text: "Professional design and clean code on every project, big or small.",
  },
];

export const industries = [
  "Retail Shops", "Textiles", "Schools", "Hospitals", "Restaurants", "Real Estate", "Startups", "Manufacturing",
];