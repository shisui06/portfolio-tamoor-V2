# ESLint Fixes for Build Failure

## Files to Fix

### src/app/(main)/projects/[slug]/page.tsx
- [ ] Fix unescaped apostrophe in "D&eacute;tails du projet" (line 56)

### src/app/layout.tsx
- [ ] Remove unused imports: Geist, Geist_Mono, Bebas_Neue, cinzel

### src/components/AboutSection.tsx
- [ ] Remove unused import: TimelineEntry

### src/components/Footer.tsx
- [ ] Fix unescaped apostrophe in "Tous droits r&eacute;serv&eacute;s" (line 26)

### src/components/ProjectCard.tsx
- [ ] Remove unused imports: useRouter, slug

### src/components/custom/LogoCarousel.tsx
- [ ] Replace all <img> tags with Next.js <Image> components (multiple instances)

### src/components/navbar.tsx
- [ ] Remove unused import: useRouter

### src/components/ui/text-generate-effect.tsx
- [ ] Fix useEffect dependency warning by adding missing dependencies: 'animate', 'duration', 'filter'

### src/components/ui/timeline-demo.tsx
- [ ] Fix multiple unescaped apostrophes in timeline content

### src/components/ui/tracing-beam.tsx
- [ ] Remove unused imports: useTransform, useSpring, scrollYProgress, svgHeight

## Verification
- [ ] Run `pnpm run build` to verify all errors are resolved
