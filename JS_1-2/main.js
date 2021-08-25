let capital = prompt("日本の首都は？");

while(capital !== '東京'){
    alert('不正解！');
    prompt("日本の首都は？");
} if(capital === '東京'){
    alert('正解！');
}