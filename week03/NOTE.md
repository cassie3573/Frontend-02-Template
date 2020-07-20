学习笔记
javascript
  • Atom
  • Expression
  • Statement
  • Structure
  • Program/Module

Atom
Grammar
  • Grammar Tree vs Priority				    语法树跟运算符优先级的关系
  • Left hand side & Right hand side		运算符左值与右值的区别
RunTime
  • Type Convertion						类型转换
  • Reference							    引用类型

Tree vs Priority
  • + -
  • * /
  • ()

运算符优先级会影响到语法树的构成，JavaScript的标准中是用产生式来描述运算符的优先级的

Expression
运算符优先级最高的是Member运算
  • Member
  • a.b		   	成员访问
  • a[b]			成员访问，可以支持运行时的字符串 
a.b和a[b]的区别就是b要不要是一个字符串

  • foo`string`		反引号的字符串前面加一个函数名，会把这个反引号的字符串部分拆开传进函数当参数，和Member运算是同一级的优先级
  • super.b		    只有在class构造函数里可以用
  • super['b']

super.b和super['b']都属于Member运算，优先级和a.b和a[b]是一样的
  • new.target		new.target前后两个词都是固定的，和Member运算是同一级的优先级
  • new Foo()
  • New				    不带括号的new被单独的设为一个优先级，称作new表达式，优先级更低
  • new Foo	
案例
  new a()()			第一个()跟着前面的new运算
  new new a()		()跟第二个new优先级结合
带括号的new运算优先级更高 

Reference		引用类型，标准中的类型
  • Object
  • Key
一个reference分成两个部分，第一部分是一个对象，第二个部分是一个key
  • delete
  • assign
如果我们做加法或减法的时候，我们会把reference直接解引用，然后像普通的变量一样去使用
Member表达式出来的，如果是放在delete之后，那么我们就需要用到引用的特性，因为我们要知道是删除哪一个对象的哪一个key。assign也一样，当我们进行赋值的时候，当我们把Member运算放在一个等号的左边的时候，我们同样需要知道把右边的表达式赋值给哪一个对象的哪一个属性，这就是引用类型的关键特征。

Expressions
  • Call				优先级低于new 也低于前面的所有Member运算
  • foo()
  • super()
  • foo()['b']
  • foo().b
  • foo()`abc`
案例
  new a()['b']
  ()先和new相结合 new出来一个a对象，然后访问它的b属性

Left handside & Right handside
案例
  a.b = c;		✅  	a.b是Left handside  只有Left handside才有资格放到等号的左边
  a+b = c		  ❌		a+b是Right handside

  • Update		是Right handside，自增自减
  • a++
  • a--
  • --a
  • ++a
案例
  ++ a ++			不合法
  ++ (a ++)		不合法

Unary	单目运算符
  • delete a.b		后边必须是一个reference类型才生效
  • void foo()		void运算符把后边不管什么东西都变成Undefined，类似空白和回车，可以起到很好的改变语法结构的作用	
  • typeof a		typeof也是一个单目运算符
  • +a				正号并不会改变后边表达式的值，如果后边是字符串，会发生一些类型转换
  • -a				
  • ~a				~是一个位运算，把一个整数按位取反，如果不是整数，就会把它强制转为整数
  • !a				针对布尔型的运算，用两个非(!!)来把一个任何类型的数强制转换成布尔类型
  • await a			也是一个单目运算符，对更大的语法结构造成一些影响

Exponental
  • **			JavaScript唯一一个右结合运算，表示乘方

案例
  3**2**3
  3**(2**3)

Multiplicative			乘除取余，要求所有的数字都是Number类型，会发生类型转换
* / %
Additive				    加减，加号，一种是字符串相连接，二是两个数字相加，
+ - 
Shift				        移位运算，也是位运算的一种，左移、右移、带符号的右移
<<  >>   >>>
Relationship			  关系比较表达式
<    >    <=    >=
instanceof    in

Equality
  • ==				JavaScript中类型转换最为复杂的一种运算，基本原则就是类型相等的时候正常比较，类型不同的时候会优先把布尔类型的变量转换成Number类型
  • !=
  • ===
  • !==
Bitwise
  • &  ^  |		按位与、异或和按位或，优先级比相等的比较更低一些

Logical			逻辑运算的优先级是最低的，与和或的关系，有短路原则
  • &&		前半部分为false 后半部分不执行
  • ||			前半部分为true 后半部分不执行
Conditional		三目运算符  有短路逻辑，条件为真冒号后半部分不执行
  • ? :			条件?条件为真执行语句:条件为假执行语句;


Type Convertion
  • a+b				一定要作用与数字或字符串，一旦a和b属于别的类型，就会发生类型转换
  • "false"==false
  • a[o]=1;
对表达式来说，类型转换是一个重要的基础设施，在整个JavaScript中最复杂的类型转换就是双等号，类型相同可以进行比较，类型不同全转换为Number再互相比较。推荐使用三等号，或者做完了类型转换再进行比较。

          Number     String      Boolean     Undefined    Null     Object    Symbol
Number      -                     0 alse         ×          ×      Boxing       ×
String                  -        "" false        ×          ×      Boxing       ×
Boolean   true 1     'true'
          false 0    'false'        -            ×          ×      Boxing       ×
Undefined   NaN    'Undefined'     false         -          ×        ×          ×
Null        0        'null'        false         ×          -        ×          ×
Object   valueOf     valueOf  
                     toString      true          ×          ×        -          ×
Symbol      ×           ×            ×           ×          ×      Boxing       -

Number转换布尔值		                0为false 其他数字为true
Number转换object		                装箱转换
String转换布尔值		               	''为false 其他为true
布尔值转换Number		                false为0  true为1
布尔值转换String		               	true为'true' false为'false'
布尔值转换object		               	装箱转换
布尔变量是没有办法转换成Undefined、Null和Symbol的
Undefined转成Number		            为NaN（Not a Number）
Undefined转成String		            为'Undefined'
大部分时候Undefined是不会参与任何类型转换的
Undefined转成布尔变量	为false
Null转成Number			                为0
Null转成String			                为'Null'
Null转成布尔变量		                为false
Undefined和Null都不能转换成object
object转成Number		                 会调用valueOf成员函数
object转换String		                 会先后调用valueOf和tostring
object转换布尔变量	                 为true
Symbol没有办法转换成任何其他变量，最终只能通过Boxing转成Object


Unboxing	拆箱转换
拆箱转换是指我们把一个Object转成基本类型，最主要的过程叫做ToPremitive
  • ToPremitive
  • toString vs valueOf
  • Symbol.toPrimitive
案例
  var o={
  toString() { return "2" },
  valueOf() { return 1 },
  [Symbol.toPrimitive]() { return 3 }
  }
  var x={}
  x[o]=1
  console.log("x"+o)

有Symbol.toPrimitive会忽略toString和valueOf方法
没有toPrimitive情况下，当o作为属性名的时候会优先调用toString方法，位运算一定先转Number，转Number就一定先调用valueOf， 转字符串先调用toString。

Boxing 装箱转换
类型 对象 值
  Number   new Number(1)   1
  String   new String("a")   "a"
  Boolean   new Boolean(true)   true
  Symbol   new Object(Symbol("a"))   Symbol("a")

对基础类型，Object提供了一个包装的类，Undefined和Null是没有包装的类
Number转对象：如果直接调用Number会返回一个值1，如果使用new去调用会返回一个Object这个时候Number对象和这个值1存在着一个装箱关系，String和Boolean同理。
Symbol是没有办法被new调用的，想要创建一个Symbol对象，需要用Object构造器给它再包一层，只能通过调用Symbol来获得一个Symbol类型的值，但是加了new会抛错。

我们使用Member，也就是说使用点或者方括号去访问属性的时候，如果点和方括号之前的变量或者是表达式得到的是一个基础类型，就会自动调用装箱过程，不需要再去调用标准里面的Number、String、Boolean这些构造器。

练习：
StringToNumber
NumberToString
我们尽可能的根据Number的格式的定义，在我们上一节课基本类型的时候已经给大家讲了，Number有4种进制的定义，那么StringToNumber能够去解析这4种类型的，并把它变成Number，NumberToString是一个逆向的过程，传一个进制解析成这个进制的字符串。
我们今天的课程带着大家从语法结构上是从小到大，运算符优先级上是从高到低，给大家整个把运算符和表达式讲解了一遍，之后我们又挑出来了一个在表达式的解析中非常重要的特性，就是类型转换。

Statement  声明
Grammar 语法
  • 简单语句 
  • 组合语句 	控制简单语句的执行顺序
  • 声明句
Runtime 运行时
  • Completion Record  语句执行结果的记录
  • Lexical Environment  作用域

Completion Record		语句的完成状态
if(x == 1) return 10;
在JavaScript中需要一种数据结构来存储语句完成的结果，这就是Completion Record的类型，它不在咱们语言的基本类型里面，因为咱们在JavaScript里面无论如何努力，都没有办法真正的访问到数据，没有办法复制给变量，也没有办法作为参数，任何环节都没有办法得到它，但是它又确确实实存在于我们运行JavaScript的电脑里面。你每写一个语句由JavaScript引擎去执行之后就会产生Completion Record。Completion Record决定了我们的语句是继续向下执行还是停止执行。
• 我们需要一个数据结构来描述语句的执行结果:是否返回了?返 回值是啥?等等......

Completion Record的组成分三个部分
  • [[type]]: normal, break, continue, return, or throw 
  • [[value]]: 基本类型
  • [[target]]: label（语句前面加一个标识符和一个冒号(outer:/inner:)，break, continue可能会和带label的语句发生交互）

简单语句（里面不会再容纳其他语句的语句）
  • ExpressionStatement		表达式语句（完全由表达式组成）
  • EmptyStatement			空语句，连改变语法结构的作用都没有，从语言的完备性来讲允许单独一个分号（;）
  • DebuggerStatement 		专门给调试时使用的语句，触发一个断点，在用户的电脑上是没有作用的（debugger;）
  • ThrowStatement			抛出异常（throw空格+表达式）
  • ContinueStatement 		和循环语句相匹配，结束当次循环，后面的循环继续
  • BreakStatement			和循环语句相匹配，结束整个循环
  • ReturnStatement		在函数里面用，会返回一个函数的值

复合语句
  • BlockStatement			把单条语句变成多条语句，完成语句树状结构的重要基础设施 {语句列表}
  • IfStatement				分支结构，条件语句 if...else...
  • SwitchStatement		多分支结构
  • IterationStatement 		循环，while循环、do-while循环、for循环、For await循环
  • WithStatement			通过with打开一个对象，然后把这个对象的所有属性直接放进作用域里（拒绝使用）
  • LabelledStatement 		相当于给语句起了个名字
  • TryStatement			try...catch...finally   花括号由try定义，try不能省略话括号

 block
• BlockStatement 
{
      ░░░░
      ░░░░
      ░░░░
}
  • [[type]]: normal 
  • [[value]]: --
  • [[target]]: --
 Iteration
  • while( ▒▒ ) ░░░░					可能一次都没有执行
  • do ░░░░ while( ▒▒ );				至少执行一次
  • for( ▓▓ ; ▒▒ ; ▒▒) ░░░░ 			
  • for( ▓▓ in ▒▒ )░░░░				用掉in，大部分不再允许in出现
  • for( ▓▓ of ▒▒ )░░░░
  • for await( of )
  • var
  • const / let 
  • in
 标签、循环、break、continue
  • LabelledStatement 			可以跳出多层循环
  • IterationStatement 
  • ContinueStatement 
  • BreakStatement
  • SwitchStatement
  • [[type]]: break continue 
  • [[value]]: --
  • [[target]]: label
 try
try {						花括号一定得有，和语法设计有关
░░░░░░░░
} catch( ▓▓▓ ) {			catch圆括号里面的变量被赋值为try里面抛出来的错误，可以有label
░░░░░░░░
} finally {
░░░░░░░░
}
  • [[type]]: return 
  • [[value]]: --
  • [[target]]: label
return是一种打断性的结构，但是在try-catch-finally里面即使你在catch里return，finally里的代码一定会继续执行。
 声明
  • FunctionDeclaration
  • GeneratorDeclaration
  • AsyncFunctionDeclaration
  • AsyncGeneratorDeclaration 
  • VariableStatement					变量声明，既有声明的作用，又有实际执行计算的能力
  • ClassDeclaration						类
  • LexicalDeclaration					const let

  • function				函数声明
  • function *				Generator声明
  • async function			异步函数声明
  • async function * 			异步产生器声明
  • var					
上面5个声明共同特点：作用范围只认Function Body，其他的东西都不好使，而且没有先后关系，永远会被当作出现在函数的第一行去处理
var的声明作用是相当于出现在函数的头部，变量已经被声明为一个函数级的局部变量，实际上后边的赋值并没有发生，这是和Function声明的一个区别

  • class 
  • const 
  • let
class、const、let三个声明的共性：在声明前使用会报错。（鼓励使用）

 预处理(pre-process)
所谓预处理是指在一段代码执行之前，JavaScript引擎会对代码本身做一次预先处理的机制。

var a = 2;
void function (){
a = 1; 
return; 
var a;
}(); 
console.log(a);//2

(理论上var a在return之后，是不会执行的，但是预处理机制会把var a找到并生效，a=1被var a给占据了)
注意：var不管写在函数的哪一个位置，是if里面还是return之后，甚至catch、finally里面都没有区别，都会被预处理挑出来，把这个变量声明到函数的作用级别。

var a = 2;
void function (){
a = 1; 
return; 
const a;
}(); 
console.log(a);//执行抛错（函数里的a成为局部变量）



 作用域
在代码里面变量从哪到哪发生作用，这个东西就叫作用域。
var的作用域是它所在的函数体
const的作用域就在它所在的花括号，如果在循环语句里在const或者let声明，它的作用域就是整个循环语句。
var a = 2;
void function (){
a = 1;
{
var a;
}
}();
console.log(a);

var a = 2;
void function (){
a = 1; 
{
const a;
}
}();
console.log(a); 


用花括号把函数分成小节，函数的结构非常明确，不会产生前后变量干扰。

3-6. JS结构化 | 宏任务和微任务
JS执行粒度（运行时）
• 宏任务								JavaScript语言讨论的最大粒度的范围
• 微任务（Promise）					在JavaScript里只有Promise会产生
• 函数调用（Execution Context）
• 语句/声明（Completion Record）
• 表达式（Reference）
• 直接量/变量/this......

宏任务和微任务的区分采用jsc里的说法，宏任务是传给JavaScript引擎的任务，微任务是在JavaScript引擎内部的任务，由Promise产生的任务。

事件循环 EventLoop
获取代码-执行代码-等待

7. JS结构化 | JS函数调用
LexicalEnvironment
• this
• new.target
• super
• 变量

VariableEnvironment
VariableEnvironment是个历史遗留的包袱，仅仅用于处理var声明。