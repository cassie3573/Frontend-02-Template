学习笔记

Proxy
	对象用于定义基本操作的自定义行为（如属性查找、赋值、枚举、函数调用等）。
	const p = new Proxy(target, handler);

		• target
			• 要使用 Proxy 包装的目标对象（可以是任何类型的对象，包括原生数组，函数，甚至另一个代理）。

		• handler
			• 一个通常以函数作为属性的对象，各属性中的函数分别定义了在执行各种操作时代理 p 的行为。
			

Range
	表示一个包含节点与文本节点的一部分的文档片段

	创建range
		document.createRange()
		一旦一个 Range 对象被建立，在使用他的大多数方法之前需要去设置他的临界点

	选择节点
		• 选择整个节点，包括子节点
			• document.createRange().selectNode(Node);

		• 选择节点的子节点
			• document.createRange().selectNodeContents(Node);

		• 精细选择节点
			设置 Range 的起点
				• document.createRange().setStart(startNode, 节点偏移量);

			设置 Range 的终点
				• document.createRange().setEnd(endNode, 节点偏移量);

	操作节点
		• Range.deleteContents() 从文档中移除 Range 包含的内容

		• Range.extractContents() 把 Range 的内容从文档树移动到一个文档片段中, 并返回文档片段

		• Range.CloneContents() 返回一个包含 Range 中所有节点的文档片段。

		• Range.insertNode() 在 Range 的起点处插入一个节点。

		• Range.surroundContents() 将 Range 的内容移动到一个新的节点中。 