import clsx from 'clsx';
import { useTranslation } from 'react-i18next';

function Resume() {
  const { t } = useTranslation();

  return (
    <section
      id='resume'
      className={clsx(
        'relative text-white p-20',
        'bg-[url(https://placehold.co/1920x1080)]',
        'bg-fixed bg-cover bg-center bg-no-repeat',
      )}
    >
      <div aria-hidden className='absolute inset-0 bg-black/40' />

      <div className='relative flex flex-col justify-center items-center'>
        <h1 className='text-3xl font-semibold mb-7 uppercase'>
          {t('resume.title')}
        </h1>

        <a
          href='/resume2025.pdf'
          aria-label={t('resume.button-aria-label')}
          target='_blank'
          className={clsx(
            'px-5 py-2 border-y border-white/0 bg-white/27 duration-300',
            'transition-[background-color,letter-spacing,border-color]',
            'hover:tracking-wider hover:border-white hover:bg-transparent',
          )}
        >
          {t('resume.button-text')}
        </a>
      </div>
    </section>
  );
}

export { Resume };
