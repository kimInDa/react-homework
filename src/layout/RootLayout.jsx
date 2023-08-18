import { Outlet } from 'react-router-dom';
import HeaderBar from './HeaderBar';
import FooterBar from './FooterBar';

function RootLayout() {
  return (
    <>
      <HeaderBar />
      <main>
        <Outlet />
      </main>
      <FooterBar />
    </>
  );
}

export default RootLayout;
