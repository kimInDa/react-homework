import useDocumentTitle from '@/hooks/useDocumentTitle';
import useFetchData from '../hooks/useFetchData';
import CharacterList from './CharacterList';
import { useState, useEffect } from 'react';
import CharacterInfo from './CharacterInfo';




const INFO_ENDPOINT = `http://127.0.0.1:8090/api/collections/Elemental/records`;

function Character() {
  const [selectedCharacter, setSelectedCharacter] = useState('앰버 루멘');
  const [selectedCharacterInfo, setSelectedCharacterInfo] = useState(null)
  const {data, isLoading, error} = useFetchData(INFO_ENDPOINT);

  useDocumentTitle(
    '캐릭터 소개(Charactor) | 영화 엘리멘탈(Elemental) 소개 사이트'
  );

  useEffect(() => {
    const newCharacterInfo = data.items?.find((item) => item.name === selectedCharacter);
    setSelectedCharacterInfo(newCharacterInfo);
  }, [selectedCharacter, data.items]);


  if (isLoading) {
    return <div>가져오는중</div>;
  }

  if (error) {
    return (
      <div role="alert">
        <p>{error.message}</p>
      </div>
    );
  }

  function handleSelectedCharacter(e) {
    setSelectedCharacter(e.target.alt);
  }



  return (
    <>
      <h2 className='sr-only'>캐릭터 소개</h2>
      <ul className='flex gap-5'>
        {data.items?.map((item)=> <CharacterList key={item.id} item={item} onClick={handleSelectedCharacter}/>)}
      </ul>
      <CharacterInfo info={selectedCharacterInfo}/>
      {/* <dl className='grid gap-7 grid-rows-[0.5fr_auto_1fr] grid-cols-2'>
        <dt className='row-span-1 col-start-1 col-end-2 self-end text-2xl font-bold animate-fadeInLeftFirst text-elementalRed'>{name}(Ember Lumen)</dt>
        <dd className='row-span-full col-start-2 col-end-3 flex justify-center animate-fadeIn'><img src='/src/assets/character_Ember.webp' alt='앰버 루멘' className='w-1/2' /></dd>
        <dd className='row-span-1 col-start-1 col-end-2 text-lg italic animate-fadeInLeftFirst'>&#34;열정이 이끄는 곳으로!&#34;</dd>
        <dd className='row-span-1 col-start-1 col-end-2 animate-fadeInLeftSecond'>강인하고 민첩한 불 원소 여성. 자신에게 솔직하지 못한 츤데레이자 불같은 성격의 소유자로, 화가 폭발하면 불꽃이 보라빛으로 변하며 주변을 싸그리 날려버리는 버릇이 있다. 화끈한 성격을 주체하지 못하여 화를 잘 참지 못하는 면이 있는데, 웨이드를 만난 이후에는 화가 나도 그대로 표출하지 않고 진정하는 등 마음을 다스릴 수 있게 된다.</dd>
      </dl>  */}
    </>
  );
}

export default Character;
