import './App.css';
import SideMenu from './components/SideMenu';
import InWork from './components/InWork';
import Home from './components/Home';
import { useState } from 'react';

const home = <Home />;



function App() {

  const [displayComponent, setDisplayComponent] = useState(home);

  const handleRenderComponentClick = (component: JSX.Element) => {
    setDisplayComponent(component)
  }

  const renderComponent = () => {
    < InWork />
  }

  return (

    <main>
      <SideMenu
        handleRenderClick={handleRenderComponentClick}
      />
      <section className='component-container'>
        {displayComponent}
      </section>
    </main>

  );
}

export default App;
