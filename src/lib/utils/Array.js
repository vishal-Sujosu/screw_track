export const concatenateArrayWithSpace = (val) => {
  let title = '';
  val.map((valObj, index) => {
    title = index === 0 ? valObj : title.concat(' ').concat(valObj);
  });
  return title.trim();
};

export const concatenateArray = (val) => {
  let title = '';
  val.map((valObj) => {
    title = title.concat(valObj);
  });
  return title.trim();
};

export const concatenateArrayWithComma = (val) => {
  let title = '';
  val.map((valObj, index) => {
    title = index === 0 ? valObj : title.concat(', ').concat(valObj);
  });
  return title.trim();
};

export const getConvertedArrayToString = (array) => {
  return [array.slice(0, -1).join(', '), array.slice(-1)[0]].join(array.length < 2 ? '' : ' and ');
};

export const countElementOccurrencesInArray = (array, element) => {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) {
      count++;
    }
  }
  return count;
};


export const checkSubsetArray = (parentArray, subsetArray) => {
  return subsetArray.every((el) => {
    return parentArray.includes(el);
  });
};