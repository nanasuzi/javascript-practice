const quiz = [
  {
    question: 'トマトはどれ？',
    answers: [
      'トマト',
      'エリンギ',
      'トメト',
      'てっぱん'
    ],
    correct: 'トマト'
  }, {
    question: 'エリンギはどれ？',
    answers: [
      'ポルチーニ',
      'ペイル',
      'トマト',
      'エリンギ'
    ],
    correct: 'エリンギ'
  }, {
    question: 'pi-manはどれ？',
    answers: [
      'pi-man',
      'ピーマン',
      'パスタ',
      'モリオ'
    ],
    correct: 'pi-man'
  }
];

const quizLen = quiz.length;
const $button = document.getElementsByTagName('button')
let $buttonLen = $button.length
let score = 0;
let quizIndex = 0;
let handlerIndex = 0;

// クイズの問題文・選択肢定義
const setUpQuiz = () =>{
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < $buttonLen){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}
setUpQuiz();

//正誤判定
const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解')
    score++;
  } else {
    window.alert('不正解')
  }

  quizIndex++;

  if(quizIndex < quizLen){
    setUpQuiz();
  } else {
    window.alert('終了！あなたの正解数は' + score + '/' + quizLen + 'です')
  }
};

//クリックイベント
while (handlerIndex < $buttonLen) {
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}