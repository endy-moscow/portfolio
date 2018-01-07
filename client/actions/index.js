export const filter = (tag) => {
  console.log(tag.name);
  return {
    type: 'SET_FILTER',
    payload: tag
  }
};
