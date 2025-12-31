import sanaaya from "../assets/sanaaya.png";
import citikeeper from "../assets/citikeeper.png";
import cybershield from "../assets/cybershield.png";
import internit from "../assets/inter-nit.png";

export const content = {
  hero: {
    headline: "We Build Your\nDigital Vision",
    subhead: "Professional websites, mobile apps, video editing, and more.",
    primary: "Get Started",
    secondary: "See How it Works",
    cta: "Get Started", // Maintaining for backward compatibility if needed, or update if Hero uses it
    trustedBy: "Already chosen by these leaders:",
    logos: ["Webflow", "Shopify", "Discord", "Airbnb", "Pinterest", "Duolingo"]
  },
  portfolio: {
    headline: "Our Featured Work",
    subhead: "See how we bring ideas to life.",
    projects: [
      {
        name: "Sanaaya",
        category: "Web App",
        url: "https://ptalwebsite.vercel.app/",
        image: sanaaya,
      },
      {
        name: "CitiKeeper",
        category: "E-commerce",
        url: "https://citikeeper.com/home",
        image: citikeeper
      },
      {
        name: "CyberShield",
        category: "Web App",
        url: "https://git-bytes.vercel.app/",
        image: cybershield
      },
      {
        name: "Inter NIT",
        category: "project",
        url: "https://inter-nit.sacnitjsr.org/",
        image: internit
      },
    ]
  },
  techStack: {
    headline: "Technologies We Use",
    subhead: "Cutting-edge tools for premium results.",
    tools: [
      { name: "Figma", category: "Design" },
      { name: "Adobe Premiere Pro", category: "Video" },
      { name: "React", category: "Frontend" },
      { name: "Node.js", category: "Backend" },
      { name: "Express", category: "Backend" },
      { name: "TypeScript", category: "Language" },
      { name: "After Effects", category: "Video" },
      { name: "PostgreSQL", category: "Database" }
    ]
  },
  features: {
    headline: "We resolve problems associated with creative procedures.",
    items: [
      {
        title: "Creative workflow",
        description: "Get the best creative procedures without the hassle."
      },
      {
        title: "Real-time usage",
        description: "We are available to start immediately."
      },
      {
        title: "Scalable company size",
        description: "Scale your design team as you grow."
      },
      {
        title: "Collaborate in real-time",
        description: "Working together has never been easier."
      }
    ],
    tags: ["Development", "Web Design", "Video Editing", "Graphics"]
  },
  services: {
    headline: "Top-notch designs delivered at your doorstep",
    items: [
      {
        title: "Custom Website Development",
        description: "We build fast, responsive, and SEO-friendly websites tailored to your brand—from sleek business sites to powerful e-commerce platforms."
      },
      {
        title: "Native & Cross-Platform Apps",
        description: "Design and development of iOS and Android apps that deliver smooth performance, intuitive UX, and scalability for your users."
      },
      {
        title: "User-Centered Design",
        description: "Creating engaging interfaces and seamless user experiences through wireframing, prototyping, and usability testing."
      },
      {
        title: "Professional Video Services",
        description: "From cutting social media clips to full corporate videos—editing, motion graphics, color grading, and sound design."
      },
      {
        title: "Visual Branding & Design",
        description: "Logos, branding kits, marketing materials, and digital graphics that communicate your identity clearly and creatively."
      },
      {
        title: "Growth & Marketing Strategy",
        description: "Boost your online presence with SEO, content marketing, social media campaigns, and analytics-driven strategies."
      }
    ]
  },
  testimonials: {
    headline: "What our client say about us",
    stats: [
      { value: "45+", label: "Happy Clients" },
      { value: "5k+", label: "Projects Done" },
      { value: "4.8", label: "Rating" }
    ],
    reviews: [
      {
        text: "ArtisanLink completely transformed our outdated website into a modern, mobile-friendly platform. Our bounce rate dropped by 40% and leads increased within weeks. Professional, timely, and exceeded expectations!",
        author: "Sanya Sharma",
        role: "Web Development"
      },
      {
        text: "The fitness app they built for us has over 10k downloads with 4.8-star reviews. Clean code, intuitive UI, and seamless performance. They truly understood our vision and delivered beyond scope.",
        author: "Rajiv Mehta",
        role: "Mobile Applications"
      },
      {
        text: "Our user engagement increased by 60% after the UI/UX redesign. ArtisanLink’s team conducted thorough user research and delivered prototypes that made our product feel premium and easy to use.",
        author: "Esha Rao",
        role: "UI/UX Design"
      },
      {
        text: "We needed a series of product launch videos under a tight deadline. Not only did they deliver ahead of schedule, but the editing quality and storytelling were outstanding. Our social media engagement tripled!",
        author: "Manav Tiwari",
        role: "Video Editing & Production"
      },
      {
        text: "From logo to full brand identity—their designs captured our essence perfectly. The brand guide they provided has been invaluable for keeping our marketing consistent across all channels.",
        author: "Priya Kapoor",
        role: "Graphic & Brand Design"
      },
      {
        text: "After 3 months of SEO and content strategy with ArtisanLink, our organic traffic grew by 200%. They’re transparent, data-driven, and truly partners in our growth.",
        author: "Deepak Patel",
        role: "Digital Marketing"
      }
    ]
  },
  cta: {
    headline: "Elevate the way you source design",
    subhead: "Ready to get started? Join us today.",
    button: "Get Started"
  },
  navbar: {
    links: ["Services", "Portfolio", "Tech Stack", "Testimonials", "Contact"]
  },
  footer: {
    links: ["Terms", "Privacy", "FAQ"]
  }
};
