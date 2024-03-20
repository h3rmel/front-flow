// #region Imports

import { Link } from "react-router-dom";

import { GithubLogo } from "@phosphor-icons/react";

import { RootLayout } from "@/layouts/root-layout";

import { Button, buttonVariants } from "@/ui/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/ui/components/ui/card";
import { toolsContent } from "@/data/tools";

// #endregion

export function Home() {
  return (
    <RootLayout>
      <section className="relative container flex flex-col items-center justify-center gap-12 p-16 border rounded-t-2xl">
        <hgroup className="text-center font-sora">
          <h1 className="text-4xl leading-[48px] mb-1">
            Ferramentas front-end em um só lugar.
          </h1>
          <h2 className="text-xl font-light">
            Desenvolva sem &ldquo;quebrar a cabeça&rdquo; com questões de UI.
          </h2>
        </hgroup>
        <div className="flex items-center gap-4">
          <Button>Começar</Button>
          <Link to="https://github.com/H3rmel/ui-atelier" target="_blank">
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
            <CardTitle>O que é o Atelier?</CardTitle>
            <CardDescription>Uma breve explicação...</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-justify">
              É um conjunto de ferramentas específicas para front-end visando
              auxiliar desenvolvedores a criar interfaces com mais facilidade e
              simplicidade no seu dia a dia.
            </p>
          </CardContent>
        </Card>
        <Card className="ml-auto mr-[20%]">
          <CardHeader>
            <CardTitle>Como funciona?</CardTitle>
            <CardDescription>Como usar a plataforma.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-justify">
              Para usar a plataforma é simples: Procure a ferramenta que desejar
              na barra de navegação (aquela do topo da tela) e clique em seu
              link para utiliza-lá!
            </p>
          </CardContent>
        </Card>
        <Card className="mr-auto ml-[20%]">
          <CardHeader>
            <CardTitle>Não achei uma funcionalidade</CardTitle>
            <CardDescription>O que fazer?</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-justify">
              Se não achar uma funcionalidade que deseja, você pode adiciona-lá
              através de um <span className="italic">pull request</span> ou
              apenas requisita-lá.
            </p>
          </CardContent>
        </Card>
        <Card className="ml-auto mr-[20%]">
          <CardHeader>
            <CardTitle>Gostei do projeto</CardTitle>
            <CardDescription>Como posso contribuir?</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-justify">
              Você pode contribuir para o projeto adicionando novas
              funcionalidades ou doando uma quantia de qualquer valor para
              ajudar a manter essa plataforma no ar.
            </p>
          </CardContent>
        </Card>
      </section>
      {/* Tools */}
      <section className="relative container flex flex-col gap-8 p-16 border rounded-b-2xl">
        <h2 className="text-3xl font-sora text-center">Ferramentas</h2>
        <div className="flex flex-wrap items-center gap-4">
          {toolsContent.map((tool: IToolSimplified, index: number) => (
            <Link
              key={index}
              to={tool.href}
              className={buttonVariants({ variant: "outline" })}
            >
              {tool.title}
            </Link>
          ))}
        </div>
      </section>
    </RootLayout>
  );
}
