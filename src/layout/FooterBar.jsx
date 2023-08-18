import { useState } from 'react';

function FooterBar() {
  const [currentYear] = useState(() => new Date().getFullYear());

  return (
    <footer className="p-6 text-center mt-20 ">
      <small className="text-xs font-light">
        Copyright <b>{currentYear}</b> &copy; 모든 저작권은
        <strong> 월트 디즈니 픽처스(Walt Disney Pictures)</strong>와{' '}
        <strong>픽사 애니메이션 스튜디오(Pixar Animation Studios)</strong>에
        있습니다.
      </small>
    </footer>
  );
}

export default FooterBar;
