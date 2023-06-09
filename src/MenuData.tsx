import InWork from "./components/InWork";

const inWork = () => {
  return <InWork />
}

const menuData = [
  {
    tittle: 'Inicio',
  },
  {
    tittle: 'Cadastro',
    subMenu: [
      {
        tittle: 'opt1',
        component: <InWork />,
      },
      {
        tittle: 'opt2',
        component: <InWork />,
      },
      {
        tittle: 'opt3',
        component: <InWork />,
      },
    ]
  },
  {
    tittle: 'Relatorio',
    subMenu: [
      {
        tittle: 'opt1',
        component: <InWork />,
      },
      {
        tittle: 'opt2',
        component: <InWork />,
      },
      {
        tittle: 'opt3',
        component: <InWork />,
      },
    ]
  },
]

export default menuData;