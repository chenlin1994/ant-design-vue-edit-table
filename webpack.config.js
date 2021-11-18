/**
 * 入口 entry  指示webpack应该使用哪个模块作为构建其内部依赖图的开始 可以通过在webpack配置中配置entry属性来指定一个入口起点，默认值为./src
 *  可扩展的webpack配置是指，可重用并且可以与其它配置组合使用，用于将关注点从environment， build target，runtime中分离，然后使用专门的工具 webpack-merge将它们合并
 *  每个bundle中都有一个webpack引导（bootstrap) 只有一个入口起点的单页应用程序
 *  在多页应用中，服务器将会为你获取一个新的HTML文档，页面重新加载新文档，并且自愿被重新下载
 *  CommonsChunkPlugin 插件使用
 *
 * 输出 output 告诉webpack在哪里输出它所创建的bundles以及如何命名这些文件 默认值为./dist 可以通过在配置中指定一个output字段来配置这些处理过程
 *  配置output选项可以控制wepback如何向硬盘写入编译文件，__webpack_public_path__
 *
 * loader 让webpack能够去处理那些非javascript文件（webpack自身只理解javascript） loader可以将所有类型的文件转换为webpack能够处理的有效模块
 *      本质上 wepback loader将所有类型的文件，转换为应用程序的依赖图（和最终的bundle)可以直接引用的模块
 *  loader用于对模块的源代码进行转换，loader可以使你在import或加载模块时预处理文件，loader可以将文件从不同的语言转换为javascript或将内联图像转换为data URL
 *  loader深圳允许直接在javascript模块中import CSS文件
 *  css-loader  webpack加载css文件
 *  使用loader
 *      在应用程序中，有三种使用loader的方式
 *     配置:在wepback.config.js文件中指定loader
 *     内联 在每个import语句中显式指定loader
 *     CLI 在shell命令中指定它们
 *  loader特性
 *    1.loader支持链式传递，能够对资源使用流水线pipeline，一组链式的loader将按照相反的顺序执行，loader链中的第一个loader返回值给下一个loader，在最后一个loader，返回wepbak所预期的javascript
 *    2.loader可以是同步的，也可以是异步的
 *    3.loader运行在node.js中，并且能够执行任何可能的操作
 *    4.loader接收查询参数，用于对loader传递配置
 *    5.loader也能够使用options对象进行配置
 *    6.可以将普通的npm模块导出为loader，做法是在package.json里定义一个loader字段
 *    7.插件可以为loader带来更多特性
 *    8.loader能够产生额外的任意文件
 *  plugins 插件
 *    webpack插件是一个具有apply属性的javascript对象 apply属性会被webpack compiler调用
 *  
 * plugins 用于执行范围更广的任务，插件的范围包括 从打包优化和压缩，一直到重新定义环境中的变量
 *    想要使用一个插件，只需要require它，然后把它添加到plugins数组中，多数插件可以通过选项option自定义，也可以在一个配置文件中因为不同目的而多次使用同一个插件
 * mode模式  通过选择development或production之中的一个，来设置mode参数，可以启用相应模式下的webpack内置的优化
 *
 *
 *
 *
 *
 */
