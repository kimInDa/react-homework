import { createBrowserRouter } from 'react-router-dom';
import RootLayout from './layout/RootLayout';
import Home from './pages/Home';
import Summary from './pages/Summary';
import Character from './pages/Character';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'summary', element: <Summary /> },
      { path: 'character', element: <Character /> },
    ],
  },
]);

export default router;
