import './index.css';
import './asset/resource/icons.svg';
import { printPostResponse, printList, loadList } from './modules/utils.js';

const formScores = document.getElementById('post-score');
const refreshScore = document.getElementById('leaderboard-btn');

formScores.addEventListener('submit', printPostResponse);
refreshScore.addEventListener('click', printList);

loadList();