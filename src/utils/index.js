export const dataOptions = array => {
  const newArr = [];

  array.forEach(data => {
    const newData = {
      value: { ...data },
      text: data.title
    };
    newArr.push(newData);
  });
  return newArr;
};
