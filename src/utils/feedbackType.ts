import * as icons from '../assets/index'

export const feedbackTypes = {
  BUG: {
    id: 1,
    title: 'Problema',
    image: {
      source: icons.bugImg,
      alt: 'Imagem de um inseto',
    },
  },
  IDEA: {
    id: 2,
    title: 'Ideias',
    image: {
      source: icons.ideaImg,
      alt: 'Imagem de uma lâmapada',
    },
  },
  OTHERS: {
    id: 3,
    title: 'Outro',
    image: {
      source: icons.thoughtImg,
      alt: 'Imagem de um balão de pensamento',
    },
  },
}
