import useDocumentTitle from '@/hooks/useDocumentTitle';
import Logo from '../components/Logo';
import mainPoster from '../assets/poster_04.jpg';

function Home() {
  useDocumentTitle('홈(Home) | 영화 엘리멘탈(Elemental) 소개 사이트');

  return (
    <>
      <h2 className="sr-only">메인 페이지</h2>
      <span className="font-semibold animate-fadeIn">
        <span className="text-elementalRed">6</span>
        <span className="text-elementalBlue">월</span> 대개봉,
      </span>
      <span className="font-light text-lg animate-fadeIn">
        웰컴 투 <span className="text-elementalPurple">엘</span>
        <span className="text-elementalRed">리</span>
        <span className="text-elementalGreen">멘</span>
        <span className="text-elementalBlue">트</span> 시티!
      </span>
      <img
        src={mainPoster}
        alt="엘리멘탈 포스터"
        className="w-1/2 h-fit animate-fadeIn mt-6 "
      />
      <Logo className="w-1/2 animate-scaleUp relative bottom-[10%]" />
    </>
  );
}

export default Home;
