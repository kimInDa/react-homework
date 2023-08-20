import { getInfoImageURL } from "../hooks/getInfoImageURL"


function CharacterList({item, onClick}) {
  return (
    <li>
      <button type='button' className=' block w-14 border-2 hover:border-4 rounded-full' onClick={onClick}>
        <img src={getInfoImageURL(item)} alt={item.name} />
      </button>
    </li>
  )
}

export default CharacterList