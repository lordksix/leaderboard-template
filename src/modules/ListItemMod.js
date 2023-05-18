import {
  createElementDefault,
} from './createElementMod.js';

const createList = (elem, classes, dataArr) => {
  const docFrag = document.createDocumentFragment();
  dataArr.forEach((data) => {
    const element = createElementDefault(elem, classes, data);
    docFrag.append(element);
  });
  return docFrag;
};

export default {
  createList,
};