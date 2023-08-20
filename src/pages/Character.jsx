import useDocumentTitle from '@/hooks/useDocumentTitle';
import useFetchData from '../hooks/useFetchData';
import CharacterList from './CharacterList';
import { useState, useEffect } from 'react';
import CharacterInfo from './CharacterInfo';


const INFO_ENDPOINT = `http://127.0.0.1:8090/api/collections/Elemental/records`;

function Character() {
  const {data, isLoading, error} = useFetchData(INFO_ENDPOINT);
  const [selectedCharacter, setSelectedCharacter] = useState('앰버 루멘');
  const [selectedCharacterInfo, setSelectedCharacterInfo] = useState(data.items?.find((item)=>item.name === selectedCharacter))


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
      <ul className='flex gap-5 animate-fadeInDown absolute top-0'>
        {data.items?.map((item)=> <CharacterList key={item.id} item={item} onClick={handleSelectedCharacter}/>)}
      </ul>
      <CharacterInfo info={selectedCharacterInfo}/>
    </>
  );
}

export default Character;
