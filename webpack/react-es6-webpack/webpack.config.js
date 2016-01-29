var getConfig = require('hjs-webpack')


module.exports = getConfig({
  // 入口JS文件的位置
  in: 'src/app.js',

  // 应用打包（build）之后将存放在哪个文件夹 
  out: 'public',

  // 是否在每次打包之前将之前的打包文件
  // 删除
  clearBeforeBuild: true
})