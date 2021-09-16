const question = 'トマトはどれ？';
const answers = [
  'トマト',
  'ピーマン',
  'たまねぎ',
  'レタス'
];
const correct = 'トマト';


console.log(document.getElementById('js-question').textContent = question);

document.getElementsByTagName('button')[0].textContent = answers[0];
document.getElementsByTagName('button')[1].textContent = answers[1];
document.getElementsByTagName('button')[2].textContent = answers[2];
document.getElementsByTagName('button')[3].textContent = answers[3];