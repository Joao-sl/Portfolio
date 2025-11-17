import clsx from 'clsx';
import { Container } from '../ui/container';
import { useTranslation } from 'react-i18next';
import { IconAt, IconBrandLinkedin, IconMail } from '@tabler/icons-react';

function Contact() {
  const { t } = useTranslation();

  return (
    <section id='contact' className='bg-muted'>
      <Container className='flex flex-col justify-center items-center gap-5'>
        <IconAt size={50} aria-hidden />

        <header className='text-center'>
          <h3 className='text-2xl md:text-3xl font-semibold uppercase mb-5'>
            {t('contact.title')}
          </h3>
          <p className='text-muted-foreground max-w-120 mx-auto'>
            {t('contact.description')}
          </p>
        </header>

        <div className='flex items-center gap-4'>
          <a
            href='mailto:joaosl.dev@gmail.com'
            className={clsx(
              'flex items-center gap-1 bg-primary py-3 px-6 transition',
              ' font-medium text-sm text-white rounded-md',
              'active:scale-98 hover:scale-105 hover:shadow-2xl',
            )}
          >
            <IconMail size={18} />
            E-mail
          </a>

          <a
            href='https://www.linkedin.com/in/joao-sl-dev/'
            rel='noopener nofollow'
            target='_blank'
            className={clsx(
              'flex items-center gap-1 bg-primary py-3 px-6 transition',
              ' font-medium text-sm text-white rounded-md',
              'active:scale-98 hover:scale-105 hover:shadow-2xl',
            )}
          >
            <IconBrandLinkedin size={18} />
            LinkedIn
          </a>
        </div>
      </Container>
    </section>
  );
}

export { Contact };
