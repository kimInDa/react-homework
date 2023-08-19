import HeaderBar from './HeaderBar';
import FooterBar from './FooterBar';
import Section from '../components/Section';

function RootLayout() {
  return (
    <>
      <HeaderBar />
      <main>
        <Section />
      </main>
      <FooterBar />
    </>
  );
}

export default RootLayout;
