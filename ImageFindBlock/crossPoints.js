let getPixels = require("get-pixels");

getPixels(__dirname+"/crossPoints.png", (err, pixels) => {      //获取每个小的图块
  const colorR = pixels.data        //图像像素信息转为0（白色）,1
    .filter((ele,ind) => (ind % 4 === 0))
    .map((ele) => (ele === 255?0:1));
  let oneline = [];   // 变成二维数组
  for(let i = 0; i < pixels.shape[1]; i++) {
    oneline = oneline.concat(colorR.slice(i * pixels.shape[0], (i + 1) * pixels.shape[0]));
  }
  const lineArr = oneline.map((ele) => {
    let lineInRow = [];
    for (let i = 0; i < ele.length; i++){
      if (ele[i] !== ele[i+1]) {
        lineInRow.push(i+1);
      }
    }
    console.log(lineInRow);
    return lineInRow;
  });
  let points = 0; // 交点
  for (let i = 0; i < lineArr.length - 1; i++) {
    if((lineArr[i].length - lineArr[i+1].length) / 2 === 1) {
      points++;
      console.log(points);
    }
  }
});
