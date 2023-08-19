import { Outlet } from 'react-router-dom';

function Section() {
  return (
    <>
      <section className="flex flex-col items-center py-7 px-8 relative h-fit">
        <Outlet />
      </section>
    </>
  );
}

export default Section;
