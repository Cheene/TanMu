# TanMu
实现弹幕的效果：

1. 整体的框架：
   - 顶部一个banner 存放我的名字
   - 整体的一个 article 用来存放新产生的弹幕
   - 在底部写一个表单包括 输入框、发射、清除、隐藏、显示

2. 大体的所需要的：
   - 顶部的 position 设置为 fixed 顶部固定
   - 弹幕 div 设置的宽度为 100%， 高度为 浏览器的高度-顶部的高度。并且向下移动 顶部高度的高度（margin-leftt)
   - 底部的表单 position 为 absoluted. 设置 bottom 和 left 的数值。

3. 其他所需要的:
    - 颜色、大小的随机： random();
    
    - 设置跑马灯的效果（把跑马灯的一些效果保存在一个数组里面还是用 random()调用）
    
    - 设置跑马灯的开始的位置。(random())
    
      
    
4. 添加的过程：

      - 键盘输入到文本框

      - 随机生成一个颜色的rgb数值;随机生成一个文字的大小;

      - 添加一个文本属性节点 

      - 新添加一个新的元素 marquee，将 本节节点和相关的属性节点插入;

      - 将 marquee 新追加到 div 里面。

5. 对于新添加的要求：

   -  新添加的随机性(js的insertAfter());

   - 实时性 添加一个时间控制Interval;

   - 若是想要每一次都能以相同的文本节点但是不一样的大小和颜色那么需要一个数组来存储。

6. 使用 marquee 总体的效果很差。

      - 对于此，后期的优化：
        - 点击发射后,会出现understand.
        - 清楚按钮功能不是实时的刷新。
        - 整体的项目的个数不能超过多少（marquee是行内元素）
