export const getInfoImageURL = (item, fileName = 'profileImage') =>
  `https://elemental-introduce.pockethost.io/api/files/${item.collectionId}/${item.id}/${item[fileName]}`;
