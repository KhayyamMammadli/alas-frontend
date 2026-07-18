import { useEffect, useRef, useState, type RefObject } from 'react';

const desktopStats = [
  ['50+', 'Active members', 'DFW businesses trust ALAS'],
  ['4.9★', 'Google rating', 'From 200+ reviews'],
  ['<2hrs', 'Avg emergency response', 'When every minute matters'],
  ['5 yrs', 'Serving DFW', 'Strong roots. Local focus.'],
] as const;

const mobileStats = [
  ['/assets/figma-commercial-stat-shield.svg', '50+', 'businesses protected'],
  ['/assets/figma-commercial-stat-clock.svg', '<2 hrs', 'response time'],
  ['/assets/figma-commercial-stat-star.svg', '4.9', 'rating'],
  ['/assets/figma-commercial-stat-bolt.svg', '3-in-1', 'systems coverage'],
] as const;

const mariaQuote = '“Our walk-in cooler failed on a Thursday night. I called ALAS and a technician was at my restaurant in under 90 minutes. We didn’t lose a single item. Worth every dollar of the monthly fee.”';
const jamesQuote = '“I used to have four different contractor numbers saved in my phone. Now I have one. That alone is worth the monthly fee. Plus our HVAC hasn’t had a single emergency since we started maintenance visits.”';
const mariaDesktopQuote = '“Our walk-in cooler failed on a\nThursday night. I called ALAS and a\ntechnician was at my restaurant in\nunder 90 minutes. We didn’t lose a\nsingle item. Worth every dollar of the\nmonthly fee.”';
const jamesDesktopQuote = '“I used to have four different contractor\nnumbers saved in my phone. Now I\nhave one. That alone is worth the\nmonthly fee. Plus our HVAC hasn’t had\na single emergency since we started\nmaintenance visits.”';

function MockVideoFace({ name, role, playing, videoRef, onBack }: { name: string; role: string; playing: boolean; videoRef: RefObject<HTMLVideoElement | null>; onBack: () => void }) {
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(5);
  const formatTime = (seconds: number) => {
    const safeSeconds = Number.isFinite(seconds) ? Math.max(0, Math.floor(seconds)) : 0;
    return `${Math.floor(safeSeconds / 60)}:${String(safeSeconds % 60).padStart(2, '0')}`;
  };

  return (
    <div className="relative size-full overflow-hidden rounded-[24px] bg-[#0F172A]">
      <video
        ref={videoRef}
        src="/assets/commercial-testimonial-mock.mp4"
        poster="/assets/figma-commercial-testimonial-video.png"
        className="absolute inset-0 size-full object-cover"
        loop
        muted
        playsInline
        onTimeUpdate={(event) => setCurrentTime(event.currentTarget.currentTime)}
        onLoadedMetadata={(event) => setDuration(event.currentTarget.duration)}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/10 to-slate-900/70" />
      <span className="absolute left-[22px] top-[22px] rounded-lg bg-[#2A7AE2] px-3 py-2 text-[12px] font-bold leading-normal text-white">VIDEO TESTIMONIAL</span>
      <button
        type="button"
        className="absolute right-[22px] top-[22px] z-10 flex h-8 items-center rounded-full border border-white/30 bg-[rgba(15,23,42,0.68)] px-3 text-[12px] font-semibold text-white backdrop-blur-[6px] transition-colors hover:bg-[#2A7AE2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        aria-label={`Return to written testimonial from ${name}`}
        onClick={(event) => {
          event.stopPropagation();
          onBack();
        }}
      >
        ← Review
      </button>
      {!playing ? (
        <span className="pointer-events-none absolute left-1/2 top-1/2 flex size-[84px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-[#2A7AE2] to-[#155ED1] shadow-[0_20px_25px_rgba(42,122,226,0.45)]">
          <img src="/assets/figma-commercial-play.svg" alt="" className="size-[48.24px]" aria-hidden="true" />
        </span>
      ) : null}
      <div className="pointer-events-none absolute bottom-[18.86px] left-[22px] right-[22px] rounded-[16px] bg-[rgba(15,23,42,0.72)] px-5 py-[18px] text-center text-white backdrop-blur-[6px] xl:flex xl:items-end xl:justify-between xl:text-left">
        <span>
          <strong className="block text-[16px] font-bold leading-normal">{name}</strong>
          <span className="mt-1 block text-[13px] font-normal leading-normal text-[#CBD5E1]">{role}</span>
        </span>
        <span className="hidden whitespace-nowrap text-[13px] font-normal text-[#CBD5E1] xl:block">{formatTime(Math.max(0, duration - currentTime))}</span>
      </div>
    </div>
  );
}

function QuoteCard({ side }: { side: 'left' | 'center' | 'right' }) {
  const [flipped, setFlipped] = useState(false);
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isRight = side === 'right';
  const isCenter = side === 'center';
  const desktopName = isRight || isCenter ? 'James T.' : 'Maria R.';
  const desktopRole = isRight || isCenter ? 'General Manager · Hampton Inn, Frisco TX' : 'Owner · The Corner Café, Plano TX';
  const desktopInitials = isRight || isCenter ? 'JT' : 'MR';
  const desktopQuote = isRight || isCenter ? jamesDesktopQuote : mariaDesktopQuote;

  useEffect(() => {
    if (!flipped) {
      videoRef.current?.pause();
      setPlaying(false);
    }
  }, [flipped]);

  const toggleCard = () => {
    if (!flipped) {
      setFlipped(true);
      return;
    }

    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      void video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  const showWrittenTestimonial = () => {
    const video = videoRef.current;
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
    setPlaying(false);
    setFlipped(false);
  };

  return (
    <div
      className="group h-[437px] w-full shrink-0 snap-center cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2A7AE2] xl:h-[381px] xl:w-auto xl:min-w-0 xl:self-center"
      style={{ perspective: '1200px' }}
      role="button"
      tabIndex={0}
      aria-label={`${!flipped ? 'Show video testimonial from' : playing ? 'Pause video testimonial from' : 'Play video testimonial from'} ${desktopName}`}
      aria-pressed={flipped}
      onClick={toggleCard}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          toggleCard();
        }
      }}
    >
      <div className="relative size-full transition-transform duration-700 ease-[cubic-bezier(0.2,0.75,0.25,1)]" style={{ transformStyle: 'preserve-3d', transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}>
        <article className="absolute inset-0 flex flex-col gap-[22px] overflow-hidden rounded-[24px] border border-[rgba(148,163,184,0.25)] bg-white/[0.82] p-[33px] shadow-[0_18px_50px_rgba(15,23,42,0.08)]" style={{ backfaceVisibility: 'hidden' }}>
          <p className="text-[16px] font-normal leading-normal tracking-[2.88px] text-[#F59E0B]">★★★★★</p>
          <blockquote className="text-[16px] font-normal italic leading-7 text-[#334155] xl:h-[168px] xl:whitespace-pre-line xl:text-[#2A3B4B]">
            <span className="xl:hidden">{mariaQuote}</span>
            <span className="hidden xl:inline">{desktopQuote}</span>
          </blockquote>
          <div className="flex items-center gap-[14px] border-t border-[rgba(148,163,184,0.25)] pt-[31px]">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#2A7AE2] to-[#155ED1] text-[16px] font-bold text-white">
              <span className="xl:hidden">MR</span><span className="hidden xl:inline">{desktopInitials}</span>
            </span>
            <span className="min-w-0">
              <strong className="block text-[16px] font-bold leading-normal text-[#0F172A] xl:text-[#042330]">
                <span className="xl:hidden">Maria R.</span><span className="hidden xl:inline">{desktopName}</span>
              </strong>
              <span className="mt-1 block text-[13px] font-normal leading-normal text-[#64748B] xl:text-[#3F4E5C]">
                <span className="xl:hidden">Owner · The Corner Café, Plano TX</span><span className="hidden xl:inline">{desktopRole}</span>
              </span>
            </span>
          </div>
          <span className="absolute bottom-4 right-5 text-[11px] font-semibold text-[#2A7AE2] opacity-0 transition-opacity group-hover:opacity-100">CLICK FOR VIDEO</span>
        </article>
        <div className="absolute inset-0" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
          <MockVideoFace name={desktopName} role={desktopRole} playing={playing} videoRef={videoRef} onBack={showWrittenTestimonial} />
        </div>
      </div>
    </div>
  );
}

export function CommercialTestimonials() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const goToSlide = (index: number) => {
    const nextIndex = Math.max(0, Math.min(2, index));
    const carousel = carouselRef.current;
    const slide = carousel?.children[nextIndex] as HTMLElement | undefined;
    if (!carousel || !slide) return;
    carousel.scrollTo({ left: slide.offsetLeft - 20, behavior: 'smooth' });
    setActiveSlide(nextIndex);
  };

  return (
    <section className="relative h-[1222px] overflow-hidden bg-[#F6FAFF] xl:h-[912px]" aria-labelledby="commercial-testimonials-title">
      <header className="absolute left-1/2 top-[49.08px] flex w-[304px] -translate-x-1/2 flex-col items-center gap-[15px] pb-[9.3px] text-center xl:top-[72px] xl:w-[1280px]">
        <h2 id="commercial-testimonials-title" className="w-full text-[32px] font-bold leading-[1.6] text-[#090A0A] xl:w-[1008px] xl:text-[42px] xl:leading-[1.4]">Don&apos;t take our word for it</h2>
        <p className="w-full text-[20px] font-normal leading-[32.5px] tracking-[-0.4492px] text-[#2A3B4B] xl:w-[672px]">Real business owners. Real emergencies. Real results.</p>
      </header>

      <div className="absolute left-5 top-[253.08px] flex w-[352px] flex-col items-center overflow-hidden rounded-[28px] bg-white p-4 shadow-[0_4px_18px_rgba(10,22,40,0.08)] xl:hidden">
        <div className="flex w-full flex-col gap-[23px]">
          {mobileStats.map(([icon, value, label], index) => (
            <div key={value}>
              <div className="flex min-h-[60px] items-center gap-[18px]">
                <img src={icon} alt="" className="size-10" aria-hidden="true" />
                <span>
                  <strong className="block text-[30px] font-bold leading-9 tracking-[0.3955px] text-[#090A0A]">{value}</strong>
                  <span className="mt-1 block text-[14px] font-normal leading-5 tracking-[-0.1504px] text-[#090A0A]">{label}</span>
                </span>
              </div>
              {index < mobileStats.length - 1 ? <div className="mt-[23px] h-px w-full bg-[#D9DEE5]" /> : null}
            </div>
          ))}
        </div>
      </div>

      <div className="absolute left-20 top-[218.3px] hidden h-[155px] w-[1280px] grid-cols-4 overflow-hidden rounded-[24px] border border-[rgba(148,163,184,0.25)] bg-white/[0.78] shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-lg xl:grid">
        {desktopStats.map(([value, title, detail], index) => (
          <div key={value} className={`flex flex-col items-center gap-1.5 px-[22px] py-[30px] text-center ${index < desktopStats.length - 1 ? 'border-r border-[rgba(148,163,184,0.2)]' : ''}`}>
            <strong className="text-[44px] font-bold leading-[44px] tracking-[-2.2px] text-[#0066CC]">{value}</strong>
            <span className="pt-1 text-[16px] font-bold leading-normal text-[#042330]">{title}</span>
            <span className="text-[13.3px] font-normal leading-normal text-[#3F4E5C]">{detail}</span>
          </div>
        ))}
      </div>

      <div
        ref={carouselRef}
        className="absolute left-0 top-[712px] flex w-full snap-x snap-mandatory gap-4 overflow-x-auto px-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden xl:left-1/2 xl:top-[403.3px] xl:grid xl:w-[1278px] xl:-translate-x-1/2 xl:grid-cols-[397.3px_435.4px_397.3px] xl:gap-6 xl:overflow-visible xl:px-0"
        onScroll={(event) => {
          if (window.innerWidth >= 1280) return;
          const carousel = event.currentTarget;
          const slides = Array.from(carousel.children) as HTMLElement[];
          const nearest = slides.reduce((best, slide, index) => {
            const distance = Math.abs(slide.offsetLeft - 20 - carousel.scrollLeft);
            return distance < best.distance ? { index, distance } : best;
          }, { index: 0, distance: Number.POSITIVE_INFINITY });
          setActiveSlide(nearest.index);
        }}
      >
        <QuoteCard side="left" />
        <QuoteCard side="center" />
        <QuoteCard side="right" />
      </div>

      <div className="absolute left-1/2 top-[1168px] flex -translate-x-1/2 items-center gap-4 xl:hidden" aria-label="Testimonial carousel controls">
        <button
          type="button"
          onClick={() => goToSlide(activeSlide - 1)}
          disabled={activeSlide === 0}
          className="flex size-9 items-center justify-center rounded-full border border-[#C9D9EB] bg-white text-[20px] text-[#0066CC] shadow-sm transition disabled:cursor-not-allowed disabled:opacity-35"
          aria-label="Previous testimonial"
        >
          ‹
        </button>
        <div className="flex items-center gap-2">
          {[0, 1, 2].map((index) => (
            <button
              key={index}
              type="button"
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${activeSlide === index ? 'w-6 bg-[#0066CC]' : 'w-2 bg-[#B8C9DC]'}`}
              aria-label={`Go to testimonial ${index + 1}`}
              aria-current={activeSlide === index ? 'true' : undefined}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => goToSlide(activeSlide + 1)}
          disabled={activeSlide === 2}
          className="flex size-9 items-center justify-center rounded-full border border-[#C9D9EB] bg-white text-[20px] text-[#0066CC] shadow-sm transition disabled:cursor-not-allowed disabled:opacity-35"
          aria-label="Next testimonial"
        >
          ›
        </button>
      </div>
    </section>
  );
}
