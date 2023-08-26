import { motion } from 'framer-motion';
import './styles/Backdrop.css';

function Backdrop({ children, onClose }) {
  return (
    <motion.div
      role="none"
      onClick={onClose}
      className="Backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
}

export default Backdrop;
