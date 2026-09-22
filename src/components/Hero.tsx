"use client";

import Image from "next/image";
import { useTypingAnimation } from "@/hooks/useTypingAnimation";
import { ArrowDown, ArrowRight, FileText } from "lucide-react";
import { SocialIcon } from "./SocialIcons";

export default function Hero() {
  const roles = ["Frontend Developer", "Full Stack Developer", "Backend Developer"];
  const typedText = useTypingAnimation(roles, 100, 50, 2000);

  return (
    <section id="home" className="relative min-h-screen scroll-mt-24 px-4 pb-20 pt-20 sm:px-6 sm:pt-20 md:pt-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {}
        <div>
          <h1 className="text-4xl sm:text-5xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
            <span className="block">Hi, I&apos;m</span>
            <span className="block break-words">ALIF MAS SASTRO NUGROHO,</span>
            <span className="block h-[2.4em] w-[11ch] min-w-0 max-w-[11ch] md:h-[1.2em] md:w-auto md:min-w-[300px] md:max-w-none">
              {typedText}
              <span className="typing-cursor"></span>
            </span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-muted mb-8 max-w-lg">
            Saya membangun pengalaman digital yang matang dengan sudut pandang yang bersih dan modern.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <a href="#projects" className="px-4 py-2 text-sm sm:px-8 sm:py-3 sm:text-base bg-primary text-white rounded-full font-semibold flex items-center gap-2 hover:bg-accent transition-colors">
              View My Work <ArrowRight size={16} />
            </a>
            <a href="#contact" className="soft-pill px-4 py-2 text-sm sm:px-8 sm:py-3 sm:text-base rounded-full font-semibold">
              Contact Me
            </a>
            <a
              href="/resume.pdf"
              download
              className="soft-pill px-4 py-2 text-sm sm:px-8 sm:py-3 sm:text-base rounded-full font-semibold flex items-center gap-2"
            >
              <FileText size={16} /> View Resume
            </a>
          </div>

          <div className="flex gap-3">
            {[
              { icon: "github" as const, href: "https://github.com/alifmassastronugroho" },
              { icon: "linkedin" as const, href: "https://www.linkedin.com/in/alif-mas-sastro-nugroho-0886b2425/" },
              { icon: "instagram" as const, href: "https://www.instagram.com/amsn_serve/" },
            ].map(({ icon: Icon, href }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border-2 border-border flex items-center justify-center hover:border-primary hover:bg-primary hover:text-white transition-all"
              >
                <SocialIcon name={Icon} size={18} />
              </a>
            ))}
          </div>
        </div>

        {}
        <div className="relative">
          <div className="bg-primary rounded-3xl p-4 shadow-2xl">
            <div className="bg-white rounded-2xl overflow-hidden relative aspect-[4/3]">
              {}
              <div className="absolute top-3 left-4 right-4 flex justify-between items-center z-10">
                <span className="text-[10px] tracking-[2px] font-mono text-muted">
                  <span className="text-accent">●</span> ALIF MAS SASTRO NUGROHO
                </span>
                <span className="text-[10px] tracking-[2px] font-mono text-muted">
                  <span className="text-yellow-500">●</span> ON
                </span>
              </div>
              {}
              <div className="relative flex h-full min-h-[280px] w-full items-center justify-center overflow-hidden bg-bg sm:min-h-[340px] md:min-h-[420px] lg:min-h-[500px]">
                <Image
                  src="/foto-orang-ganteng.png"
                  alt="Alif Mas Sastro Nugroho"
                  width={1200}
                  height={1200}
                  priority
                  unoptimized
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="h-full w-full object-contain object-center"
                />
              </div>
            </div>
            {}
            <div className="flex justify-center gap-16 mt-2">
              <div className="w-16 h-3 bg-primary rounded-full"></div>
              <div className="w-16 h-3 bg-primary rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {}
      <div className="absolute inset-x-0 bottom-6 flex justify-center animate-bounce sm:bottom-8">
        <a href="#about" className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/25 text-primary shadow-sm">
          <ArrowDown size={20} strokeWidth={1.75} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}