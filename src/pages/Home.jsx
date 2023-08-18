import useDocumentTitle from '@/hooks/useDocumentTitle';

function Home() {
  useDocumentTitle('홈(Home) | 영화 엘리멘탈(Elemental) 소개 사이트');
  return (
    <div>
      Home
      <img
        src="/src/assets/poster_06.jpg"
        alt="엘리멘탈 포스터"
        className="w-32"
      />
    </div>
  );
}

export default Home;
