学习笔记

四则运算
TokenNumber 数字
	. 1 2 3 4 5 6 7 8 9 0 的组合

Operator 运算符
	+ - * /

Whitespace 空格
	<SP>

LineTerminator 换行 
	<LF> <CR>

TerminalSymbol 终结符 
	<+><-><*></><Number><EOF>
NoneTerminalSymbol 非终结符是拿终结符组合定义出来的
	<MultiplicativeExpression> <AdditiveExpression> <Expression>
LL语法分析
	<AdditiveExpression> ::=
		<Number>
		|<MultiplicativeExpression><*><Number>
		|<MultiplicativeExpression></><Number>
		|<AdditiveExpression><+><MultiplicativeExpression>
		|<AdditiveExpression><-><MultiplicativeExpression>

字符串分析算法

字典树
	大量高重复字符串的存储与分析

KMP
	在长字符串里找模式

Wildcard: ab*c?d*abc*a?d
	带通配符的字符串模式
		只有*: ab*cd*abc*a?d
		只有?: c?d, a?d
正则
	字符串通用模式匹配
状态机
	通用的字符串分析
LL LR
	字符串多层级结构分析
