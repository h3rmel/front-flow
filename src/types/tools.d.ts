interface ITool {
  title: string;
  href: string;
  description: string;
}

interface IToolSimplified extends Pick<ITool, 'title' | 'href'> {}
