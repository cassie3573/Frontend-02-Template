学习笔记
语言按语法分类
	• 非形式语言
	• 中文，英文
	• 形式语言(乔姆斯基谱系) • 0型 无限制文法
	• 1型 上下文相关文法
	• 2型 上下文无关文法
	• 3型 正则文法

产生式(BNF)
	• 用尖括号括起来的名称来表示语法结构名
	• 语法结构分成基础结构和需要用其他语法结构定义的复合结构 • 基础结构称终结符
	• 复合结构称非终结符
	• 引号和中间的字符表示终结符 • 可以有括号
	• * 表示重复多次
	• | 表示或
	• + 表示至少一次
通过产生式理解乔姆斯基谱系
	• 0型 无限制文法
	 • ?::=?
	• 1型 上下文相关文法
	 • ?<A>?::=?<B>?
	• 2型 上下文无关文法
	 • <A>::=?
	• 3型 正则文法
	• <A>::=<A>?
	• <A>::=?<A> ×


巴科斯范式
（英语：Backus Normal Form，缩写为 BNF），又称为巴科斯-诺尔范式（英语：Backus-Naur Form，缩写同样为 BNF，也译为巴科斯-瑙尔范式、巴克斯-诺尔范式），是一种用于表示上下文无关文法的语言，上下文无关文法描述了一类形式语言。它是由约翰·巴科斯（John Backus）和彼得·诺尔（Peter Naur）首先引入的用来描述计算机语言语法的符号集。

尽管巴科斯范式也能表示一部分自然语言的语法，它还是更广泛地使用于程序设计语言、指令集、通信协议的语法表示中。大多数程序设计语言或者形式语义方面的教科书都采用巴科斯范式。在各种文献中还存在巴科斯范式的一些变体，如扩展巴科斯范式 EBNF 或扩充巴科斯范式 ABNF。

发展历史

约翰·巴科斯首次在ALGOL 58中实现巴科斯范式。彼得·诺尔在ALGOL 60之中，进一步发展它的概念并将它的符号加以简化，称其为巴科斯范式（Backus Normal Form）。但高德纳主张应称为巴科斯-诺尔范式（Backus–Naur Form），因为它不算是一种正规形式（Normal form）。

介绍

BNF 规定是推导规则(产生式)的集合，写为：

<符号> ::= <使用符号的表达式>

这里的 <符号> 是非终结符，而表达式由一个符号序列，或用指示选择的竖杠 '|' 分隔的多个符号序列构成，每个符号序列整体都是左端的符号的一种可能的替代。从未在左端出现的符号叫做终结符。


现代语言的特例
	• C++中，* 可能表示乘号或者指针，具体是哪个，取决于星号前 面的标识符是否被声明为类型
	• VB中，< 可能是小于号，也可能是XML直接量的开始，取决于 当前位置是否可以接受XML直接量
	• Python中，行首的tab符和空格会根据上一行的行首空白以一定 规则被处理成虚拟终结符indent或者dedent
	• JavaScript中，/ 可能是除号，也可能是正则表达式开头，处理 方式类似于VB，字符串模板中也需要特殊处理 }，还有自动插入 分号规则

形式语言—用途
 	• 数据描述语言：拿到一个纯粹的数据，存储一个纯粹的数据，有一定的数据描述性质的语言，本身是没有办法进行编程的 
		JSON, HTML, XAML, SQL, CSS
	• 编程语言：偏申明式的函数语言，可以进行编程
		C, C++, Java, C#, Python, Ruby, Perl,
		Lisp, T-SQL, Clojure, Haskell, JavaScript
形式语言—表达方式 
	• 声明式语言： 只告诉你它的结果是怎么样的
		JSON, HTML, XAML, SQL, CSS, Lisp, Clojure, Haskell
	• 命令型语言：告诉你达成这个结果每个步骤是怎样的
		C, C++, Java, C#, Python, Ruby, Perl, JavaScript

图灵完备性
	图灵完备性
	• 命令式——图灵机
	 • goto
	• if和while
	• 声明式——lambda
	• 递归

动态与静态
	• 动态:
	• 在用户的设备/在线服务器上
	• 产品实际运行时
	• Runtime
	• 静态:
	• 在程序员的设备上
	• 产品开发时
	• Compiletime

类型系统
	• 动态类型系统与静态类型系统
	• 强类型与弱类型
	• String + Number
	• String == Boolean
	• 复合类型 
	• 结构体
	• 函数签名
	• 子类型
	• 泛型
	• 逆变/协变

凡是能用Array<Parent>的地方， 都能用Array<Child>
凡是能用Function<Child>的地方， 都能用Function<Parent>


Types
	• Number 
	• String
	• Boolean 
	• Object
	• Null 
	• Undefined 	
	• Symbol		

Number—Grammar
	• IEEE 754 Double Float（双精度浮点类型）
	• Sign(1)				（1个符号位，0表示正的，1表示负的）
	• Exponent(11)			（11个指数位）
	• Fraction(52)		 	（52个精度位）

	• DecimalLiteral 			（十进制）
		• 0
		• 0.
		• .2
		• 1e3
	• BinaryIntegerLiteral 		（二进制）
		• 0b111
	• OctalIntegerLiteral 		（八进制）
		• 0o10
	• HexIntegerLiteral 		（十六进制）
		• 0xFF	

0.1 + 0.2 不等于 0.3是由于三次转换加上一次运算的精度损失造成的
使用 JavaScript 提供的最小精度值
console.log( Math.abs(0.1 + 0.2 - 0.3) <= Number.EPSILON);
检查等式左右两边差的绝对值是否小于最小精度，才是正确的比较浮点数的方法。


String
	• Character		字符
	• Code Point 		码点
	• Encoding		编码方式

ASCII		
	127个字符
		26个大写字母	26个小写字母 数字0-9 各种制表符  各种特殊符号  换行等
Unicode		庞大的编码集	000-FFF
UCS			只有4个0～4个F这样的一个范围的字符集
GB	
	GB2312
	GBK(GBK13000)
	GB18030
ISO-9959
BIG5		大五码

Boolean
	• true
	• false
Object
	三只一模一样的鱼，其实是三个对象。其中一只鱼发生了状态改变，失去了尾巴。
	其它两只鱼并不受到影响。 因此，当我们在计算机中描述这三只鱼时，必须把相同的数据存储三份。

	所以任何一个对象都是唯一的，这与它本身的状态无关。

	所以，即使状态完全一致的两个对象，也并 不相等。
	我们用状态来描述对象。我们状态的改变即是行为。

Object-Class
	类是一种常见的描述对象的方式。

	而”归类”和”分类”则是两个主要的流派。

	对于”归类”方法而言， 多继承是非常自然的事情。 如C++
	而采用分类思想的计算机 语言，则是单继承结构。 并且会有一个基类Object。

	Object-Prototype
	原型是一种更接近人类原 始认知的描述对象的方法。
	我们并不试图做严谨的分类，而是采用“相似”这样的方式去描述对象。

	任何对象仅仅需要描述它自己与原型的区别即可。


	我们不应该受到语言描述的干扰。

	在设计对象的状态和行为时，我们总是遵循 “行为改变状态”的原则。

Data Property
	[[value]]
	writable
	enumerable
	configurable

Accessor Property
	get
	set
	enumerable
	configurable

JavaScript用属性来统一抽象对象状态和行为。
一般来说，数据属性用于描述状态，访问器属性则用于描述行为。

数据属性中如果存储函数，也可以用于描述行为。


当你把configurable设为false之后writable、enumerable、configurable和value都变得不可更改了
writable为false，仅仅是通过点运算不可更改，我们仍然可以通过define property去修改writable，这样我们可以强行把数据变得可更改。

当我们访问属性时，如果当前对象没有，则会沿着原型找原型对象是否有此名称的属性，而原型对象还可能有原型，因此，会有“原型链”这一说法。

这一算法保证了，每个对象只需要 描述自己和原型的区别即可。

• {} . [] Object.defineProperty	
	它们提供了一个基本的对象机制，我们能通过语法去创建对象、访问属性和定义新的属性以及去改变属性的特征值，这个是基本的面向对象能力。

• Object.create / Object.setPrototypeOf / Object.getPrototypeOf
	这组是基于原型的描述对象的方法，我们可以通过Object.create在指定原型的前提下创建对象，而我们又可以去修改一个对象的原型或者获取一个对象的原型。这组叫基于原型的对象API。

• new / class / extends
	用来以基于分类的方式去描述对象， 尽管在运行时仍然会被转换成javascript的原型相关的访问，但从语法上来看，从它的抽象能力上来看，它完全就是一个基于类的面向对象的组织方式

• new / function / prototype
	ES3 版本

 Null 		
	有值，值为空，typeof的值会是object（问题）

Undefined 	
	没有定义过值

Symbol		
	新加的一个基本类型，一定程度上代替了String的作用，可以用与object里的索引，Symbol和String最大的区别就是String全天下的String都是一样，Symbol是javascript特有的一个概念，专用与object属性名的特殊基本类型。

Function Object

	前面讲述了JavaScript中的一般对象。
	但JavaScript中还有一些特殊的对象，比如函数对象。
	除了一般对象的属性和原型，函数 对象还有一个行为[[call]]。
	我们用JavaScript中的function 关 键字、箭头运算符或者Function构 造器创建的对象，会有[[call]]这个 行为。
	我们用类似 f() 这样的语法把对象 当做函数调用时，会访问到[[call]] 这个行为。
	如果对应的对象没有[[call]]行为， 则会报错。

Host Object

	javascript语言标准没有去定义，而是由宿主环境定义的，比如在浏览器里我们可以访问到window和setTimeout，这些都和JavaScript原生没有任何关系。原生的Host Object可以去实现一些JavaScript语言里面并不支持但JavaScript语法支持的特性。
	另外Host Object也可以实现call方法甚至实现construct方法，来支持函数调用和new运算。