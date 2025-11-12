import { Container } from '../ui/container';
import { useTranslation } from 'react-i18next';
import { IconApi, IconCertificate, IconCode } from '@tabler/icons-react';

function About() {
  const { t } = useTranslation();

  const overviewCards = [
    {
      icon: <IconCode className='text-blue-600 bg-blue-500/10' />,
      title: t('about.card-subtitle-1'),
      description: t('about.card-description-1'),
    },
    {
      icon: <IconApi className='text-green-600 bg-green-500/10' />,
      title: t('about.card-subtitle-2'),
      description: t('about.card-description-2'),
    },
    {
      icon: <IconCertificate className='text-yellow-600 bg-yellow-500/10' />,
      title: t('about.card-subtitle-3'),
      description: t('about.card-description-3'),
    },
  ];

  return (
    <section id='about-me' className='flex min-h-[95vh]'>
      <Container className='flex flex-col items-center justify-center gap-8 text-center'>
        <div className='space-y-5 max-w-[650px]'>
          <h1 className='text-3xl font-bold uppercase'>{t('about.title')}</h1>
          <p>{t('about.description')}</p>
          <p>{t('about.description-2')}</p>
        </div>

        <div className='border-t space-y-8 pt-8'>
          <h2 className='font-semibold text-xl uppercase'>
            {t('about.card-title')}
          </h2>

          <dl className='grid grid-cols-1 sm:grid-cols-3 gap-8'>
            {overviewCards.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className='flex flex-col gap-4 px-6 py-8 border rounded-xl'
                >
                  <span
                    aria-hidden
                    className='*:rounded-xl *:p-1.5 *:size-10 self-center '
                  >
                    {item.icon}
                  </span>

                  <dt className='text-lg font-semibold'>{item.title}</dt>
                  <dd className='text-sm max-w-60'>{item.description}</dd>
                </div>
              );
            })}
          </dl>
        </div>
      </Container>
    </section>
  );
}

export { About };
