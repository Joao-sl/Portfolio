import clsx from 'clsx';
import { Container } from '../ui/container';
import { useTranslation } from 'react-i18next';
import {
  IconBrandGithub,
  IconBrandGmail,
  IconBrandLinkedin,
  IconBrandVite,
  IconSquareArrowUpFilled,
} from '@tabler/icons-react';

function Footer() {
  const { t } = useTranslation();

  const iconSize = 22;
  const socials = [
    {
      value: 'GitHub',
      icon: <IconBrandGithub size={iconSize} />,
      link: 'https://github.com/Joao-sl',
      classes: 'hover:text-slate-400',
    },
    {
      value: 'Linkedin',
      icon: <IconBrandLinkedin size={iconSize} />,
      link: 'https://linkedin.com/in/joao-sl-dev',
      classes: 'hover:text-blue-600',
    },
    {
      value: 'Gmail',
      icon: <IconBrandGmail size={iconSize} />,
      link: 'mailto:joao-sl@gmail.com',
      classes: 'hover:text-red-600',
    },
  ];

  return (
    <section
      id='footer'
      className='bg-slate-800 text-white dark:bg-transparent dark:text-foreground'
    >
      <Container className='space-y-4 py-6'>
        <header className='sr-only'>
          <h3>{t('footer.title')}</h3>
        </header>

        <div className='flex flex-wrap items-center justify-between'>
          <div className='font-medium'>
            <h4>{t('footer.made-by')}</h4>
            <p className='flex items-center gap-1 text-sm text-white/50'>
              {t('footer.with')} <IconBrandVite aria-hidden size={20} />
            </p>
          </div>

          <div className='flex flex-col justify-center items-center gap-2'>
            <button
              onClick={() => scrollTo({ top: 0 })}
              className='cursor-pointer transition hover:brightness-90'
            >
              <IconSquareArrowUpFilled size={27} />
            </button>
            <p className='flex justify-center text-xs font-medium'>
              &#169; João 2025
            </p>
          </div>

          <div className='flex gap-3'>
            {socials.map(item => {
              return (
                <a
                  href={item.link}
                  key={item.value}
                  rel='noopener nofollow'
                  target='_blank'
                  aria-label={`${t('footer.socials-btn-label')} ${item.value}`}
                  className={clsx('transition', item.classes)}
                >
                  {item.icon}
                </a>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

export { Footer };
