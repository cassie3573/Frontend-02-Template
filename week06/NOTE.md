学习笔记

为什么first-letter可以设置float之类的，而first-line不行呢?

::first-letter CSS伪元素，会选中块级元素第一行的第一个字母，并且文字所处的行之前没有其他内容（如图片和内联的表格）。

::first-line CSS伪元素，在块级元素的第一行应用样式。第一行的长度取决于很多因素，包括元素宽度，文档宽度和文本的文字大小。

和其他所有的 伪元素一样，::first-line 不能匹配任何真实存在的html元素。

::first-letter、::first-line 伪元素只能在块容器中，所以，::first-letter、::first-line伪元素只能在一个display值为block, inline-block, table-cell 或者 table-caption中有用。在其他的类型中，::first-letter、::first-line 是不起作用的。

个人理解：first-letter选取的内容是固定的，只选取内容的第一个字，相当于<span>N</span>
first-line选取内容的第一行，但第一行的内容受排版影响内容是不固定的。在float计算的时候有比较大的困难。

first-line:
	font系列
	color系列
	background系列
	word-spacing
	letter-spacing
	text-decoration
	vertical-align
	text-transform
	line-height


first-letter:
	font系列
	color系列
	background系列
	text-decoration
	text-transform
	word-spacing
	letter-spacing
	line-height
	float
	vertical-align（只有在 float 为 'none' 时）
	盒模型系列：margin、padding、border

 CSS总体结构
	• @charset
	• @import
	• rules
		• @media
		• @page 
		• rule
 At-rules
 	• @charset : https://www.w3.org/TR/css-syntax-3/
	• @import :https://www.w3.org/TR/css-cascade-4/
	• @media :https://www.w3.org/TR/css3-conditional/
	• @page : https://www.w3.org/TR/css-page-3/
	• @counter-style :https://www.w3.org/TR/css-counter-styles-3 • @keyframes :https://www.w3.org/TR/css-animations-1/
	• @fontface :https://www.w3.org/TR/css-fonts-3/
	• @supports :https://www.w3.org/TR/css3-conditional/
	• @namespace :https://www.w3.org/TR/css-namespaces-3/

 CSS规则
	• 选择器
	• 声明
		• Key
		• Value

	• Selector
		• https://www.w3.org/TR/selectors-3/ 
		• https://www.w3.org/TR/selectors-4/
	• Key
		• Properties
		• Variables: https://www.w3.org/TR/css-variables/
	• Value
		• https://www.w3.org/TR/css-values-4/



 选择器语法
• 简单选择器 
	•*						通用选择器
	• div svg|a 			元素选择器
	• .cls 					类选择器
	• #id 					ID选择器
	• [attr=value] 			属性选择器
	• :hover 				伪类选择器
	• ::before				伪元素选择器

 伪类
• 链接/行为 
	• :any-link
	• :link :visited 
	• :hover
	• :active
	• :focus
	• :target
• 树结构
	• :empty
	• :nth-child()
	• :nth-last-child()
	• :first-child :last-child :only-child
• 逻辑型
	• :not伪类
	• :where :has

 伪元素
	• ::before
	• ::after
	• ::first-line
	• ::first-letter


 选择器语法
• 复合选择器
	• <简单选择器><简单选择器><简单选择器> 
	• * 或者 div 必须写在最前面   div#id
• 复杂选择器
	• <复合选择器><sp><复合选择器> • <复合选择器>">"<复合选择器>
	• <复合选择器>"~"<复合选择器>
	• <复合选择器>"+"<复合选择器>
	• <复合选择器>"||"<复合选择器>

div#a.b .c[id=x]		[0,1,3,1]

#a:not(#b)				[0,2,0,0]

*.a						[0,0,1,0]

div.a 					[0,0,1,1]

!important > 内联 > ID选择器 > (伪类选择器 = 属性选择器 = 类选择器) > (元素选择器(tag) = 伪元素选择器(:before|:after)) > 通用选择器(*) > 继承的样式

:not(选择器)中:not伪类不参与优先级计算，但:not(选择器) 里边的 “选择器” 参与优先级计算