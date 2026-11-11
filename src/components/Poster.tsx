import type { ReactNode } from 'react';
import type { Palette, Project } from '../data/portfolio';

/**
 * Generated "key art" for thumbnails — layered gradients, light falloff and a motif.
 * No stock imagery: every card is art-directed from its palette.
 */
export function PosterBackdrop({ palette, children, className = '' }: { palette: Palette; children?: ReactNode; className?: string }) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden ${className}`}
      style={{
        background: `radial-gradient(120% 90% at 85% 10%, ${palette.via} 0%, transparent 60%),
          radial-gradient(90% 80% at 0% 100%, ${palette.from} 0%, transparent 70%),
          linear-gradient(160deg, ${palette.from} 0%, ${palette.to} 100%)`,
      }}
    >
      <div
        aria-hidden
        className="absolute -right-1/4 -top-1/3 h-[140%] w-[70%] rotate-[18deg] opacity-40 blur-2xl"
        style={{ background: `linear-gradient(90deg, transparent, ${palette.accent}55, transparent)` }}
      />
      <div aria-hidden className="absolute inset-0 opacity-[0.18] [background-image:repeating-linear-gradient(0deg,rgba(255,255,255,0.06)_0px,rgba(255,255,255,0.06)_1px,transparent_1px,transparent_4px)]" />
      {children}
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
    </div>
  );
}

/** Motif illustrations for each Original, built from the project's own architecture. */
export function ProjectArt({ project, className = '' }: { project: Project; className?: string }) {
  const a = project.palette.accent;
  return (
    <PosterBackdrop palette={project.palette} className={className}>
      <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full" aria-hidden>
        <defs>
          <radialGradient id={`g-${project.id}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={a} stopOpacity="0.55" />
            <stop offset="100%" stopColor={a} stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="290" cy="120" r="130" fill={`url(#g-${project.id})`} />
        {project.motif === 'resume' && (
          <g transform="translate(226 36)" fill="none" stroke={a} strokeOpacity="0.85">
            <rect x="0" y="0" width="118" height="154" rx="10" strokeWidth="2" />
            <circle cx="28" cy="28" r="12" strokeWidth="1.8" strokeOpacity="0.7" />
            <line x1="50" x2="96" y1="22" y2="22" strokeWidth="3" strokeLinecap="round" strokeOpacity="0.8" />
            <line x1="50" x2="82" y1="34" y2="34" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.45" />
            {[0, 1, 2, 3].map((i) => (
              <line key={i} x1="18" x2={i % 2 ? 84 : 100} y1={62 + i * 16} y2={62 + i * 16} strokeWidth="2.5" strokeLinecap="round" strokeOpacity={0.35 + i * 0.12} />
            ))}
            <line x1="-10" x2="128" y1="108" y2="108" strokeWidth="1.5" strokeDasharray="6 4" strokeOpacity="0.8" />
            <path d="M98 134 l8 -14 l8 14 m-22 -7 h28" strokeWidth="1.8" strokeLinecap="round" strokeOpacity="0.9" />
          </g>
        )}
        {project.motif === 'medical' && (
          <g fill="none" stroke={a}>
            <rect x="208" y="42" width="136" height="136" rx="22" strokeWidth="2" strokeOpacity="0.8" />
            <path d="M276 74 v72 M240 110 h72" strokeWidth="10" strokeLinecap="round" strokeOpacity="0.28" />
            <path d="M276 74 v72 M240 110 h72" strokeWidth="2.5" strokeLinecap="round" strokeOpacity="0.9" />
            <path
              d="M170 214 h52 l14 -24 l16 42 l16 -32 l12 14 h92"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeOpacity="0.85"
            />
            <circle cx="252" cy="232" r="4" fill={a} fillOpacity="0.9" />
          </g>
        )}
        {project.motif === 'network' && (
          <g fill="none" stroke={a}>
            <line x1="210" y1="84" x2="290" y2="54" strokeWidth="1.6" strokeOpacity="0.45" />
            <line x1="290" y1="54" x2="352" y2="104" strokeWidth="1.6" strokeOpacity="0.45" />
            <line x1="210" y1="84" x2="278" y2="132" strokeWidth="2" strokeOpacity="0.7" />
            <line x1="352" y1="104" x2="278" y2="132" strokeWidth="2" strokeOpacity="0.7" />
            <line x1="278" y1="132" x2="228" y2="194" strokeWidth="1.6" strokeOpacity="0.55" />
            <line x1="278" y1="132" x2="342" y2="188" strokeWidth="1.6" strokeOpacity="0.55" />
            {[
              { x: 210, y: 84, r: 12, fill: false },
              { x: 290, y: 54, r: 10, fill: true },
              { x: 352, y: 104, r: 12, fill: false },
              { x: 278, y: 132, r: 18, fill: true },
              { x: 228, y: 194, r: 11, fill: false },
              { x: 342, y: 188, r: 14, fill: false },
            ].map((n, idx) => (
              <circle
                key={idx}
                cx={n.x}
                cy={n.y}
                r={n.r}
                strokeWidth="2"
                strokeOpacity="0.85"
                fill={n.fill ? a : 'none'}
                fillOpacity={n.fill ? '0.25' : undefined}
              />
            ))}
          </g>
        )}
      </svg>
    </PosterBackdrop>
  );
}

/** Small fictional platform mark used in the nav and on cards. */
export function SeriesMark({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 ${className}`}>
      <svg viewBox="0 0 24 32" className="h-[1.1em] w-auto" aria-hidden>
        <path d="M18 6c-1.8-1.8-4-2.6-6.5-2.6C7.6 3.4 5 5.6 5 9c0 7.6 14 4.6 14 11.6 0 3-2.8 5-6.4 5-3 0-5.4-1.2-7.2-3" fill="none" stroke="#e5132b" strokeWidth="4" strokeLinecap="round" />
      </svg>
      <span className="font-sans text-[0.62em] font-bold tracking-[0.36em] text-mist">SERIES</span>
    </span>
  );
}
