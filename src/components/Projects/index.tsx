import clsx from 'clsx';
import { Container } from '../ui/container';
import { Trans, useTranslation } from 'react-i18next';
import { IconArrowUpRight, IconBrandGithub } from '@tabler/icons-react';

function Projects() {
  const { t } = useTranslation();

  const projects = [
    {
      title: t('projects.thoth-title'),
      description: t('projects.thoth-description'),
      stack: ['Typescript', 'React', 'Vite', 'HTML', 'CSS'],
      coverUrl: '/covers/thoth-pomodoro.png',
      url: 'https://github.com/Joao-sl/Thoth-Pomodoro',
    },
    {
      title: t('projects.recipes-api-title'),
      description: t('projects.recipes-api-description'),
      stack: ['Python', 'Django', 'DRF', 'JWT', 'SQLite'],
      coverUrl: '/covers/recipes-backend.png',
      url: 'https://github.com/Joao-sl/RecipesAPI',
    },
    {
      title: t('projects.recipes-frontend-title'),
      description: (
        <Trans
          i18nKey={'projects.recipes-frontend-description'}
          components={{
            1: (
              <a
                href='https://github.com/Joao-sl/RecipesAPI'
                rel='noopener nofollow'
                target='_blank'
                className='text-primary transition hover:underline'
              >
                API de receitas
              </a>
            ),
          }}
        />
      ),
      stack: ['Typescript', 'React', 'NextJS', 'JWT', 'Tailwind'],
      coverUrl: '/covers/recipes-frontend.png',
      url: 'https://github.com/Joao-sl/Recipes-Frontend',
    },
  ];

  return (
    <section id='projects' className='h-screen'>
      <Container className='space-y-18'>
        <header className='text-center space-y-4'>
          <h2 className='text-2xl md:text-3xl font-semibold uppercase'>
            {t('projects.title')}
          </h2>
          <p className='text-muted-foreground max-w-140 mx-auto'>
            {t('projects.description')}
          </p>
        </header>

        <div className='space-y-18 md:space-y-27'>
          {projects.map((project, idx) => {
            return (
              <article
                key={project.title}
                className={clsx(
                  'flex flex-col items-center justify-center',
                  'border-b gap-6 pb-18 lg:pb-27 lg:flex-row',
                )}
              >
                <div
                  className={clsx(
                    idx % 2 === 0 ? 'lg:order-0' : 'lg:order-1',
                    'max-w-[516px] px-4',
                  )}
                >
                  <a
                    href={project.url}
                    rel='noopener nofollow'
                    target='_blank'
                    aria-label='Link para o github do projeto.'
                  >
                    <img
                      src={project.coverUrl}
                      alt={`Um mockup com um print de alguma página do ${project.title}`}
                      className={clsx(
                        'drop-shadow-xl transition hover:scale-103',
                        'hover:drop-shadow-2xl sm:hover:-rotate-2',
                      )}
                    />
                  </a>
                </div>

                <div className='flex flex-col max-w-140 space-y-3'>
                  <h3 className='font-semibold text-xl group'>
                    <a
                      href={project.url}
                      rel='noopener nofollow'
                      target='_blank'
                      className='flex items-center gap-0.5 transition group-hover:text-primary'
                    >
                      {project.title}
                      <IconArrowUpRight
                        size={18}
                        strokeWidth={1.8}
                        aria-hidden
                        className={clsx(
                          'transition group-hover:-translate-y-0.5',
                          'group-hover:translate-x-0.5',
                        )}
                      />
                    </a>
                  </h3>
                  <p className='text-muted-foreground'>{project.description}</p>

                  <p className='sr-only'>{t('projects.stack-sr-only')}</p>
                  <ul className='flex flex-wrap gap-3 text-xs font-semibold'>
                    {project.stack.map(item => {
                      return (
                        <li
                          key={item}
                          className='bg-primary/10 text-primary py-2 px-3 rounded'
                        >
                          {item}
                        </li>
                      );
                    })}
                  </ul>

                  <a
                    href={project.url}
                    rel='noopener nofollow'
                    target='_blank'
                    aria-hidden
                    className='mt-2 w-fit transition hover:text-primary'
                  >
                    <IconBrandGithub />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        <div className='flex justify-center'>
          <a
            href='https://github.com/Joao-sl'
            rel='noopener nofollow'
            target='_blank'
            className={clsx(
              'flex items-center gap-1 bg-primary transition',
              'py-3 px-6 rounded-md font-medium text-sm text-white',
              'group hover:scale-105 hover:shadow-2xl',
            )}
          >
            {t('projects.btn-more')}
            <IconArrowUpRight
              aria-hidden
              size={16}
              className={clsx(
                'transition group-hover:translate-x-0.5',
                'group-hover:-translate-y-0.5',
              )}
            />
          </a>
        </div>
      </Container>
    </section>
  );
}

export { Projects };
