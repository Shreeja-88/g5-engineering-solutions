import { useLayoutEffect, type RefObject } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { registerScrollTrigger } from './registerGSAP';

type AnimationRoot = HTMLElement | null;

const isInSection = (element: Element, section: Element) =>
  element.closest('section, article, footer') === section;

export function useSiteTextAnimations(
  rootRef: RefObject<AnimationRoot>,
  routeKey: string
) {
  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    registerScrollTrigger();

    const context = gsap.context(() => {
      const animateOnScroll = (
        element: Element,
        from: gsap.TweenVars,
        to: gsap.TweenVars,
        start = 'top 88%'
      ) => {
        gsap.fromTo(
          element,
          from,
          {
            ...to,
            scrollTrigger: {
              trigger: element,
              start,
              once: true
            }
          }
        );
      };

      const hero = root.querySelector<HTMLElement>('[data-hero-reveal]');
      if (hero && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        const words = Array.from(hero.querySelectorAll('[data-hero-word]'));
        const label = hero.querySelector('[data-hero-label]');
        const copy = hero.querySelector('[data-hero-copy]');
        const actions = Array.from(hero.querySelectorAll('[data-hero-cta]'));
        const metadata = hero.querySelector('[data-hero-meta]');
        const media = hero.querySelector('[data-hero-media]');
        const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } });

        if (label) {
          timeline.fromTo(label, { autoAlpha: 0, y: 10 }, { autoAlpha: 1, y: 0, duration: 0.5 }, 0.1);
        }
        if (words.length) {
          timeline.fromTo(
            words,
            { yPercent: 120, autoAlpha: 0, filter: 'blur(6px)' },
            { yPercent: 0, autoAlpha: 1, filter: 'blur(0px)', duration: 0.85, stagger: 0.055 },
            0.18
          );
        }
        if (copy) {
          timeline.fromTo(copy, { autoAlpha: 0, y: 18 }, { autoAlpha: 1, y: 0, duration: 0.65 }, 0.8);
        }
        if (actions.length) {
          timeline.fromTo(
            actions,
            { autoAlpha: 0, y: 12 },
            { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.08 },
            0.95
          );
        }
        if (metadata) {
          timeline.fromTo(metadata, { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, duration: 0.5 }, 1.05);
        }
        if (media) {
          timeline.fromTo(media, { autoAlpha: 0, x: 18 }, { autoAlpha: 1, x: 0, duration: 0.85 }, 0.35);
        }
      }

      const sections = Array.from(root.querySelectorAll('main section, main article, footer'));
      sections.forEach((section) => {
        if (
          section.id === 'contact' ||
          section.matches('[data-hero-reveal], [data-project-card]')
        ) return;

        const headings = Array.from(section.querySelectorAll('h1, h2, h3, h4'))
          .filter((element) => isInSection(element, section));
        const labels = Array.from(
          section.querySelectorAll('.tech-label, [class*="font-mono"][class*="uppercase"]')
        ).filter((element) => isInSection(element, section) && !element.matches('h1, h2, h3, h4'));
        const paragraphs = Array.from(section.querySelectorAll('p, blockquote'))
          .filter((element) => isInSection(element, section));

        labels.forEach((element) => {
          animateOnScroll(
            element,
            { autoAlpha: 0, y: 10, letterSpacing: '0.2em' },
            { autoAlpha: 1, y: 0, letterSpacing: '0.14em', duration: 0.5, ease: 'power2.out' }
          );
        });
        headings.forEach((element) => {
          animateOnScroll(
            element,
            { autoAlpha: 0, y: 26, filter: 'blur(5px)' },
            { autoAlpha: 1, y: 0, filter: 'blur(0px)', duration: 0.85, ease: 'power3.out' }
          );
        });
        paragraphs.forEach((element) => {
          animateOnScroll(
            element,
            { autoAlpha: 0, y: 18, filter: 'blur(3px)' },
            { autoAlpha: 1, y: 0, filter: 'blur(0px)', duration: 0.65, ease: 'power2.out' }
          );
        });

        section.querySelectorAll('ul, ol').forEach((list) => {
          if (!isInSection(list, section)) return;
          const items = Array.from(list.children).filter((item) => item.tagName === 'LI');
          if (items.length) {
            gsap.fromTo(
              items,
              { autoAlpha: 0, x: -12 },
              {
                autoAlpha: 1,
                x: 0,
                duration: 0.55,
                stagger: 0.055,
                ease: 'power2.out',
                scrollTrigger: { trigger: list, start: 'top 88%', once: true }
              }
            );
          }
        });

        const textRows = Array.from(
          section.querySelectorAll<HTMLElement>('div[class*="items-start"][class*="gap"]')
        ).filter((element) =>
          isInSection(element, section) &&
          !element.querySelector('h1, h2, h3, h4, p, blockquote')
        );
        textRows.forEach((element) => {
          animateOnScroll(
            element,
            { autoAlpha: 0, x: -10 },
            { autoAlpha: 1, x: 0, duration: 0.5, ease: 'power2.out' }
          );
        });

        const counters = Array.from(section.querySelectorAll<HTMLElement>('.tabular-nums'))
          .filter((element) => isInSection(element, section));
        counters.forEach((element) => {
          const original = element.textContent?.trim() ?? '';
          const match = original.match(/^([^\d]*)([\d,]+(?:\.\d+)?)(.*)$/);
          if (!match) return;

          const [, prefix, numberText, suffix] = match;
          const target = Number(numberText.replace(/,/g, ''));
          if (!Number.isFinite(target)) return;

          const counter = { value: 0 };
          gsap.to(counter, {
            value: target,
            duration: 1.1,
            ease: 'power2.out',
            scrollTrigger: { trigger: element, start: 'top 90%', once: true },
            onUpdate: () => {
              element.textContent = `${prefix}${Math.round(counter.value).toLocaleString('en-US')}${suffix}`;
            }
          });
        });
      });

      const ungroupedHeadings = Array.from(root.querySelectorAll('main h1, main h2, main h3, main h4'))
        .filter((element) => !element.closest('section, article'));
      const ungroupedParagraphs = Array.from(root.querySelectorAll('main p'))
        .filter((element) => !element.closest('section, article'));
      ungroupedHeadings.forEach((element) => {
        animateOnScroll(
          element,
          { autoAlpha: 0, y: 26, filter: 'blur(5px)' },
          { autoAlpha: 1, y: 0, filter: 'blur(0px)', duration: 0.85, ease: 'power3.out' }
        );
      });
      ungroupedParagraphs.forEach((element) => {
        animateOnScroll(
          element,
          { autoAlpha: 0, y: 18 },
          { autoAlpha: 1, y: 0, duration: 0.65, ease: 'power2.out' }
        );
      });
    }, root);

    const refreshFrame = window.requestAnimationFrame(() => ScrollTrigger.refresh());
    let active = true;
    const refreshAfterFonts = () => {
      if (active) ScrollTrigger.refresh();
    };
    document.fonts?.ready.then(refreshAfterFonts);

    return () => {
      active = false;
      window.cancelAnimationFrame(refreshFrame);
      context.revert();
    };
  }, [rootRef, routeKey]);
}
