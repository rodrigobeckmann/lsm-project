import SideMenu from '../SideMenu';
import { Outlet } from 'react-router-dom';


function Layout() {

  return (
    <main>
      <SideMenu />
      <section className='component-container'>
        <Outlet />
      </section>
    </main>
  )
}

export default Layout