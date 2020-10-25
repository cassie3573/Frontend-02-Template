学习笔记

webpack

	最初为node设计的一款打包工具，能力是把node的代码打包成一个浏览器可用的代码。

	npm install -g "webpack-cli"	全局安装webpack-cli

	npm uninstall webpack-cli		全局删除webpack-cli

	不想全局安装，只在项目里安装webpack

		npx webpack 	没安装就安装再执行，安装了就直接执行（较好的体验）

	local安装

		npm install webpack-cli --save-dev

	entry

		入口文件，一次webpack的整个过程只支持一个文件及其它所有依赖的文件的打包

	output

		输出的文件名和输出的路径


	loader是webpack的灵魂，可以认为是一个纯粹的文本的转换。

Babel

	把新版本js编译成老版本的js。

	命令行特有的一种重定向标准输出的这种方式：一个大于号后面跟一个文件名

		babel ./src/sample.js  >1.txt