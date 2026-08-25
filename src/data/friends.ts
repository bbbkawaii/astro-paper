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
];
