学习笔记
<main>一个页面只有一个main标签表示主体内容部分
	<article>
		<hgroup>
			<h1>主标题</h1>
			<h2>副标题</h2>
		</hgroup>
		<p>
			<abbr>WWW</abbr>表示WWW是某种缩写
		</p>
		<p>the <strong>World Wide Web</strong></p>
		<figure>带说明文字的图表信息 用figure标签组
			<img src="" />
			<figcaption>图表的说明文字</figcaption>
		</figure>
	</article>
</main>
strong表示一个词在文章中重要性
em表示这个词在句子里面的重音是什么

 合法元素
	• Element: <tagname>...</tagname> 
	• Text: text
	• Comment: <!-- comments -->
	• DocumentType: <!Doctype html>
	• ProcessingInstruction: <?a 1?> 
	• CDATA:<![CDATA[ ]]>

字符引用
	• &#161; 
	• &amp; 
	• &lt;
	• &quot;

 导航类操作
	• parentNode 
	• childNodes 
	• firstChild
	• lastChild
	• nextSibling
	• previousSibling
	• parentElement
	• children
	• firstElementChild
	• lastElementChild
	• nextElementSibling
	• previousElementSibling

 修改操作
	• appendChild 
	• insertBefore 
	• removeChild 
	• replaceChild

 高级操作
	• compareDocumentPosition 是一个用于比较两个节点中关系的函数。
	• contains 检查一个节点是否包含另一个节点的函数
	• isEqualNode 检查两个节点是否完全相同。
	• isSameNode 检查两个节点是否是同一个节点，实际上在JavaScript 中可以用“===”。
	• cloneNode 复制一个节点，如果传入参数 true，则会连同子元素 做深拷贝。

Array.prototype.slice.call(element.childNodes)
把element的子节点转为数组

 Range API
	• var range = new Range()
	• range.setStart(element, 9)
	• range.setEnd(element, 4)
	• var range = document.getSelection().getRangeAt(0);

	• range.setStartBefore 
	• range.setEndBefore 
	• range.setStartAfter
	• range.setEndAfter
	• range.selectNode
	• range.selectNodeContents

	• var fragment = range.extractContents()
	• range.insertNode(document.createTextNode("aaaa"))

CSSOM
 document.styleSheets
	• document.styleSheets 
	• 案例

 Rules
	• document.styleSheets[0].cssRules
	• document.styleSheets[0].insertRule("p { color:pink; }", 0) 
	• document.styleSheets[0].removeRule(0)

	• CSSStyleRule
	• CSSCharsetRule
	• CSSImportRule
	• CSSMediaRule
	• CSSFontFaceRule
	• CSSPageRule
	• CSSNamespaceRule 
	• CSSKeyframesRule 
	• CSSKeyframeRule
	• CSSSupportsRule
	• ......

	• CSSStyleRule
	• selectorText String 
	• style K-V结构

 getComputedStyle
	• window.getComputedStyle(elt, pseudoElt); 
	• elt 想要获取的元素
	• pseudoElt 可选，伪元素
	getComputedStyle是一个非常有用的属性，它能取到我们页面上的元素最终真实渲染的时候所需要的css属性，同时也能够访问到伪元素上。

8-8. 浏览器API | CSSOM View
 window
	• window.innerHeight, window.innerWidth 		
		我们浏览器的HTML的内容实际上渲染所用的区域的宽度和高度
	• window.outerWidth, window.outerHeight 
		浏览器窗口总共占的尺寸
	• window.devicePixelRatio
		我们屏幕上的物理像素和代码里的逻辑像素px的比值，正常的设备这两个比值事1:1，在Retina屏上是1:2，有些安卓机上有1:3的DPR，	DPR在实现代码布局非常相关。
	• window.screen
	• window.screen.width
	• window.screen.height 
		实际屏幕的宽高
	• window.screen.availWidth 
	• window.screen.availHeight
		可以使用的宽和高（不是浏览器可以使用，安卓机会把屏幕一部分作为操作的物理按钮 ）

 Window API
	• window.open("about:blank", "_blank" ,"width=100,height=100,left=100,right=100" )
	• moveTo(x, y)
	• moveBy(x, y)
	• resizeTo(x, y)
	• resizeBy(x, y)


 scroll
	• scrollTop
	• scrollLeft
	• scrollWidth
	• scrollHeight
	• scroll(x, y)
	• scrollBy(x, y)
	• scrollIntoView()

• window 
	• scrollX 
	• scrollY
	• scroll(x, y)
	• scrollBy(x, y)

 layout
	• getClientRects()
	• getBoundingClientRect()

标准化组织
	• khronos 			在计算机图形和视频方面非常有权威性的一个组织，加入的成员跟W3C高度重合，最著名的作品是OpenGL。
	• WebGL				也是由khronos组织做的标准化
	• ECMA
	• ECMAScript 		javascript在ECMA以ECMAScript作为名字
	• WHATWG 			WHATWG是从W3C分裂出去的一个子组织，它的标准和W3C很多标准重合，它的标准是living standard的，总是最新版
	• HTML
	• W3C
	• webaudio
	• CG/WG
