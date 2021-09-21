const question = 'トマトはどれ？';
const answers = [
  'トマト',
  'ピーマン',
  'たまねぎ',
  'レタス'
];
const correct = 'トマト';

const $button = document.getElementsByTagName('button')
let $buttonLen = $button.length
let buttonIndex = 0;

// クイズの問題文・選択肢定義
const setUpQuiz = () =>{
  document.getElementById('js-question').textContent = question;
  while(buttonIndex < $buttonLen){
    $button[buttonIndex].textContent = answers[buttonIndex];
    buttonIndex++;
  }
}
setUpQuiz();

//正誤判定

const setUpAnsewrs = () => {
while(buttonIndex < $buttonLen){
  $button[buttonIndex].addEventListener('click', (e) =>{
    if(correct === e.target.textContent){
      window.alert('正解')
    } else {
      window.alert('不正解')
    }
  })
  buttonIndex++;
}
}

setUpAnsewrs();