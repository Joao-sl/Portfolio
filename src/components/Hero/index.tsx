import { IconArrowDown } from '@tabler/icons-react';
import { Container } from '../ui/container';
import { TypeWriter } from '../ui/typewriter';
import { useTranslation } from 'react-i18next';

function Hero() {
  const { t } = useTranslation();
  const typeWriterMsgs = t('hero.typewriter-msgs').split(',');

  return (
    <section
      id='hero'
      className='h-screen bg-linear-to-br from-background to-primary/5'
    >
      <Container className='relative flex flex-col items-center justify-center h-full space-y-14'>
        <h1 className='flex flex-col items-center hero-title'>
          <span className='font-normal text-xl text-muted-foreground tracking-tight'>
            {t('hero.greetings')}
          </span>
          <span className='font-bold font-[pacifico] text-[clamp(8rem,20vw,12rem)] leading-none'>
            João
          </span>
        </h1>

        <p className='sr-only'>{t('hero.typewriter-msgs')}</p>
        <TypeWriter
          as={'p'}
          typingSpeed={75}
          deletingSpeed={50}
          text={typeWriterMsgs}
          aria-hidden
          className='text-xl text-muted-foreground'
        />

        <IconArrowDown
          className='absolute bottom-1/12 animate-bounce'
          aria-hidden
        />
      </Container>
    </section>
  );
}

export { Hero };
