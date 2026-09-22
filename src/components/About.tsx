"use client";

import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Sparkles } from "lucide-react";
import { useRef, useState } from "react";

export default function About() {
  const ref = useScrollReveal<HTMLElement>();
  const hangingUnitRef = useRef<HTMLDivElement>(null);
  const dragStart = useRef({ pointerX: 0, pointerY: 0, offsetX: 0, offsetY: 0 });
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    dragStart.current = {
      pointerX: event.clientX,
      pointerY: event.clientY,
      offsetX: dragOffset.x,
      offsetY: dragOffset.y,
    };
    setIsDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    const maxOffset = Math.min(150, Math.max(72, window.innerWidth * 0.28));
    const nextX = dragStart.current.offsetX + event.clientX - dragStart.current.pointerX;
    const nextY = dragStart.current.offsetY + event.clientY - dragStart.current.pointerY;

    setDragOffset({
      x: Math.max(-maxOffset, Math.min(maxOffset, nextX)),
      y: Math.max(-maxOffset * 0.75, Math.min(maxOffset * 0.75, nextY)),
    });
  };

  const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(false);
    setDragOffset({ x: 0, y: 0 });
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  const hangingUnitStyle = {
    "--drag-x": `${dragOffset.x}px`,
    "--drag-y": `${dragOffset.y}px`,
    "--drag-rotation": `${Math.max(-8, Math.min(8, dragOffset.x / 18))}deg`,
    "--rope-length": `${Math.max(20, Math.hypot(dragOffset.x, 84 + dragOffset.y))}px`,
    "--rope-angle": `${-Math.atan2(dragOffset.x, 84 + dragOffset.y) * (180 / Math.PI)}deg`,
  } as React.CSSProperties;

  return (
    <section id="about" ref={ref} className="py-24 px-6 relative">
      {}
      <Sparkles className="absolute top-20 right-20 w-8 h-8 text-muted opacity-50" />
      <Sparkles className="absolute bottom-20 left-20 w-8 h-8 text-muted opacity-50" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {}
        <div className="flex justify-center">
          <div
            ref={hangingUnitRef}
            className={`hanging-unit relative${isDragging ? " is-dragging" : ""}`}
            style={hangingUnitStyle}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
          >
            <div className="hanging-anchor"></div>
            <div className="hanging-rope bg-primary"></div>
            <div className="hanging-card-drag">
              <div className="hanging-card bg-black rounded-2xl p-4 shadow-xl border border-black mt-2">
                <div className="w-64 h-80 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden">
                  <Image
                    src="/cat.jpg"
                    alt="Alif Mas Sastro Nugroho"
                    width={720}
                    height={708}
                    sizes="256px"
                    draggable={false}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {}
        <div className="max-w-xl">
          <h2 className="text-5xl font-extrabold mb-6">Hello!</h2>
          <p className="text-lg mb-0">
            <span className="text-accent font-semibold">Hai, saya Alif Mas Sastro Nugroho.</span>
          </p>
          <p className="text-lg mb-5">
            <span className="text-accent font-semibold">
              Saya peduli pada proses membangun produk digital yang jelas, bermanfaat, dan matang.
            </span>
          </p>
          <p className="text-muted leading-relaxed mb-5">
            Saya tertarik pada desain yang penuh pertimbangan dan rekayasa praktis. Bagi saya, gagasan yang baik perlu diolah menjadi pengalaman yang jelas, tenang, dan terarah.
          </p>
          <p className="text-muted leading-relaxed mb-5">
            Pendekatan saya sederhana: memahami masalah, menyusun struktur, membangun dengan cermat, lalu menyempurnakan detail yang membuat produk lebih mudah digunakan. Saya menghargai pekerjaan yang mudah dipahami dan kolaborasi yang kuat.
          </p>
          <p className="text-muted leading-relaxed">
            Di luar kode, saya menikmati sisi visual dari pekerjaan digital: ritme, komposisi, gerakan, dan interaksi kecil yang memberi karakter pada sebuah proyek.
          </p>
        </div>
      </div>
    </section>
  );
}