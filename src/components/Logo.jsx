function Logo({ className = 'w-[200px]' }) {
  return (
    <img
      src="/public/logo_02.webp"
      alt="엘리멘탈"
      className={`${className} `}
    />
  );
}

export default Logo;
