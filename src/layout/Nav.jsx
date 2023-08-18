import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="flex-grow">
      <ul className="h-full flex gap-4 justify-evenly items-center text-xl ">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? `text-red-400 underline underline-offset-1`
                : `hover:text-red-400 hover:underline underline-offset-1`
            }
          >
            홈
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/introduce"
            className={({ isActive }) =>
              isActive
                ? `text-purple-400 underline underline-offset-1`
                : `hover:text-purple-400 hover:underline underline-offset-1`
            }
          >
            줄거리
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/charactor"
            className={({ isActive }) =>
              isActive
                ? `text-sky-400 underline underline-offset-1`
                : `hover:text-sky-400 hover:underline underline-offset-1`
            }
          >
            캐릭터 소개
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
