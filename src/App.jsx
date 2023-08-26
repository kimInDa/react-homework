import './styles/App.css';
import { AnimatePresence, motion } from 'framer-motion';
import { useRef, useState } from 'react';
import Dialog from './Dialog';

function App() {
  const opennerRef = useRef(null);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    console.log(import.meta.env.VITE_PB_URL);
  };

  const handleClose = () => {
    setOpen(false);
    opennerRef.current.focus();
  };

  return (
    <div className="App">
      <App.Head />
      <App.Body>
        <motion.button
          type="button"
          ref={opennerRef}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          onClick={handleOpen}
        >
          만나러 가기
        </motion.button>
      </App.Body>

      <AnimatePresence>
        {open && <Dialog onClose={handleClose}></Dialog>}
      </AnimatePresence>
    </div>
  );
}

export default App;

/* COMPOUND COMPONENT ------------------------------------------------------- */

App.Head = function AppHead() {
  return <h1>럭키!? 포켓몬</h1>;
};

App.Body = function AppBody({ children }) {
  return (
    <>
      <img
        src="/public/PokemonMain.png"
        alt="포켓몬 피카츄"
        className="pikachuMain"
      />
      {children}
      <span>
        오늘의 여행을 떠나기 전, <br />
        마주치는 포켓몬으로 하루의 운세를 점쳐보세요!
      </span>
    </>
  );
};
