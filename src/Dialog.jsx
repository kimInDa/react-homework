import Backdrop from './Backdrop';
import './styles/Dialog.css';
import { motion } from 'framer-motion';

function Dialog({ onClose }) {
  return (
    <Backdrop onClose={onClose}>
      <motion.div className="Dialog">
        <Dialog.Head />
        <Dialog.Body className="DialogBody">
          <img src="/public/피카츄.png" alt="피카츄" className="DialogImage" />
          <div className="DialogMessage">
            <span>피카츄가 당신에게 인사하네요!</span>
            <span>오늘 반가운 만남이 있을지도 몰라요!</span>
          </div>
        </Dialog.Body>
        <Dialog.Foot onClose={onClose} />
      </motion.div>
    </Backdrop>
  );
}

export default Dialog;

/* COMPOUND COMPONENT ------------------------------------------------------- */

Dialog.Head = function DialogHead() {
  return <h2 className="sr-only">만난 포켓몬</h2>;
};

Dialog.Body = function DialogBody({ children }) {
  return <>{children}</>;
};

Dialog.Foot = function DialogFoot({ onClose }) {
  return (
    <button type="button" onClick={onClose}>
      닫기
    </button>
  );
};
