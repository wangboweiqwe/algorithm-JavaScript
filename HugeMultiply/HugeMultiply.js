function test(num){         //测试是否是质数
  for(var i = 2;i < num;i++){
    if(num%i == 0)
    return false;
  }
  return true;
}

function prod(arr,i){         //表示积的数组乘下个质数
  arr = arr.map((ele) => ele*i);
  return makeSing(arr);
}

function makeSing(arrBig){        //将数组中的元素转化为个位数
  var arrComp = arrBig.map((bigNum) => bigNum.toString(10).split(''));   //元素转化为个位数数组后再处理
  if( arrComp.every((ele) =>  ele.length === 1) ){
    return arrBig;
  }
  else{
    var arrSing = [],
        leng = arrComp.length+arrComp[0].length - 1;    //单次处理后的数组长度
    for(var a = 0;a < leng;a++){
      arrSing[a] = 0;
    }
    for(var i = 0;i < arrComp.length;i++){
      for(var j = 0;j < arrComp[i].length;j++){
        var loca = leng - arrComp.length - arrComp[i].length + i + j + 1;
        arrSing[loca] += +arrComp[i][j];
      }
    }
    return makeSing(arrSing);          //重复使用该函数直到转化成功
  }
}

var arr=[1];
for(var i = 2;i < 10001;i++){
  if(test(i)){
    arr = prod(arr,i);      //求得最后的积
  }
}
console.log('arrLength',arr.length);

function findNum(arr,num){    //找到积包含多少个1，2，3……
  arr = arr.map( (ele) => {
    if(ele === num)
    return 1;
    else return 0;
  });
  return arr.reduce(function(accu,curr){
    return accu+curr;
  });
}

console.log('1:',findNum(arr,1));
console.log('2:',findNum(arr,2));
console.log('3:',findNum(arr,3));
console.log('4:',findNum(arr,4));
console.log('5:',findNum(arr,5));
console.log('6:',findNum(arr,6));
console.log('7:',findNum(arr,7));
console.log('8:',findNum(arr,8));
console.log('9:',findNum(arr,9));
console.log('0:',findNum(arr,0));
