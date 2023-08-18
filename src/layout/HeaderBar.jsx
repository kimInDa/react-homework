import Heading from '@/components/Heading';
import Nav from './Nav';

function HeaderBar() {
  return (
    <header className="flex justify-between px-8 py-2">
      <Heading />
      <Nav />
    </header>
  );
}

export default HeaderBar;
