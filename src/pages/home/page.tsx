// #region Imports

import { Link } from 'react-router-dom';

import { GithubLogo, Question, TextHOne, TextHTwo, Wrench } from '@phosphor-icons/react';

import { BlackoutBackground } from '@/assets/blackout';

import { RootLayout } from '@/layouts/root-layout';

import { useLanguage } from '@/ui/components/language/language-provider';
import { Button, buttonVariants } from '@/ui/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/ui/components/ui/card';

import { toolsContent } from '@/_data/tools';
import { HOME_LANGUAGES, TOOLS_LANGUAGES } from '@/_languages';

// #endregion

/**
 * Renders the home page component.
 *
 * @return {JSX.Element} The rendered home page component.
 */
export function HomePage(): JSX.Element {
  const { translate } = useLanguage();

  /**
   * A function to handle the start action.
   */
  function handleStart() {
    document.getElementById('tools')?.scrollIntoView({ block: 'center', behavior: 'smooth' });
  }

  return (
    <RootLayout className="p-12">
      {/* Header */}
      <section className="relative container flex flex-col items-center gap-6 px-16 py-64 border overflow-hidden rounded-t-2xl">
        <TextHOne size={32} className="absolute top-4 left-4" />
        <hgroup className="font-sora text-center flex flex-col z-10">
          <h1 className="text-3xl font-medium leading-[40px]">{translate('front_tools', HOME_LANGUAGES)}</h1>
          <h2 className="text-3xl font-medium leading-[40px] text-kamome-gray-600 dark:text-kamome-gray-300">
            {translate('all_in_one_place', HOME_LANGUAGES)}
          </h2>
        </hgroup>
        <div className="flex items-center gap-4">
          <Button onClick={handleStart} variant="primary">{translate('btn_start', HOME_LANGUAGES)}</Button>
          <Link to="https://github.com/K4mome/atelier" target="_blank">
            <Button variant="outline">
              <GithubLogo size={20} /> GitHub
            </Button>
          </Link>
        </div>
        <BlackoutBackground className="top-0" />
      </section>
      {/* Sub Headers */}
      <section className="relative container flex flex-col gap-16 px-24 py-32 border border-t-0 overflow-hidden">
        <TextHTwo size={32} className="absolute top-4 left-4" />
        <div className="flex flex-col items-start">
          <h2 className="font-sora text-2xl">{translate('rack_your_brain', HOME_LANGUAGES)}</h2>
        </div>
        <div className="flex flex-col items-end">
          <h2 className="font-sora text-2xl">{translate('all_that_tools', HOME_LANGUAGES)}</h2>
        </div>
        <img src="/dashed-circle.svg" className="absolute bottom-[55%] right-[5%] opacity-30 pointer-events-none" alt="Dashed Square" />
        <img src="/dashed-circle.svg" className="absolute top-[55%] left-[5%] opacity-30 pointer-events-none" alt="Dashed Square" />
      </section>
      {/* Explanations */}
      <section className="relative container flex flex-col gap-8 px-16 py-32 border border-y-0 overflow-hidden">
        <Question size={32} className="absolute top-4 left-4" />
        <Card className="ml-auto mr-[10%]">
          <CardHeader>
            <CardTitle>{translate('what_is_atelier', HOME_LANGUAGES)}</CardTitle>
            <CardDescription>{translate('what_is_atelier_description', HOME_LANGUAGES)}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-justify">{translate('what_is_atelier_content', HOME_LANGUAGES)}</p>
          </CardContent>
        </Card>
        <Card className="ml-auto mr-[25%]">
          <CardHeader>
            <CardTitle>{translate('how_it_works', HOME_LANGUAGES)}</CardTitle>
            <CardDescription>{translate('how_it_works_description', HOME_LANGUAGES)}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-justify">{translate('how_it_works_content', HOME_LANGUAGES)}</p>
          </CardContent>
        </Card>
        <Card className="ml-auto mr-[40%]">
          <CardHeader>
            <CardTitle>{translate('dont_find_a_feature', HOME_LANGUAGES)}</CardTitle>
            <CardDescription>{translate('dont_find_a_feature_description', HOME_LANGUAGES)}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-justify">{translate('dont_find_a_feature_content', HOME_LANGUAGES)}</p>
          </CardContent>
        </Card>
        <Card className="ml-auto mr-[55%]">
          <CardHeader>
            <CardTitle>{translate('liked_the_project', HOME_LANGUAGES)}</CardTitle>
            <CardDescription>{translate('liked_the_project_description', HOME_LANGUAGES)}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-justify">{translate('liked_the_project_content', HOME_LANGUAGES)}</p>
          </CardContent>
        </Card>
        <img
          src="/dashed-square.svg"
          className="absolute top-[-16%] left-[-15%] rotate-45 opacity-30 pointer-events-none"
          alt="Dashed Square"
        />
        <img
          src="/dashed-square.svg"
          className="absolute bottom-[-16%] right-[-15%] rotate-45 opacity-30 pointer-events-none"
          alt="Dashed Square"
        />
      </section>
      {/* Tools */}
      <section
        id="tools"
        className="relative container flex flex-col items-center gap-8 py-32 border overflow-hidden rounded-b-2xl"
      >
        <h2 className="text-4xl font-sora text-center">{translate('tools', HOME_LANGUAGES)}</h2>
        <div className="flex flex-wrap items-center gap-4">
          <Wrench className="absolute top-4 left-4" size={32} />
          {toolsContent.map((tool: IToolSimplified, index: number) => (
            <Link key={index} to={tool.href} className={buttonVariants({ variant: 'outline' })}>
              {translate(tool.title, TOOLS_LANGUAGES)}
            </Link>
          ))}
        </div>
        <img src="/dashed-square.svg" className="absolute top-[50%] right-[-10%] opacity-30 pointer-events-none" alt="Dashed Square" />
        <img src="/dashed-circle.svg" className="absolute bottom-[50%] left-[-10%] opacity-30 pointer-events-none" alt="Dashed Square" />
      </section>
    </RootLayout>
  );
}
