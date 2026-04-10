export interface Friend {
  name: string;
  url: string;
  avatar?: string;
  description?: string;
}

export const friends: Friend[] = [
  {
    name: "AstroPaper",
    url: "https://astro-paper.pages.dev/",
    avatar: "https://astro-paper.pages.dev/favicon.svg",
    description: "A minimal, responsive and SEO-friendly Astro blog theme.",
  },
  {
    name: "Astro",
    url: "https://astro.build/",
    avatar: "https://astro.build/favicon.svg",
    description: "The web framework for content-driven websites.",
  },
  {
    name: "Tailwind CSS",
    url: "https://tailwindcss.com/",
    description: "A utility-first CSS framework for rapid UI development.",
  },
];
