[ 멋쟁이 사자처럼🦁 프론트엔드 스쿨 6기 | React 프로그래밍 과제  ]

# actomic 컴포넌트
- Figma를 사용해 **재생 버튼**과 **일시정지 버튼**을 설계(disign) 하였습니다. 
- 설계한 컴포넌트를 리액트 컴포넌트로 구현하였습니다.

  
 ![구현완료](https://github.com/kimInDa/react-homework/assets/105577805/d3b42904-7431-45f5-847b-e4ec6e2826cb)

 <br />

## Figma 설계(disign)
### 🔗 Figma 바로가기 → [링크](https://www.figma.com/file/K5O6SBS0nt3WNYQ6zkQCCd/React-Homework?type=design&node-id=0%3A1&mode=design&t=gpHsPzTH1FGc1mQS-1)

- Figma를 사용해 아토믹(atomic) 컴포넌트를 설계(design)하였습니다.
- 컴포넌트의 ``Properties``로 ``action``을 부여하였습니다.
- ``action``은 각 버튼을 클릭하는 사용자의 의도를 나타냅니다.

<img width="979" alt="2023-08-11_20-20-48" src="https://github.com/kimInDa/react-homework/assets/105577805/ff584218-4f48-4fa7-80b2-660de6323d51">

 <br />

## 코드 리뷰
### Components 구조
![2023-08-11_20-15-59](https://github.com/kimInDa/react-homework/assets/105577805/8dbd53fc-01da-495c-8209-f634cdb8f55a)

### 1. ReactDOM 

**main.jsx**

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```
- ReactDOM의 ``createRoot`` 메서드로 컴포넌트를 렌더링할 위치의 HTML 요소를 잡아줍니다.
- ReactDOM의 ``render`` 메서드로 컴포넌트를 렌더링 합니다.

### 2. Controller
**Controller.jsx**
```jsx
import styles from '../styles/Controller.module.css'
import PlayButton from './PlayButton'


function Controller() {
  return (
    <article className={styles.container}>
      <PlayButton label='재생' buttonType='play' />
      <PlayButton label='일시정지' buttonType='pause' />
    </article>
  )
}

export default Controller
```
**Controller.module.css**
```css
.container {
  width: 250px;
  padding: 20px 10px;
  display: flex;
  justify-content: space-around;
  border-radius: 5px;
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
}
```
- 버튼의 부모요소인 ``Controller`` 컴포넌트를 ``article`` 태그로 생성합니다.
- ``Controller`` 컴포넌트의 CSS는 **CSS module** 방식으로 구현합니다.
- ``Controller`` 컴포넌트에서 자식 요소인 **재생 버튼**과 **일시정지 버튼**에게 ``props``를 전달합니다.

### 3. PlayButton
**PlayButton.jsx**
```jsx
import styles from '@/styles/PlayButton.module.css'

function PlayButton({label, buttonType}) {
  return (
    <button 
      type='button'
      aria-label={label}
      title={label}
      className={`${styles.button} ${buttonType === 'play' ? styles.play : styles.pause}`}>
    </button>
  )
}

export default PlayButton
```
**PlayButton.module.css**
```jsx
.button {
  width: 100px;
  height: 100px;
  border: none;
  background-color: transparent;
}

.button.play{
  background-image: url(/src/assets/button-play.svg);
}

.button.pause{
  background-image: url(/src/assets/button-pause.svg);
}
```
- ``PlayButton`` 컴포넌트의 CSS 또한 **CSS module** 방식으로 구현하였습니다.
- ``Controller`` 컴포넌트에서 전달 받은 ``props``는 ``button`` 요소의 속성값이 됩니다.
- ``label``은 ``button``요소의 ``aria-label``과 ``title``의 속성값이 됩니다.
- ``buttonType``은 전달 받은 값에 따라 ``button``의 ``className``을 다르게 부여합니다.
- 다르게 부여된 ``className``에 따라 각 버튼은 서로 다른 **CSS 클래스 선택자**를 가지게 됩니다.
- 각 **CSS 클래스 선택자**는 다른 ``background-image`` 경로를 가지고 있고, 이에 따라 각 ``button``은 다른 이미지를 ``background-image``로 가지게 됩니다.
