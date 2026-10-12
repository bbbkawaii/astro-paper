export interface Friend {
  name: string;
  url: string;
  avatar?: string;
  description?: string;
}

export const friends: Friend[] = [
  {
    name: "囫囵吞桃",
    url: "https://blog.hltt.online/",
    avatar: "/images/friends/hltt.jpeg",
    description: "majoring in Computer Science, interested in Godot",
  },
  {
    name: "AI庄周会不会梦到电子胡蝶",
    url: "https://ideal-octo-adventure.vercel.app/",
    avatar: "/images/friends/airbate.webp",
    description:
      "the meaning of life is not in the answer, but in the footprints along the way",
  },
];
