import clsx from 'clsx';
import { useGSAP } from '@gsap/react';
import { Container } from '../ui/container';
import { heroAnimations } from './animations';

function Hero() {
  useGSAP(() => {
    heroAnimations();
  }, []);

  const words = [
    {
      word: 'backend',
      color:
        '**:bg-clip-text **:text-transparent **:bg-linear-to-b **:from-lime-400 **:to-lime-600',
    },
    {
      word: 'frontend',
      color:
        '**:bg-clip-text *:text-transparent **:bg-linear-to-b **:from-sky-400 **:to-sky-600',
    },
    {
      word: 'creative',
      color:
        '**:bg-clip-text *:text-transparent **:bg-linear-to-b **:from-yellow-400 **:to-yellow-600',
    },
  ];

  return (
    <section id='hero' className='bg-linear-to-br from-background to-primary/5'>
      <Container className='min-h-screen flex items-center justify-center'>
        <h1
          className={clsx(
            'flex flex-col justify-center items-center h-full',
            'font-[Anton] uppercase leading-none gap-2',
            'text-[clamp(4rem,12vw,12rem)]',
          )}
        >
          <span className='hero-joao'>João</span>
          <div className='relative w-full overflow-hidden text-center'>
            <span aria-hidden className='invisible line-clamp-1'>
              Hello, how are you?
            </span>

            {words.map(item => {
              return (
                <p
                  key={item.word}
                  className={clsx(
                    'hero-rotate-text absolute text-center',
                    'inset-x-0 top-0 invisible',
                    item.color,
                  )}
                >
                  {item.word}
                </p>
              );
            })}
          </div>

          <span className='hero-dev'>Developer</span>
        </h1>
      </Container>
    </section>
  );
}

export { Hero };
