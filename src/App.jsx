import { RouterProvider } from 'react-router-dom';
import router from './routes';

function App() {
  return (
    <div className="App bg-[#03010C] text-white h-screen">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
