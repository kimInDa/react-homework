import { RouterProvider } from 'react-router-dom';
import router from './routes';

function App() {
  return (
    <div className="App text-white bg-[#03010C]">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
