# 项目使用gulp和webpack构建
# gulp用于启动服务武器和后台文件变化、编译webpack、清除生成的文件
# webpack模块化管理前端文件并监听文件变化，生成到build文件夹

# 文件结构

src
  --/app（前端文件）
    --/api           请求api路径
    --/components    一些公用的组件
    --/const         显示的常量
    --/img           图片资源
    --/pages         页面
    --/sass          sass样式文件
    --index.html      页面入口文件
    --main.jsx        path='/'的初始文件
    -router.jsx      React路由配置文件，同时也是webpack的入口文件
  --/sever（后台文件）
    --/config
      --config.js           mysql配置
      --express.js          express配置
      --language.js         语言设置
      --middleware.js       express中间件
    --/controller
      --home.controller.js  主页请求控制
    --/database
      --/table（数据库表）
        --baseTable.js      基础表类,封装了公用方法，用于继承
        --bottom.js         首页底部表
        --homeMiddle.js     首页中间内容表
        --slider.js         首页滑动表
      --conn.js             数据库连接
    --/router（路由）
      --/api
        --api.config.js     设置API请求路径
        --home.config.js    首页请求配置
      --index.router.js     首页请求
    --/util
      --generate.js         生成假数据，第一次运行时启用
      --util.js             封装好返回请求的数据格式的
    server.js               服务启动文件