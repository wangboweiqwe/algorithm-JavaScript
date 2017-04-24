let getPixels = require("get-pixels");
// node 插件 功能： 文件操作

getPixels("./test.png", function(err, pixels) {         //获取每个小的图块
  function getBlock(arr){
    if(arr.indexOf(1) === -1){
      return result;
    }
    else {
      let line = arr.indexOf(1);
      let lineEnd = arr.indexOf(0,line);
      nextLine(line, lineEnd, arr);
      count++;
      // console.log(result);
      getBlock(arr);
    }
  }
  function nextLine(start, end, arr){           //获取下一行像素点
    let nextPoint = arr.indexOf(1,wid + start);
    for(let i = start; i < end; i++){     //当前行设为0
      arr[i] = 0;
    }
    result[count]? result[count] += end-start : result[count] = end-start;
    if(nextPoint >= (end + wid)||nextPoint === -1)
      return arr;
    else {
      let nextEnd = arr.indexOf(0,nextPoint);
      for(let i = 1; i < wid ; i++){          //找到下一行起点nextStart
        if(arr[nextEnd - i] === 0){
          nextStart = nextEnd - i + 1;
          break;
          }
      }
      let preStart = arr.indexOf(1, end);       //找到上面的突出:pre
      if(preStart < (nextEnd - wid)){
        let preEnd = arr.indexOf(0, preStart);
        preLine(preStart, preEnd, arr);
      }
      nextLine(nextStart, nextEnd, arr);
    }
  }
  function preLine(start, end, arr1){               //找到上面的突出:pre ,arr1与arr不同
    let preStart = arr1.indexOf(1, start - wid);
    for(let i = start; i < end; i++){     //当前行设为0
      arr1[i] = 0;
    }
    result[count]? result[count] += end-start : result[count] = end-start;
    if(preStart >= (end - wid)|| preStart === -1)              //去掉 === -1
      return arr1;
    let preEnd = arr1.indexOf(0, preStart);
    preLine(preStart, preEnd, arr1);
  }

  if(err) {
    console.log("Bad image path");
    return err;
  }
  let count = 0,result = []; //结果
  const wid = pixels.shape[0];    //图像宽度
  let colorR = pixels.data        //图像数据转为0,1
    .filter((ele,ind) => (ind % 4 === 0))
    .map((ele) => (ele === 255?0:1));
  getBlock(colorR);
  console.log(result);
})

// let count = 0, result = [], wid = 6;       //测试
//
// let arr= [0,0,0,0,0,0,
//           0,0,0,1,0,0,
//           0,0,1,1,1,0,
//           0,0,0,1,0,0,
//           0,0,0,0,0,0,
//           0,0,0,1,0,0,
//           0,0,0,0,0,0];
//           preLine(14,17,arr);
//           console.log(arr+'--'+result);
