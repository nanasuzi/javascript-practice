const quiz = [
  {
    question: '木工用ボンドの正式名称は次のうちどれ？',
    answers: [
      '塩化ビニル樹脂系エマルジョン形',
      '酢酸ビニル樹脂系エマルジョン形',
      'アクリル樹脂系エマルジョン形',
      'クロロプレンゴム系溶剤形'
    ],
    correct: '酢酸ビニル樹脂系エマルジョン形'
  }, {
    question: 'せいやのオープニング文言は次のうちどれ？',
    answers: [
      'イニミニレカピカレーライオニメカチカロリパパランパンプッシュ',
      'イニミニレカピカレーライオニメカチカロリパパランパンポップ',
      'イニミニカミナカオニロリチカロリパパランパンプッシュ',
      'イニミニレカピカレーライオニメカリカロリパパランパンプッシュ'
    ],
    correct: 'イニミニレカピカレーライオニメカチカロリパパランパンプッシュ'
  }, {
    question: '燃えるゴミの日は、次のうちどれ？（チョコラータ）',
    answers: [
      '月と水',
      '木と金',
      '月と水と金',
      'すべての日に出すことができる'
    ],
    correct: '月と水と金'
  }
];
const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length

//クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}
setupQuiz();

const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解!');
    score++;
  } else{
    window.alert('不正解!');
  }

  quizIndex++;

  if(quizIndex < quizLength){
    setupQuiz();
  } else {
    window.alert('終了!あなたの正解数は' + score + '/' + quizLength + 'です！')
  }
};

//ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerIndex++;
};