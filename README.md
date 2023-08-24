[ 멋쟁이 사자처럼🦁 프론트엔드 스쿨 6기 | React 프로그래밍 과제 ]

# Mission 02 | 컴포넌트를 조립하여 Page 구현

- 컴포넌트를 조립하여 영화 엘리멘탈(ELEMENTAL)을 소개하는 페이지를 구현하였습니다.
- 🔗 배포주소 : https://elemental-reactpage.netlify.app

![시연 이미지](https://github.com/kimInDa/react-homework/assets/105577805/5faec7da-c09b-49c1-9c3a-87fd86d7267e)

## 코드 리뷰

## Layout

- React Router로 네비게이션을 구현하였습니다.
- 네비게이션의 각 항목을 클릭시 해당 페이지로 이동합니다.
- 마우스를 hover 하거나 해당 페이지에 들어가 있을 떄에는 글자의 색상과 밑줄이 들어가도록하여 사용자가 어느 페이지에 접속하고 있는지 알 수 있도록 하였습니다.

```jsx
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
```

- RootLayout 컴포넌트 내에 HeaderBar 컴포넌트와 FooterBar 컴포넌트를 넣고 그 사이에 main 을 구현하였습니다.

### 페이지 | 홈

![home](https://github.com/kimInDa/react-homework/assets/105577805/679e4ad3-5657-4d36-ba7c-a3cff3ceba64)

```jsx
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
        src="/src/assets/poster_04.jpg"
        alt="엘리멘탈 포스터"
        className="w-1/2 h-fit animate-fadeIn mt-6 "
      />
      <Logo className="w-1/2 animate-scaleUp relative bottom-[10%]" />
    </>
  );
}
```

- HeaderBar와 Home 페이지에 공통으로 사용하는 로고 이미지를 컴포넌트화 하여 사용하였습니다.

### 페이지 | 줄거리

![summary](https://github.com/kimInDa/react-homework/assets/105577805/1e2d5bda-33fb-40a3-9bd0-ca78717e7e1d)

- 애니메이션을 tailwind config 파일에 구성하여 구현하였습니다.

### 페이지 | 캐릭터 소개

![introduce](https://github.com/kimInDa/react-homework/assets/105577805/239063b4-9d88-4347-a303-cf38414fc8d2)

- Charactor 컴포넌트 내부에서 캐릭터 리스트를 구현하는 CharacterList 컴포넌트와, 캐릭터의 정보를 구현하는 CharacterInfo 컴포넌트를 조립하여 구현하였습니다.
- 해당 페이지의 각 캐릭터 정보는 pocketbase에 구성하였고 Character 컴포넌트에서 GET하여 사용합니다.
- CharacterList는 가져온 data를 map으로 순환하여 각 캐릭터의 목록을 렌더링 합니다.
- 각 캐릭터를 클릭하여 event.target.alt 로 각 캐릭터의 이름을 얻습니다.
- 얻은 캐릭터의 이름으로 data의 item에서 find 메서드를 사용해 선택된 캐릭터의 정보만 얻습니다.
- 선택된 캐릭터의 정보는 CharacterInfo의 props로 전달하여 화면에 렌더링 합니다.

## 아쉬운 점

- 캐릭터 소개 페이지에서 여러모로 아쉬운 점이 많습니다.
- 처음 랜더링 할 때에 CharacterInfo에 정보를 넘겨주지 못하는 부분을 결국 해결하지 못하고 어설프게 구현한 것이 부끄럽습니다.
- tailwindCSS로 애니메이션을 관리하기 어려웠습니다. 처음에 화면이 랜더링 될 때는 애니메이션이 동작하지만 클릭으로 캐릭터가 바뀔때는 애니메이션이 동작하지 않는 부분을 결국 해결하지 못한 것이 아쉽습니다.

## 리팩토링

- 2023년 8월 20일
  - 완성
  - 과제 제출
- 2023년 8월 25일
  - 데이터 베이스 배포
  - 이미지 베포 주소 수정
  - 배포
