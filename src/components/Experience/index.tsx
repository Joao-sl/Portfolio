import clsx from 'clsx';
import { Container } from '../ui/container';
import { useTranslation } from 'react-i18next';

function Experience() {
  const { t } = useTranslation();
  const yearsStudying = new Date().getFullYear() - 2024;

  const clPath = '/icons/languages';
  const flPath = '/icons/frameworks-and-libs';
  const tlPath = '/icons/tools';

  const icons = {
    codeLangs: [
      { iconUrl: `${clPath}/python.svg`, value: 'Python' },
      { iconUrl: `${clPath}/javascript.svg`, value: 'Javascript' },
      { iconUrl: `${clPath}/typescript.svg`, value: 'Typescript' },
      { iconUrl: `${clPath}/html5.svg`, value: 'HTML5' },
      { iconUrl: `${clPath}/css3.svg`, value: 'CSS3' },
      { iconUrl: `${clPath}/sql.svg`, value: 'SQL' },
    ],
    frameworksAndLibs: [
      { iconUrl: `${flPath}/django.svg`, value: 'Django' },
      { iconUrl: `${flPath}/djangorest.svg`, value: 'DRF' },
      { iconUrl: `${flPath}/react.svg`, value: 'React' },
      { iconUrl: `${flPath}/nextjs.svg`, value: 'NextJS' },
      { iconUrl: `${flPath}/vitejs.svg`, value: 'ViteJS' },
      { iconUrl: `${flPath}/nestjs.svg`, value: 'NestJS' },
      { iconUrl: `${flPath}/tailwindcss.svg`, value: 'Tailwind' },
    ],
    tools: [
      { iconUrl: `${tlPath}/vscode.svg`, value: 'VSCode' },
      { iconUrl: `${tlPath}/github.svg`, value: 'GitHub' },
      { iconUrl: `${tlPath}/docker.svg`, value: 'Docker' },
      { iconUrl: `${tlPath}/nodejs.svg`, value: 'NodeJS' },
      { iconUrl: `${tlPath}/insomnia.svg`, value: 'Insomnia' },
      { iconUrl: `${tlPath}/json.svg`, value: 'JSON' },
    ],
  };

  const iconsCommon = {
    h3: 'font-medium border-b mb-4 pb-2',
    ul: clsx(
      'grid grid-cols-2 gap-x-6 gap-y-4',
      'sm:grid-cols-[repeat(auto-fill,minmax(178px,1fr))]',
    ),
    li: clsx(
      'flex items-center gap-2.5 py-2 px-3 cursor-default',
      'border rounded bg-muted dark:bg-transparent',
      '[&_img]:size-7 [&_span]:text-xs [&_span]:font-medium',
    ),
  };

  return (
    <section id='experience' className='min-h-[90vh]'>
      <Container className='space-y-14'>
        <header className='text-center space-y-4'>
          <h2 className='text-2xl md:text-3xl font-semibold uppercase'>
            {t('experience.title')}
          </h2>

          <p className='text-muted-foreground max-w-140 mx-auto'>
            {t('experience.description', { yearsStudying: yearsStudying })}
          </p>
        </header>

        <div className='grid grid-cols-1 gap-15 md:grid-cols-[65%_auto]'>
          <div className='space-y-7'>
            <div>
              <h3 className={iconsCommon.h3}>{t('experience.languages')}</h3>
              <ul className={iconsCommon.ul}>
                {icons.codeLangs.map(item => {
                  return (
                    <li key={item.value} className={iconsCommon.li}>
                      <img src={item.iconUrl} alt='' aria-hidden />
                      <span>{item.value}</span>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div>
              <h3 className={iconsCommon.h3}>
                {t('experience.frameworks-and-libs')}
              </h3>
              <ul className={iconsCommon.ul}>
                {icons.frameworksAndLibs.map(item => {
                  return (
                    <li key={item.value} className={iconsCommon.li}>
                      <img src={item.iconUrl} alt='' aria-hidden />
                      <span>{item.value}</span>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div>
              <h3 className={iconsCommon.h3}>{t('experience.tools')}</h3>
              <ul className={iconsCommon.ul}>
                {icons.tools.map(item => {
                  return (
                    <li key={item.value} className={iconsCommon.li}>
                      <img src={item.iconUrl} alt='' aria-hidden />
                      <span>{item.value}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div>
            <h3 className='mb-4 font-medium border-b pb-2'>
              {t('experience.exp-title')}
            </h3>
            <p>{t('experience.exp-description')}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export { Experience };
