import useDocumentTitle from '@/hooks/useDocumentTitle';

function Charactor() {
  useDocumentTitle(
    '캐릭터 소개(Charactor) | 영화 엘리멘탈(Elemental) 소개 사이트'
  );
  return <div>Charactor</div>;
}

export default Charactor;
