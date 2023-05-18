import { createList } from './ListItemMod.js';
import { handleScoreFormSubmit } from './PostForm.js';
import { handleRefreshScores } from './GetAPI.js';

const processDataScore = (dataSet) => {
  const dataStringArr = dataSet.map((data) => `${data.user}: ${data.score}`);
  return dataStringArr;
};

const createListFrag = async (dataSet) => {
  const data = processDataScore(dataSet);
  const classes = 'score-item';
  const elem = 'li';
  const listFrag = createList(elem, classes, data);
  return listFrag;
};

const appendListFrag = async (listfrag) => {
  const scoreList = document.querySelector('.score-list');
  scoreList.innerHTML = '';
  scoreList.appendChild(listfrag);
};

const appendResponsePara = async (node) => {
  const showResponseForm = document.getElementById('formFeedback');
  showResponseForm.textContent = node;
};

/**
 * Event handler forthe get of data from API
 * @param {SubmitEvent} event
 * @returns {void}
 */
const printList = async (event) => {
  const dataResponse = await handleRefreshScores(event);
  if (dataResponse instanceof Error) appendResponsePara('Unable to Fetch Data');
  else {
    const listFrag = await createListFrag(dataResponse.result);
    await appendListFrag(listFrag);
  }
};

/**
 * Event handler for a form submit event and print response
 * @param {SubmitEvent} event
 * @returns {void}
 */
const printPostResponse = async (event) => {
  const dataResponse = await handleScoreFormSubmit(event);
  if (dataResponse instanceof Error) appendResponsePara('Unable to Post Data');
  else await appendResponsePara(dataResponse.result);
};

export {
  printList, printPostResponse,
};