import { Project } from "../types";

export const projects: Project[] = [
  {
    title: "Solscore Prediction Market",
    description:
      "Decentralized prediction market built on Solana blockchain using Anchor framework and Rust smart contracts. Features real-time betting, liquidity pools, and automated market making with a modern React frontend.",
    tech: ["Solana", "Rust", "Anchor", "React", "Web3.js", "TypeScript"],
    links: {
      github: "https://github.com/ovpn-dev",
      live: "https://solscore-website.vercel.app/",
    },
    featured: true,
  },
  {
    title: "Help Youth Cope",
    description:
      "Mental health support mobile application featuring AI-powered counseling, emergency SOS functionality, and personalized daily motivational content. Built with React Native for cross-platform deployment.",
    tech: ["React Native", "LLMs", "AI", "iOS", "Android", "Node.js"],
    links: {
      appstore: "https://apps.apple.com/us/app/help-youth-cope/id6743499151",
      playstore: "https://play.google.com/store/apps/details?id=com.hyc.hyc"
    },
    featured: true,
  },
  {
    title: "Wisdom Tech & Safety Solutions",
    description:
      "Enterprise-grade safety management system providing HSE documentation, compliance tracking, and operational workflows for large-scale construction and industrial contractors.",
    tech: ["Business Systems", "HSE", "Operations", "Compliance"],
    links: {
      live: "http://wisdomtechsafetysolutions.com.ng/"
    },
    featured: false,
  },
  {
    title: "Aptitude Estimates",
    description:
      "AI-powered aptitude assessment platform utilizing machine learning algorithms to evaluate and estimate cognitive abilities and career fit through interactive testing modules.",
    tech: ["Next.js", "AI", "TypeScript", "Machine Learning"],
    links: {
      live: "https://aptitudeestimates.com/"
    },
    featured: false,
  },
];
