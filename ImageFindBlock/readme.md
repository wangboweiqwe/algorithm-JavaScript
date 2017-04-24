# 将一张图片里的小块找出并找到每个小块的像素数
## 运行方法
### cd 当前目录，node test.js
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
