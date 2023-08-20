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
                ? `text-elementalRed underline underline-offset-1`
                : `hover:text-elementalRed hover:underline underline-offset-1`
            }
          >
            홈
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/summary"
            className={({ isActive }) =>
              isActive
                ? `text-elementalPurple underline underline-offset-1`
                : `hover:text-elementalPurple hover:underline underline-offset-1`
            }
          >
            줄거리
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/character"
            className={({ isActive }) =>
              isActive
                ? `text-elementalBlue underline underline-offset-1`
                : `hover:text-elementalBlue hover:underline underline-offset-1`
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
