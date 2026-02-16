"use client"

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Moon, Sun, Github, Twitter, Instagram, Linkedin, Globe, Mail, Youtube, Music } from "lucide-react";
import { Button } from "@/components/ui/button";
import LinkCard from "./ui/link-card";

export interface LinksProps {
    id: number,
    title: string,
    subtitle?: string,
    url: string,
    icon: React.ReactNode,
    color: string,
}

let id = 0;

const links: LinksProps[] = [
    {
        id: id++,
        title: "GitHub",
        subtitle: "Check out my code",
        url: "https://github.com/Hamzeh-Dev",
        icon: <Github className="w-6 h-6" />,
        color: "hover:bg-gray-100 dark:hover:bg-gray-800",
    },
    {
        id: id++,
        title: "Twitter",
        subtitle: "Follow me for updates",
        url: "https://twitter.com",
        icon: <Twitter className="w-6 h-6" />,
        color: "hover:bg-blue-50 dark:hover:bg-blue-900/20",
    },
    {
        id: id++,
        title: "LinkedIn",
        subtitle: "Let's connect professionally",
        url: "https://www.linkedin.com/in/hamzeh-al-naimi-8a42852b6",
        icon: <Linkedin className="w-6 h-6" />,
        color: "hover:bg-blue-50 dark:hover:bg-blue-900/20",
    },
    {
        id: id++,
        title: "Portfolio Website",
        subtitle: "View my work",
        url: "https://hamzeh-naimi.vercel.app/",
        icon: <Globe className="w-6 h-6" />,
        color: "hover:bg-green-50 dark:hover:bg-green-900/20",
    },
    {
        id: id++,
        title: "Email Me",
        subtitle: "Get in touch",
        url: "mailto:hamzehalnaimi3@gmail.com",
        icon: <Mail className="w-6 h-6" />,
        color: "hover:bg-red-50 dark:hover:bg-red-900/20",
    },
    {
        id: id++,
        title: "YouTube",
        subtitle: "Subscribe to my channel",
        url: "https://youtube.com",
        icon: <Youtube className="w-6 h-6" />,
        color: "hover:bg-red-50 dark:hover:bg-red-900/20",
    },
    {
        id: id++,
        title: "Instagram",
        subtitle: "Follow my journey",
        url: "https://instagram.com",
        icon: <Instagram className="w-6 h-6" />,
        color: "hover:bg-pink-50 dark:hover:bg-pink-900/20",
    },
    {
        id: id++,
        title: "Spotify Playlist",
        subtitle: "Listen to my favorites",
        url: "https://spotify.com",
        icon: <Music className="w-6 h-6" />,
        color: "hover:bg-green-50 dark:hover:bg-green-900/20",
    },
];

export default function LinktreePage() {
    const [darkMode, setDarkMode] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
            const isDark = localStorage.getItem("darkMode") === "true";
            setDarkMode(isDark);
        if (isDark) {
            document.documentElement.classList.add("dark");
        }
    }, []);

    const toggleDarkMode = () => {
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);
        localStorage.setItem("darkMode", newDarkMode.toString());
        if (newDarkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }

    if (!mounted) {
        return null;
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
            {/* Dark mode toggle */}
            <div className="fixed top-4 right-4 z-10">
                <Button
                    variant="outline"
                    size="icon"
                    onClick={toggleDarkMode}
                    className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-gray-200 dark:border-gray-700 cursor-pointer"
                >
                    {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                </Button>
            </div>

            <div className="container mx-auto px-4 py-8 max-w-md">
                {/* Profile Section */}
                <div className="text-center mb-8 animate-fade-in">
                    
                    {/* Image Here */}
                    <div className="relative w-24 h-24 mx-auto mb-4">
                        <Image
                            src="/default.jpg"
                            alt="Profile Picture"
                            width={96}
                            height={96}
                            className="w-24 h-24 rounded-full border-4 border-white dark:border-gray-700 shadow-lg object-cover"
                        />
                    </div>

                    {/* Name Here */}
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Hamzeh-Dev</h1>

                    {/* Header Here */}
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed max-w-xs mx-auto">
                        Software engineer turning ideas into real products.
                    </p>
                </div>

                {/* Links Section */}
                <div className="space-y-4">
                    {links.map((link, index) => (
                        <LinkCard key={index} link={link} index={index} />
                    ))}
                </div>

                {/* Footer */}
                <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: "800ms" }}>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                        Made by {" "}
                        <Link href={"https://github.com/Hamzeh-Dev"} target="_blank">Hamzeh-Dev</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}
