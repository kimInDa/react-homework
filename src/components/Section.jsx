import { Outlet } from 'react-router-dom';

function Section() {
  return (
    <>
      <section className="flex flex-col items-center justify-center py-7 px-8 h-screen">
        <Outlet />
      </section>
    </>
  );
}

export default Section;
