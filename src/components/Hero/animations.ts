import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';

function heroAnimations() {
  const textTl = gsap.timeline({
    defaults: {
      opacity: 0,
      duration: 1,
      ease: 'elastic.out(1, 0.5)',
    },
  });

  textTl
    .from('.hero-dev', {
      yPercent: 100,
      delay: 0.4,
      scale: 0.8,
    })
    .from('.hero-joao', {
      xPercent: -100,
    });

  document.fonts.ready.then(() => {
    gsap.set('.hero-rotate-text', { autoAlpha: 1 });
    const rotatorTl = gsap.timeline({ repeat: -1, delay: 1 });
    const pause = 1.5;
    const duration = 0.5;
    const stagger = duration / 10;
    const words = gsap.utils.toArray('.hero-rotate-text');
    const splits = words.map(current =>
      SplitText.create(current as HTMLElement, {
        type: 'chars',
      }),
    );
    const firstWord = splits[0];

    splits.forEach((current, idx) => {
      if (idx) {
        gsap.set(current.chars, { yPercent: 100 });
      }

      const next = splits[idx + 1];

      rotatorTl.to(
        current.chars,
        {
          yPercent: -100,
          stagger: stagger,
          duration: duration,
          ease: 'power1.inOut',
        },
        '+=' + pause,
      );

      if (next) {
        rotatorTl.to(
          next.chars,
          {
            yPercent: 0,
            duration: duration,
            stagger: stagger,
          },
          '<' + 0.12,
        );
      }
    });

    rotatorTl.fromTo(
      firstWord.chars,
      {
        yPercent: 100,
      },
      {
        yPercent: 0,
        duration: duration,
        stagger: stagger,
        immediateRender: false,
      },
      '<' + 0.12,
    );
  });
}

export { heroAnimations };
