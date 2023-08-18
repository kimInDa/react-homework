import { createBrowserRouter } from 'react-router-dom';
import RootLayout from './layout/RootLayout';
import Home from './pages/Home';
import Introduce from './pages/Introduce';
import Charactor from './pages/Charactor';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'introduce', element: <Introduce /> },
      { path: 'charactor', element: <Charactor /> },
    ],
  },
]);

export default router;
