// 変数
let unko = 'Hello World!';

// unko = 'Hello World2!!';

// 定数
const bigUnko = 'He..Hell...Hello World!';

// bigUnko = 'Hello World2!';

// 配列
let inoki = ['いーち', 'にーい', 'さーん', 'ダーー！！'];

//ループ文
let index = 0;
// while(index < inoki.length){  //=4
//   // 繰り返したい命令
//   console.log(inoki[index]);
//   index++;
// }

//if /else
// if(inoki.length > 5){
//   console.log('ボンバイエ！');
// } else {
//   console.log('ボンバ...!');
// }

//関数
const test = (arg) => {
  //ここに実行したい命令を書く
  if(inoki.length > arg){
    console.log('ボンバイエ！');
  } else {
    console.log('ボンバ...!');
  }
};

//オブジェクト
const unko2 = {
  color: 'pink',
  size: 'large',
  purfume: 'mint',
  goToilet: () => {
    console.log('Hello world');
  }
};

document.getElementsByTagName('button')[1].addEventListener('click', ()=> {
  //命令を書く
  window.alert('Hellow World!')
});

