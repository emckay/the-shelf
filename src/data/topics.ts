export interface Topic {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  accentColor: string;
  bgGradient: string;
  textColor: string;
  videoUrl: string;
}

export const topics: Topic[] = [
  {
    slug: "chess",
    title: "Chess",
    tagline: "Master the game of kings",
    description:
      "Learn to think ahead, plan your moves, and outsmart your opponent. Chess builds critical thinking, patience, and strategic skills that last a lifetime.",
    accentColor: "#2D5016",
    bgGradient: "linear-gradient(135deg, #2D5016 0%, #1a3a0a 50%, #121410 100%)",
    textColor: "#e3e3dc",
    videoUrl: "",
  },
  {
    slug: "ukulele",
    title: "Ukulele",
    tagline: "Strum your way to fun",
    description:
      "Strum with the tide. Master chords, learn vibrant patterns, and play your favorite songs in a fun, relaxed island style designed for your rhythm.",
    accentColor: "#FF6B35",
    bgGradient: "linear-gradient(135deg, #fdf6f0 0%, #f5ebe0 50%, #ede0d0 100%)",
    textColor: "#5c2d10",
    videoUrl: "",
  },
  {
    slug: "korean",
    title: "Korean",
    tagline: "Learn a new language",
    description:
      "Discover the beautiful Korean language! Learn Hangul, everyday phrases, and fun expressions. Open the door to K-pop, Korean food, and a rich culture.",
    accentColor: "#E8A0BF",
    bgGradient: "linear-gradient(135deg, #fdf0f5 0%, #f5e4ec 50%, #ede0e8 100%)",
    textColor: "#5c2040",
    videoUrl: "",
  },
  {
    slug: "coding",
    title: "Coding",
    tagline: "Build amazing things",
    description:
      "Write your first lines of code and bring your ideas to life! Learn programming basics, build games, and create interactive projects that you can share with friends.",
    accentColor: "#3B82F6",
    bgGradient: "linear-gradient(135deg, #1E1B4B 0%, #1e3a5f 50%, #0f172a 100%)",
    textColor: "#e0e7ff",
    videoUrl: "",
  },
  {
    slug: "piano",
    title: "Piano",
    tagline: "Play beautiful melodies",
    description:
      "Master the ivory keys, learn to read music, master scales, and play your favorite classical and modern pieces with precision and soul.",
    accentColor: "#1a1a2e",
    bgGradient: "linear-gradient(135deg, #0f1118 0%, #1a1a2e 40%, #0f3460 100%)",
    textColor: "#e8e8f0",
    videoUrl: "",
  },
  {
    slug: "toki-pona",
    title: "Toki Pona",
    tagline: "The language of good",
    description:
      "Discover the world's most minimal and positive language, built with only 137 words to help you focus on the good things in life.",
    accentColor: "#FBBF24",
    bgGradient: "linear-gradient(135deg, #fefce8 0%, #fef9c3 50%, #fef3c7 100%)",
    textColor: "#451a03",
    videoUrl: "",
  },
  {
    slug: "spanish",
    title: "Spanish",
    tagline: "Speak with the world",
    description:
      "Join 500 million speakers and discover the vibrant soul of the Spanish-speaking world. From the streets of Madrid to the mountains of the Andes, your journey starts here.",
    accentColor: "#DC2626",
    bgGradient: "linear-gradient(135deg, #fdf2e9 0%, #f5dcc4 50%, #e8c9a4 100%)",
    textColor: "#6b2113",
    videoUrl: "",
  },
  {
    slug: "soroban",
    title: "Soroban",
    tagline: "Calculate at lightning speed",
    description:
      "A digital instrument of mastery. Transpose ancient tactile precision into modern cognitive speed. Experience the art of calculation through geometric harmony.",
    accentColor: "#92400e",
    bgGradient: "linear-gradient(135deg, #faf6f0 0%, #f5ede0 50%, #ebe0cc 100%)",
    textColor: "#3d2800",
    videoUrl: "",
  },
  {
    slug: "story-writing",
    title: "Story Writing",
    tagline: "Create worlds with words",
    description:
      "Become an author this summer! Learn how to build characters, craft plots, and write stories that pull readers in from the very first sentence.",
    accentColor: "#7C3AED",
    bgGradient: "linear-gradient(135deg, #7C3AED 0%, #6d28d9 50%, #4c1d95 100%)",
    textColor: "#ede9fe",
    videoUrl: "",
  },
  {
    slug: "typing",
    title: "Typing",
    tagline: "Speed up your fingers",
    description:
      "Learn to type fast and accurately without looking at the keyboard! Touch typing is a superpower that will help you in school, coding, and beyond.",
    accentColor: "#059669",
    bgGradient: "linear-gradient(135deg, #059669 0%, #10b981 50%, #047857 100%)",
    textColor: "#ecfdf5",
    videoUrl: "",
  },
];
