import InWork from "./components/InWork";


const menuData = [
  {
    tittle: 'Cadastro',
    slug: 'cadastro',
    subMenu: [
      {
        tittle: 'opt1',
        slug: 'opt1',
        component: <InWork />,
      },
      {
        tittle: 'opt2',
        slug: 'opt2',
        component: <InWork />,
      },
      {
        tittle: 'opt3',
        slug: 'opt3',
        component: <InWork />,
      },
    ]
  },
  {
    tittle: 'Relatorio',
    slug: 'relatorio',
    subMenu: [
      {
        tittle: 'opt1',
        slug: 'opt1',
        component: <InWork />,
      },
      {
        tittle: 'opt2',
        slug: 'opt2',
        component: <InWork />,
      },
      {
        tittle: 'opt3',
        slug: 'opt3',
        component: <InWork />,
      },
    ]
  },
]

export default menuData;