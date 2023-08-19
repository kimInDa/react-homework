import { Link } from 'react-router-dom';
import Logo from './Logo';

function Heading() {
  return (
    <h1>
      <Link to="/">
        <Logo style="w-[180px]" />
      </Link>
    </h1>
  );
}

export default Heading;
