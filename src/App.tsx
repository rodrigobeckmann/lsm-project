import './App.css';
import Layout from './components/layout';
import { Route, Routes } from 'react-router-dom';
import NotFound from './pages/not-found';
import menuData from './MenuData';
import Home from './components/Home';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        {menuData.map((element) =>
          element.subMenu?.map((menuElement) =>
            <Route path={`${element.slug}/${menuElement.slug}`} element={menuElement.component} />
          )
        )}

      </Route>
      <Route path='/*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
