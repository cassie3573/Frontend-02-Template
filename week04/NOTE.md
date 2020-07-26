学习笔记
4-1. 浏览器总论 | 浏览器工作原理总论

浏览器
URL  HTTP -->   HTML  parse -->   DOM  css computing -->   DOM with CSS  layout -->   DOM with position  render -->   Bitmap
浏览器所有的目标就是从一个URL最后得到一张Bitmap，这是浏览器基础的渲染过程。

4-2. 状态机 | 有限状态机

有限状态机处理字符串
有限状态机
	• 每一个状态都是一个机器
		• 在每一个机器里，我们可以做计算、存储、输出......
		• 所有的这些机器接受的输入是一致的
		• 状态机的每一个机器本身没有状态，如果我们用函数来表示的话，它应该是纯函数(无副作用)
	• 每一个机器知道下一个状态
		• 每个机器都有确定的下一个状态(Moore)
		• 每个机器根据输入决定下一个状态(Mealy)

4-3 | 4-4 | 4-5. 状态机 | 不使用状态机处理字符串

使用有限状态机处理字符串

	• 在一个字符串中，找到字符”a”
	• 在一个字符串中，找到字符“ab”
	• 在一个字符串中，找到字符“abcdef”

4-6 | 4-7. 状态机 | 使用状态机处理字符串

JS中的有限状态机(Mealy)
//每个函数是一个状态
function state(input) //函数参数就是输入
{
	//在函数中，可以自由地编写代码，处理每个状态的逻辑
	return next;//返回值作为下一个状态 
}
/////////以下是调用////////// 
while(input) {
//获取输入
	state = state(input); //把状态机的返回值作为下一个状态
}

额外内容
	• 我们如何用状态机处理诸如“abcabx”这样的字符串?
	• 作业:使用状态机完成”abababx”的处理。
	• 可选作业:我们如何用状态机处理完全未知的pattern?
	• 参考资料:字符串KMP算法	https://en.wikipedia.org/wiki/Knuth%E2%80%93Morris%E2%80%93Pratt_algorithm

4-8. HTTP请求 | HTTP的协议解析

浏览器工作原理
HTTP协议的解析

ISO-OSI七层网络模型
应用
表示 				HTTP				require("http")
会话
-------------------------------
传输				  TCP				 require("net")
网络				  Internet
数据链路		 	      4G/5G/Wi-Fi
物理层		 	      4G/5G/Wi-Fi

TCP与IP的一些基础知识
	•流							 •包
	• 端口 						 • IP地址
	• require('net');				 • libnet/libpcap
	libnet复制构造IP包并且发送，libpcap负责从网卡抓所有的流经你网卡的IP包

4-9. HTTP请求 | 服务端环境准备

HTTP  文本型的协议
	• Request
	• Response
	POST / HTTP/1.1										       Request line
	Host: 127.0.0.1												headers
	Content-Type: application/x-www-form-urlencoded

	field1=aaa&code=x%3D1										body

	必须先由客户端发起一个Request，然后服务端回来一个response
	所以每一个Request一定对应一个response。
	Request第一项是method（常用post/get），第二项是路径（/），最后是HTTP和HTTP版本（HTTP/1.1）
	headers 多行，每一行是以key:value这样键值对的结构，行数不固定，以一个空白行结束。

4-10. HTTP请求 | 实现一个HTTP的请求

第一步HTTP请求
第一步 HTTP请求总结
	• 设计一个HTTP请求的类
	• content type是一个必要的字段，要有默认值 
	• body是KV格式
	• 不同的content-type影响body的格式

4-11. HTTP请求 | send函数的编写，了解response格式

第二步send函数
第二步 send函数总结
	• 在Request的构造器中收集必要的信息
	• 设计一个send函数，把请求真实发送到服务器 
	• send函数应该是异步的，所以返回Promise
HTTP/1.1 200 OK								status line
Content-Type: text/html						header
Date: Mon, 23 Dec 2019 06:46:19 GMT 
Connection: keep-alive 
Transfer-Encoding: chunked

26											body
<html><body> Hello World<body></html> 
0

status line    HTTP版本号（HTTP/1.1）HTTP状态码（数字200 ）HTTP状态文本(OK )
	500系列 服务器内部错误
	200 成功
	404 找不到网页
	300系列 需要进一步处理操作

4-12. HTTP请求 | 发送请求

第三步发送请求
第三步发送请求
	• 设计支持已有的connection或者自己新建connection 
	• 收到数据传给parser
	• 根据parser的状态resolve Promise

4-13. HTTP请求 | response解析

第四步Response解析
第四步 ResponseParser总结
	• Response必须分段构造，所以我们要用一个ResponseParser来“装配”
	• ResponseParser分段处理ResponseText，我们用状态机来分析文本的结构

4-14. HTTP请求 | response body的解析

第五步Response Body解析
第五步 BodyParser总结
	• Response的body可能根据Content-Type有不同的结构，因此我们会采用子Parser的结构来解决问题
	• 以TrunkedBodyParser为例，我们同样用状态机来处理body的格式

4-15. HTML解析 | HTML parse模块的文件拆分

浏览器工作原理
HTML的解析

第一步——拆分文件
第一步总结
	• 为了方便文件管理，我们把parser单独拆到文件中 
	• parser接受HTML文本作为参数，返回一颗DOM树

4-16. HTML解析 | 用FSM实现HTML的分析

第二步——创建状态机
https://html.spec.whatwg.org/multipage/parsing.html #before-attribute-name-state
第二步总结
	• 我们用FSM来实现HTML的分析
	• 在HTML标准中，已经规定了HTML的状态
	• Toy-Browser只挑选其中一部分状态，完成一个最简版本

4-17. HTML解析 | 解析标签

第三步——解析标签
第三步总结
	• 主要的标签有:开始标签，结束标签和自封闭标签 
	• 在这一步我们暂时忽略属性

4-18. HTML解析 | 创建元素

第四步——创建元素
第四步总结
	• 在状态机中，除了状态迁移，我们还会要加入业务逻辑 
	• 我们在标签结束状态提交标签token

4-19. HTML解析 | 处理属性

第五步——处理属性
第五步总结
	• 属性值分为单引号、双引号、无引号三种写法，因此需要较多状 态处理
	• 处理属性的方式跟标签类似
	• 属性结束时，我们把属性加到标签Token上

4-20. HTML解析 | 用token构建DOM树

第六步——构建DOM树
第六步总结
	• 从标签构建DOM树的基本技巧是使用栈
	• 遇到开始标签时创建元素并入栈，遇到结束标签时出栈 
	• 自封闭节点可视为入栈后立刻出栈
	• 任何元素的父元素是它入栈前的栈顶

4-21. HTML解析 | 将文本节点加到DOM树

第七步——文本节点
第七步总结
	• 文本节点与自封闭标签处理类似 
	• 多个文本节点需要合并