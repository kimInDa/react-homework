import { createBrowserRouter } from 'react-router-dom';
import RootLayout from './layout/RootLayout';
import Home from './pages/Home';
import Summary from './pages/Summary';
import Charactor from './pages/Charactor';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'summary', element: <Summary /> },
      { path: 'charactor', element: <Charactor /> },
    ],
  },
]);

export default router;
