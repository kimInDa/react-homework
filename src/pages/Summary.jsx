import useDocumentTitle from '@/hooks/useDocumentTitle';

function Summary() {
  useDocumentTitle('줄거리(Summary) | 영화 엘리멘탈(Elemental) 소개 사이트');

  return (
    <>
      <h2 className="sr-only">줄거리</h2>
      <dl className="grid gap-7 grid-rows-[0.5fr_auto_1fr] grid-cols-2 px-10">
        <dt className="col-span-1 row-span-1 text-3xl self-end justify-self-start animate-fadeInLeftFirst">
          줄거리
        </dt>
        <dd className="col-span-1 row-span-3 self-center flex justify-center animate-fadeInRight">
          <img
            src="/src/assets/poster_05.jpg"
            alt="엘리멘탈 포스터"
            className="w-96"
          />
        </dd>
        <dd className="col-start-1 col-end-2 row-start-2 row-end-3 font-semibold text-lg block animate-fadeInLeftFirst">
          디즈니와 픽사의 놀라운 상상력! <br />{' '}
          <i>올여름, 세상이 살아 숨 쉰다.</i>
        </dd>
        <dd className="col-span-1 row-span-1 animate-fadeInLeftSecond">
          불, 물, 공기, 흙 4개의 원소들이 살고 있는 ‘엘리멘트 시티’
          <br />
          재치 있고 불처럼 열정 넘치는 &#39;앰버&#39;는 어느 날 우연히 유쾌하고
          감성적이며 물 흐르듯 사는 &#39;웨이드&#39;를 만나 특별한 우정을
          쌓으며, 지금껏 믿어온 모든 것들이 흔들리는 새로운 경험을 하게
          되는데...
        </dd>
      </dl>
    </>
  );
}

export default Summary;
