import './index.css';
import { printPostResponse, printList } from './modules/utils.js';

const baseURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
const gameEndPoint = 'games/';
const gameID = '6lbvUiU6NvtGL9BW17VD';
const scoresEndPoint = `${gameID}/scores/`;

const endPoint = `${gameEndPoint}${scoresEndPoint}`;
const url = `${baseURL}${endPoint}`;

const formScores = document.getElementById('post-score');
const refreshScore = document.getElementById('leaderboard-btn');

formScores.setAttribute('action', url);
refreshScore.setAttribute('name', url);

formScores.addEventListener('submit', printPostResponse);
refreshScore.addEventListener('click', printList);