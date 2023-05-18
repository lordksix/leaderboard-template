import './index.css';
import createList from './modules/ListItemMod.js';

const data = [
  'Name: 100', 'Name: 20', 'Name: 50', 'Name: 78',
  'Name: 125', 'Name: 77', 'Name:42',
];

const classes = 'score-item';
const scoreList = document.querySelector('.score-list');

const listFrag = createList.createList('li', classes, data);

scoreList.appendChild(listFrag);