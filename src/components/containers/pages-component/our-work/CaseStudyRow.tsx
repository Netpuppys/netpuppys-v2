"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Carousel } from "@/components/common/Carousel";
import { RichText } from "@/components/common/RichText";
import { Container } from "@/components/containers/common/Container";
import type { CaseStudyDetail } from "@/lib/data/pages/our-work";

/** One case study: category, logo and write-up on the left; two-up video slider (YouTube lightbox) on the right. */
export const CaseStudyRow: React.FC<{ study: CaseStudyDetail }> = ({ study }) => {
  const [playing, setPlaying] = useState<string | null>(null);

  useEffect(() => {
    if (!playing) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setPlaying(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [playing]);

  return (
    <section className="py-5 lg:min-h-[690px]">
      <Container className="grid gap-8 lg:grid-cols-[407px_1fr] lg:gap-5 lg:px-[30px]">
        <div>
          {study.category && (
            <h2 className="font-display text-[32px] font-semibold uppercase leading-[1.1] tracking-[-1.5px] text-ink lg:text-[40px] lg:tracking-[-2px]">
              {study.category}
            </h2>
          )}
          <Image
            src={study.logo.src}
            alt={study.logo.alt}
            width={study.logo.width}
            height={study.logo.height}
            className={["w-auto object-contain object-left", study.category ? "mt-5" : ""].join(" ")}
            style={{ height: study.logoHeight }}
          />
          <RichText
            html={study.html}
            className="mt-8 text-base font-light leading-6 text-body [&_h5]:mb-1.5 [&_h5]:font-display [&_h5]:text-xl [&_h5]:font-bold [&_h5]:leading-6 [&_h5]:tracking-[-0.6px] [&_h5]:text-ink [&_p]:mt-4 [&_strong]:text-body"
          />
        </div>
        <Carousel label={`${study.logo.alt} videos`} slideClassName="basis-full sm:basis-1/2" gap={10} dots>
          {study.shots.map((s) => (
            <button
              key={s.src}
              type="button"
              onClick={() => setPlaying(s.youtubeId)}
              aria-label={`Play video: ${s.alt}`}
              className="group relative block aspect-[412/620] w-full overflow-hidden bg-cover bg-center"
              style={{ backgroundImage: `url(${s.src})` }}
            >
              <span className="absolute left-1/2 top-1/2 flex h-[70px] w-[70px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white transition-transform group-hover:scale-110">
                <FontAwesomeIcon icon={faPlay} className="ml-1 text-2xl" />
              </span>
            </button>
          ))}
        </Carousel>
      </Container>

      {playing && (
        <div role="dialog" aria-modal="true" aria-label="Video" className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4" onClick={() => setPlaying(null)}>
          <button type="button" onClick={() => setPlaying(null)} aria-label="Close video" className="absolute right-5 top-5 text-white">
            <FontAwesomeIcon icon={faXmark} className="text-3xl" />
          </button>
          <div className="aspect-video w-full max-w-[1100px]" onClick={(e) => e.stopPropagation()}>
            <iframe
              src={`https://www.youtube.com/embed/${playing}?autoplay=1&rel=0`}
              title="Case study video"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
              className="h-full w-full"
            />
          </div>
        </div>
      )}
    </section>
  );
};
