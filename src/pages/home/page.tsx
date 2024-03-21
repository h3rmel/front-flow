// #region Imports

import { Link } from 'react-router-dom';

import { GithubLogo } from '@phosphor-icons/react';

import { toolsContent } from '@/_data/tools';
import { HOME_LANGUAGES, TOOLS_LANGUAGES } from '@/_languages';

import { RootLayout } from '@/layouts/root-layout';

import { useLanguage } from '@/ui/components/language/language-provider';
import { Button, buttonVariants } from '@/ui/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/ui/components/ui/card';

// #endregion

export function HomePage() {
  const { translate } = useLanguage();

  function handleStart() {
    document.getElementById('tools')?.scrollIntoView({ block: 'center', behavior: 'smooth' });
  }

  return (
    <RootLayout>
      <section className="relative container flex flex-col items-center justify-center gap-12 p-16 border rounded-t-2xl">
        <hgroup className="text-center font-sora">
          <h1 className="text-4xl leading-[48px] mb-1">{translate('front_tools', HOME_LANGUAGES)}</h1>
          <h2 className="text-xl font-light">{translate('rack_your_brain', HOME_LANGUAGES)}</h2>
        </hgroup>
        <div className="flex items-center gap-4">
          <Button onClick={handleStart}>{translate('btn_start', HOME_LANGUAGES)}</Button>
          <Link to="https://github.com/K4mome/atelier" target="_blank">
            <Button variant="secondary">
              <GithubLogo size={20} /> GitHub
            </Button>
          </Link>
        </div>
      </section>
      {/* Explanations */}
      <section className="relative container flex flex-col gap-8 p-16 border border-y-0">
        <Card className="mr-auto ml-[20%]">
          <CardHeader>
            <CardTitle>{translate('what_is_atelier', HOME_LANGUAGES)}</CardTitle>
            <CardDescription>{translate('what_is_atelier_description', HOME_LANGUAGES)}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-justify">{translate('what_is_atelier_content', HOME_LANGUAGES)}</p>
          </CardContent>
        </Card>
        <Card className="ml-auto mr-[20%]">
          <CardHeader>
            <CardTitle>{translate('how_it_works', HOME_LANGUAGES)}</CardTitle>
            <CardDescription>{translate('how_it_works_description', HOME_LANGUAGES)}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-justify">{translate('how_it_works_content', HOME_LANGUAGES)}</p>
          </CardContent>
        </Card>
        <Card className="mr-auto ml-[20%]">
          <CardHeader>
            <CardTitle>{translate('dont_find_a_feature', HOME_LANGUAGES)}</CardTitle>
            <CardDescription>{translate('dont_find_a_feature_description', HOME_LANGUAGES)}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-justify">{translate('dont_find_a_feature_content', HOME_LANGUAGES)}</p>
          </CardContent>
        </Card>
        <Card className="ml-auto mr-[20%]">
          <CardHeader>
            <CardTitle>{translate('liked_the_project', HOME_LANGUAGES)}</CardTitle>
            <CardDescription>{translate('liked_the_project_description', HOME_LANGUAGES)}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-justify">{translate('liked_the_project_content', HOME_LANGUAGES)}</p>
          </CardContent>
        </Card>
      </section>
      {/* Tools */}
      <section id="tools" className="relative container flex flex-col gap-8 p-16 border rounded-b-2xl">
        <h2 className="text-3xl font-sora text-center">{translate('tools', HOME_LANGUAGES)}</h2>
        <div className="flex flex-wrap items-center gap-4">
          {toolsContent.map((tool: IToolSimplified, index: number) => (
            <Link key={index} to={tool.href} className={buttonVariants({ variant: 'outline' })}>
              {translate(tool.title, TOOLS_LANGUAGES)}
            </Link>
          ))}
        </div>
      </section>
    </RootLayout>
  );
}
