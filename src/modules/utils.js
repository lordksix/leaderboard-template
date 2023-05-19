import { createList } from './ListItemMod.js';
import { handleScoreFormSubmit } from './PostForm.js';
import { handleRefreshScores, loadRefreshScores } from './GetAPI.js';

const createApiURL = () => {
  const baseURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
  const gameEndPoint = 'games/';
  const gameID = '6lbvUiU6NvtGL9BW17VD';
  const scoresEndPoint = `${gameID}/scores/`;
  const endPoint = `${gameEndPoint}${scoresEndPoint}`;
  const url = `${baseURL}${endPoint}`;
  return url;
};

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

const printList = async (event) => {
  const apiURL = createApiURL();
  const dataResponse = await handleRefreshScores(event, apiURL);
  if (dataResponse instanceof Error) appendResponsePara('Unable to Fetch Data');
  else {
    const listFrag = await createListFrag(dataResponse.result);
    appendResponsePara('Leaderboard Updated');
    await appendListFrag(listFrag);
  }
};

const loadList = async () => {
  const apiURL = createApiURL();
  const dataResponse = await loadRefreshScores(apiURL);
  if (dataResponse instanceof Error) appendResponsePara('Unable to Fetch Data');
  else {
    const listFrag = await createListFrag(dataResponse.result);
    await appendListFrag(listFrag);
  }
};

const printPostResponse = async (event) => {
  const apiURL = createApiURL();
  const dataResponse = await handleScoreFormSubmit(event, apiURL);
  if (dataResponse instanceof Error) appendResponsePara('Unable to Post Data');
  else await appendResponsePara(dataResponse.result);
};

export {
  printList, printPostResponse, loadList,
};