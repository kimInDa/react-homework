import { getInfoImageURL } from "../hooks/getInfoImageURL"

const firstInfo = 
{
  character
  : "강인하고 민첩한 불 원소 여성. 자신에게 솔직하지 못한 츤데레이자 불같은 성격의 소유자로, 화가 폭발하면 불꽃이 보라빛으로 변하며 주변을 싸그리 날려버리는 버릇이 있다. 화끈한 성격을 주체하지 못하여 화를 잘 참지 못하는 면이 있는데, 웨이드를 만난 이후에는 화가 나도 그대로 표출하지 않고 진정하는 등 마음을 다스릴 수 있게 된다.",
  characterImage
  : "character_ember_eIYc2fZBG4.webp",
  collectionId
  : "z0pfroe17yqg1fb",
  collectionName
  : "Elemental",
  created
  : "2023-08-19 18:35:49.252Z",
  id
  : "6hlr3x4hf4woisx",
  name
  :  "엠버 루멘",
  nameEn
  : "Ember Lumen",
  profileImage
  : "profile_ember_80AMEcEHXF.webp",
  slogan
  : "열정이 이끄는 곳으로!",
  updated
  : "2023-08-19 18:35:49.252Z"
}

const animation = {
  fadeInLeftFirst: 'animate-fadeInLeftFirst', 
  fadeIn: 'animate-fadeIn', 
  fadeInLeftSecond: 'animate-fadeInLeftSecond' 
}

function CharacterInfo({info, status}) {
  console.log(status);

  const characterData = !info ? firstInfo : info
  
  const {name, nameEn, slogan, character} = characterData

  const {fadeInLeftFirst} = animation


  const getFontColor = (name) => {
    
    let fontColor =''
  
    switch(name) {
      default:
      case '엠버 루멘': fontColor = 'text-elementalRed'; break;
      case '웨이드 리플': fontColor = 'text-elementalBlue'; break;
      case '클로드': fontColor = 'text-elementalGreen'; break;
      case '게일 쿠물러스': fontColor = 'text-elementalPurple'; break;
    }

    return fontColor;
  }


  return (
    <dl className='grid gap-7 grid-rows-[0.5fr_auto_1fr] grid-cols-2 max-w-[1280px] ml-8'>
      <dt className={`row-span-1 col-start-1 col-end-2 self-end text-2xl font-bold ${fadeInLeftFirst} ${getFontColor(name)}`}>{name}({nameEn})</dt>
      <dd className={`row-span-full col-start-2 col-end-3 justify-self-center animate-fadeIn max-h-1920px`}><img src={`${getInfoImageURL(characterData, 'characterImage')}`} alt={name} className="max-h-[40rem]"/></dd>
      <dd className={`row-span-1 col-start-1 col-end-2 text-lg italic animate-fadeInLeftFirst`}>&#34;{slogan}&#34;</dd>
      <dd className={`row-span-1 col-start-1 col-end-2 animate-fadeInLeftSecond`}>{character}</dd>
    </dl>
  )
}

export default CharacterInfo