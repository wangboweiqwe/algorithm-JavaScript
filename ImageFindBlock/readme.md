# 将一张图片里的小块找出并找到每个小块的像素数
## 思路
* 将像素信息（`arr`）转化为需要的有效信息，转化后的`arr`中0代表白色像素点，1代表非白色的像素点
* `getBlock()`获取第一个非白色像素点，使用`nextLine()`找到包含这个像素点的图案的像素数量，将这个图案的像素信息设为0，反复运用该函数，得到结果
* `nextLine()`由图案的第一行找到图案的下一行，反复运行找到该完整图案
* `preLine()`找到图案的上凸起部分
## 运行方法
<pre><code>cd 当前目录
npm install get-pixels
node test.js
</code><pre>
## get-pixels
将图像输出为可处理数据
<pre><code>
getPixels("./test.png", function(err, pixels) {}
  pixels是{
    data:[],
    shape:[width,height],
  }
</code></pre>
`pixels.date`是一维数组，一个像素点的图像信息占数组的4个元素分别代表`RGBA`。所以数组`length`为4*像素数。
`pixels.shape`元素1表示图像宽度，`pixels.height`代表图像高度。
所以`pixels.date.length === 4*pixels[0]*pixels[2]`。
## 已知bug
当图案有多个上凸起和下凸起时，只能找到最左边的主干图案和下一个上凸起，不能找到其他凸起。
