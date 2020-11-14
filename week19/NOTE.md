学习笔记

持续集成

	daily build

		通过服务端的代码，在每天晚上进行一次全局的build

	BVT（build verification test）

		构建的验证测试，其实是一种猫冒烟测试，对build成功后的东西做一个基本的验证。

Git Hooks

	和其它版本控制系统一样，Git 能在特定的重要动作发生时触发自定义脚本。 有两组这样的钩子：客户端的和服务器端的。 客户端钩子由诸如提交和合并这样的操作所调用，而服务器端钩子作用于诸如接收被推送的提交这样的联网操作。

	pre-commit

	pre-push

	pre-receive

命令

	ls						查看文件

	ls -a					查看隐藏文件

	ls -l 					查看文件详细信息

	open					打开文件夹

	chmod +x 				修改执行权限

	git stash push 			可以保存当前的修改，将工作和暂存区的状态存储起来以备将来使用，
							并将当前工作区和暂存区重置为最近一次提交后的状态

	git stash list 			显示git栈中的所有工作区内容的备份

	git stash pop 			从git栈中获取到最近一次stash进去的内容，恢复工作区的内容

eslint

	ESLint最初是由Nicholas C. Zakas 于2013年6月创建的开源项目。它的目标是提供一个插件化的javascript代码检测工具。

	安装 ESLint

		npm install eslint --save-dev

	设置一个配置文件

		npx eslint --init

