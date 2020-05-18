---
title: ThinkPHP 速查表 5.1.5
date: 2020-2-6
category: php
img: logo/php.png
---
::: card App
``` php 
$App = new App();
/**
 * 绑定模块或者控制器
 * @access public
 * @param  string $bind
 * @return $this
 */
App->bind($bind)

/**
 * 设置应用类库目录
 * @access public
 * @param  string $path 路径
 * @return $this
 */
App->path($path)

/**
 * 初始化应用
 * @access public
 * @return void
 */
App->initialize()

/**
 * 初始化应用或模块
 * @access public
 * @param  string $module 模块名
 * @return void
 */
App->init($module = '')

/**
 * 执行应用程序
 * @access public
 * @return Response
 * @throws Exception
 */
App->run()

/**
 * 设置当前请求的调度信息
 * @access public
 * @param  Dispatch  $dispatch 调度信息
 * @return $this
 */
App->dispatch($dispatch)

/**
 * 记录调试信息
 * @access public
 * @param  mixed  $msg  调试信息
 * @param  string $type 信息类型
 * @return void
 */
App->log($log, $type = 'info')

/**
 * 获取配置参数 为空则获取所有配置
 * @access public
 * @param  string$name 配置参数名（支持二级配置 .号分割）
 * @return mixed
 */
App->config($name = '')

/**
 * URL路由检测（根据PATH_INFO)
 * @access public
 * @return Dispatch
 */
App->routeCheck()

/**
 * 设置应用的路由检测机制
 * @access public
 * @param  bool $must  是否强制检测路由
 * @return $this
 */
App->routeMust($must = false)

/**
 * 解析模块和类名
 * @access protected
 * @param  string $name 资源地址
 * @param  string $layer验证层名称
 * @param  bool   $appendSuffix 是否添加类名后缀
 * @return array
 */
$this->parseModuleAndClass($name, $layer, $appendSuffix)

/**
 * 实例化应用类库
 * @access public
 * @param  string $name 类名称
 * @param  string $layer业务层名称
 * @param  bool   $appendSuffix 是否添加类名后缀
 * @param  string $common   公共模块名
 * @return object
 * @throws ClassNotFoundException
 */
App->create($name, $layer, $appendSuffix = false, $common = 'common')

/**
 * 实例化（分层）模型
 * @access public
 * @param  string $name Model名称
 * @param  string $layer业务层名称
 * @param  bool   $appendSuffix 是否添加类名后缀
 * @param  string $common   公共模块名
 * @return Model
 * @throws ClassNotFoundException
 */
App->model($name = '', $layer = 'model', $appendSuffix = false, $common = 'common')

/**
 * 实例化（分层）控制器 格式：[模块名/]控制器名
 * @access public
 * @param  string $name  资源地址
 * @param  string $layer 控制层名称
 * @param  bool   $appendSuffix  是否添加类名后缀
 * @param  string $empty 空控制器名称
 * @return object
 * @throws ClassNotFoundException
 */
App->controller($name, $layer = 'controller', $appendSuffix = false, $empty = '')

/**
 * 实例化验证类 格式：[模块名/]验证器名
 * @access public
 * @param  string $name 资源地址
 * @param  string $layer验证层名称
 * @param  bool   $appendSuffix 是否添加类名后缀
 * @param  string $common   公共模块名
 * @return Validate
 * @throws ClassNotFoundException
 */
App->validate($name = '', $layer = 'validate', $appendSuffix = false, $common = 'common')

/**
 * 数据库初始化
 * @access public
 * @param  mixed $config 数据库配置
 * @param  bool|string   $name 连接标识 true 强制重新连接
 * @return \think\db\Query
 */
App->db($config = [], $name = false)

/**
 * 远程调用模块的操作方法 参数格式 [模块/控制器/]操作
 * @access public
 * @param  string   $url  调用地址
 * @param  string|array $vars 调用参数 支持字符串和数组
 * @param  string   $layer要调用的控制层名称
 * @param  bool $appendSuffix 是否添加类名后缀
 * @return mixed
 * @throws ClassNotFoundException
 */
App->action($url, $vars = [], $layer = 'controller', $appendSuffix = false)

/**
 * 解析应用类的类名
 * @access public
 * @param  string $module 模块名
 * @param  string $layer  层名 controller model ...
 * @param  string $name   类名
 * @param  bool   $appendSuffix
 * @return string
 */
App->parseClass($module, $layer, $name, $appendSuffix = false)

/**
 * 获取框架版本
 * @access public
 * @return string
 */
App->version()

/**
 * 是否为调试模式
 * @access public
 * @return bool
 */
App->isDebug()

/**
 * 获取模块路径
 * @access public
 * @return string
 */
App->getModulePath()

/**
 * 设置模块路径
 * @access public
 * @param  string $path 路径
 * @return void
 */
App->setModulePath($path)

/**
 * 获取应用根目录
 * @access public
 * @return string
 */
App->getRootPath()

/**
 * 获取应用类库目录
 * @access public
 * @return string
 */
App->getAppPath()

/**
 * 获取应用运行时目录
 * @access public
 * @return string
 */
App->getRuntimePath()

/**
 * 获取核心框架目录
 * @access public
 * @return string
 */
App->getThinkPath()

/**
 * 获取路由目录
 * @access public
 * @return string
 */
App->getRoutePath()

/**
 * 获取应用配置目录
 * @access public
 * @return string
 */
App->getConfigPath()

/**
 * 获取配置后缀
 * @access public
 * @return string
 */
App->getConfigExt()

/**
 * 获取应用类库命名空间
 * @access public
 * @return string
 */
App->getNamespace()

/**
 * 设置应用类库命名空间
 * @access public
 * @param  string $namespace 命名空间名称
 * @return $this
 */
App->setNamespace($namespace)

/**
 * 是否启用类库后缀
 * @access public
 * @return bool
 */
App->getSuffix()

/**
 * 获取应用开启时间
 * @access public
 * @return float
 */
App->getBeginTime()

/**
 * 获取应用初始内存占用
 * @access public
 * @return integer
 */
App->getBeginMem()

/**
 * 获取容器实例
 * @access public
 * @return Container
 */
App->container()

App->__set($name, $value)

App->__get($name)

App->__isset($name)

App->__unset($name)

App->offsetExists($key)

App->offsetGet($key)

App->offsetSet($key, $value)

App->offsetUnset($key)
:::
::: card Build
``` php
$Build = new Build();
/**
 * 根据传入的build资料创建目录和文件
 * @access public
 * @param  array  $build build列表
 * @param  string $namespace 应用类库命名空间
 * @param  bool   $suffix 类库后缀
 * @return void
 */
Build->run($build = [], $namespace = 'app', $suffix = false)

/**
 * 创建目录
 * @access protected
 * @param  array $list 目录列表
 * @return void
 */
$this->buildDir($list)

/**
 * 创建文件
 * @access protected
 * @param  array $list 文件列表
 * @return void
 */
$this->buildFile($list)

/**
 * 创建模块
 * @access public
 * @param  string $module 模块名
 * @param  array  $list build列表
 * @param  string $namespace 应用类库命名空间
 * @param  bool   $suffix 类库后缀
 * @return void
 */
Build->module($module = '', $list = [], $namespace = 'app', $suffix = false)

/**
 * 根据注释自动生成路由规则
 * @access public
 * @param  bool   $suffix 类库后缀
 * @param  string $layer  控制器层目录名
 * @return string
 */
Build->buildRoute($alias = false, $layer = '')

/**
 * 生成控制器类的路由规则
 * @access protected
 * @param  string $namespace 应用命名空间
 * @param  string $module 模块
 * @param  string $controller 控制器名
 * @param  bool   $suffix 类库后缀
 * @param  string $layer 控制器层目录名
 * @return string
 */
$this->getControllerRoute($namespace, $module, $controller, $alias = false, $layer = '')

/**
 * 解析路由注释
 * @access protected
 * @param  string $comment
 * @param  string $tag
 * @return string
 */
$this->parseRouteComment($comment, $tag = '@route(')

/**
 * 获取方法的路由注释
 * @access protected
 * @param  string   $module 模块
 * @param  string   $controller 控制器名
 * @param  \ReflectMethod   $reflectMethod
 * @return string|void
 */
$this->getMethodRouteComment($module, $controller, $reflectMethod)

/**
 * 创建模块的欢迎页面
 * @access protected
 * @param  string $module 模块名
 * @param  string $namespace 应用类库命名空间
 * @param  bool   $suffix 类库后缀
 * @return void
 */
$this->buildHello($module, $namespace, $suffix = false)

/**
 * 创建模块的公共文件
 * @access protected
 * @param  string $module 模块名
 * @return void
 */
$this->buildCommon($module)

/**
 * 创建目录
 * @access protected
 * @param  string $dirname 目录名称
 * @return void
 */
$this->checkDirBuild($dirname)
:::
::: card Cache
``` php
$Cache = new Cache();
/**
 * 连接缓存
 * @access public
 * @param  array $options  配置数组
 * @param  bool|string   $name 缓存连接标识 true 强制重新连接
 * @return Driver
 */
Cache->connect($options = [], $name = false)

/**
 * 自动初始化缓存
 * @access public
 * @param  array $options  配置数组
 * @return Driver
 */
Cache->init($options = [])

/**
 * 切换缓存类型 需要配置 cache.type 为 complex
 * @access public
 * @param  string $name 缓存标识
 * @return Driver
 */
Cache->store($name = '')

Cache->__call($method, $args)
:::
::: card Collection
``` php
$Collection = new Collection();

Collection::make($items = [])

/**
 * 是否为空
 * @access public
 * @return bool
 */
Collection->isEmpty()

Collection->toArray()

Collection->all()

/**
 * 合并数组
 *
 * @access public
 * @param  mixed $items
 * @return static
 */
Collection->merge($items)

/**
 * 比较数组，返回差集
 *
 * @access public
 * @param  mixed $items
 * @return static
 */
Collection->diff($items)

/**
 * 交换数组中的键和值
 *
 * @access public
 * @return static
 */
Collection->flip()

/**
 * 比较数组，返回交集
 *
 * @access public
 * @param  mixed $items
 * @return static
 */
Collection->intersect($items)

/**
 * 返回数组中所有的键名
 *
 * @access public
 * @return static
 */
Collection->keys()

/**
 * 删除数组的最后一个元素（出栈）
 *
 * @access public
 * @return mixed
 */
Collection->pop()

/**
 * 通过使用用户自定义函数，以字符串返回数组
 *
 * @access public
 * @param  callable $callback
 * @param  mixed$initial
 * @return mixed
 */
Collection->reduce($callback, $initial = NULL)

/**
 * 以相反的顺序返回数组。
 *
 * @access public
 * @return static
 */
Collection->reverse()

/**
 * 删除数组中首个元素，并返回被删除元素的值
 *
 * @access public
 * @return mixed
 */
Collection->shift()

/**
 * 在数组结尾插入一个元素
 * @access public
 * @param  mixed  $value
 * @param  mixed  $key
 * @return void
 */
Collection->push($value, $key = NULL)

/**
 * 把一个数组分割为新的数组块.
 *
 * @access public
 * @param  int  $size
 * @param  bool $preserveKeys
 * @return static
 */
Collection->chunk($size, $preserveKeys = false)

/**
 * 在数组开头插入一个元素
 * @access public
 * @param mixed  $value
 * @param mixed  $key
 * @return void
 */
Collection->unshift($value, $key = NULL)

/**
 * 给每个元素执行个回调
 *
 * @access public
 * @param  callable $callback
 * @return $this
 */
Collection->each($callback)

/**
 * 用回调函数过滤数组中的元素
 * @access public
 * @param  callable|null $callback
 * @return static
 */
Collection->filter($callback = NULL)

/**
 * 返回数据中指定的一列
 * @access public
 * @param mixed $columnKey 键名
 * @param mixed $indexKey  作为索引值的列
 * @return array
 */
Collection->column($columnKey, $indexKey = NULL)

/**
 * 对数组排序
 *
 * @access public
 * @param  callable|null $callback
 * @return static
 */
Collection->sort($callback = NULL)

/**
 * 将数组打乱
 *
 * @access public
 * @return static
 */
Collection->shuffle()

/**
 * 截取数组
 *
 * @access public
 * @param  int  $offset
 * @param  int  $length
 * @param  bool $preserveKeys
 * @return static
 */
Collection->slice($offset, $length = NULL, $preserveKeys = false)

Collection->offsetExists($offset)

Collection->offsetGet($offset)

Collection->offsetSet($offset, $value)

Collection->offsetUnset($offset)

Collection->count()

Collection->getIterator()

Collection->jsonSerialize()

/**
 * 转换当前数据集为JSON字符串
 * @access public
 * @param  integer $options json参数
 * @return string
 */
Collection->toJson($options = 256)

Collection->__toString()

/**
 * 转换成数组
 *
 * @access public
 * @param  mixed $items
 * @return array
 */
$this->convertToArray($items)
:::
::: card Config
``` php
$Config = new Config();
/**
 * 设置配置参数默认前缀
 * @access public
 * @param string$prefix 前缀
 * @return void
 */
Config->setDefaultPrefix($prefix)

/**
 * 解析配置文件或内容
 * @access public
 * @param  string$config 配置文件路径或内容
 * @param  string$type 配置解析类型
 * @param  string$name 配置名（如设置即表示二级配置）
 * @return mixed
 */
Config->parse($config, $type = '', $name = '')

/**
 * 加载配置文件（多种格式）
 * @access public
 * @param  string$file 配置文件名
 * @param  string$name 一级配置名
 * @return mixed
 */
Config->load($file, $name = '')

/**
 * 自动加载配置文件（PHP格式）
 * @access public
 * @param  string$name 配置名
 * @return void
 */
$this->autoLoad($name)

/**
 * 检测配置是否存在
 * @access public
 * @param  string$name 配置参数名（支持多级配置 .号分割）
 * @return bool
 */
Config->has($name)

/**
 * 获取一级配置
 * @access public
 * @param  string$name 一级配置名
 * @return array
 */
Config->pull($name)

/**
 * 获取配置参数 为空则获取所有配置
 * @access public
 * @param  string$name 配置参数名（支持多级配置 .号分割）
 * @return mixed
 */
Config->get($name = NULL)

/**
 * 设置配置参数 name为数组则为批量设置
 * @access public
 * @param  string|array  $name 配置参数名（支持三级配置 .号分割）
 * @param  mixed $value 配置值
 * @return mixed
 */
Config->set($name, $value = NULL)

/**
 * 移除配置
 * @access public
 * @param  string  $name 配置参数名（支持三级配置 .号分割）
 * @return void
 */
Config->remove($name)

/**
 * 重置配置参数
 * @access public
 * @param  string$prefix  配置前缀名
 * @return void
 */
Config->reset($prefix = '')

/**
 * 设置配置
 * @access public
 * @param  string$name  参数名
 * @param  mixed $value 值
 */
Config->__set($name, $value)

/**
 * 获取配置参数
 * @access public
 * @param  string $name 参数名
 * @return mixed
 */
Config->__get($name)

/**
 * 检测是否存在参数
 * @access public
 * @param  string $name 参数名
 * @return bool
 */
Config->__isset($name)

Config->offsetSet($name, $value)

Config->offsetExists($name)

Config->offsetUnset($name)

Config->offsetGet($name)
:::
::: card Console
``` php
$Console = new Console();

Console::init($run = true)

/**
 * @access public
 * @param  string $command
 * @param  array  $parameters
 * @param  string $driver
 * @return Output|Buffer
 */
Console::call($command, $parameters = [], $driver = 'buffer')

/**
 * 执行当前的指令
 * @access public
 * @return int
 * @throws \Exception
 * @api
 */
Console->run()

/**
 * 执行指令
 * @access public
 * @param  Input  $input
 * @param  Output $output
 * @return int
 */
Console->doRun($input, $output)

/**
 * 设置输入参数定义
 * @access public
 * @param  InputDefinition $definition
 */
Console->setDefinition($definition)

/**
 * 获取输入参数定义
 * @access public
 * @return InputDefinition The InputDefinition instance
 */
Console->getDefinition()

/**
 * Gets the help message.
 * @access public
 * @return string A help message.
 */
Console->getHelp()

/**
 * 是否捕获异常
 * @access public
 * @param  bool $boolean
 * @api
 */
Console->setCatchExceptions($boolean)

/**
 * 是否自动退出
 * @access public
 * @param  bool $boolean
 * @api
 */
Console->setAutoExit($boolean)

/**
 * 获取名称
 * @access public
 * @return string
 */
Console->getName()

/**
 * 设置名称
 * @access public
 * @param  string $name
 */
Console->setName($name)

/**
 * 获取版本
 * @access public
 * @return string
 * @api
 */
Console->getVersion()

/**
 * 设置版本
 * @access public
 * @param  string $version
 */
Console->setVersion($version)

/**
 * 获取完整的版本号
 * @access public
 * @return string
 */
Console->getLongVersion()

/**
 * 注册一个指令
 * @access public
 * @param  string $name
 * @return Command
 */
Console->register($name)

/**
 * 添加指令
 * @access public
 * @param  Command[] $commands
 */
Console->addCommands($commands)

/**
 * 添加一个指令
 * @access public
 * @param  Command $command
 * @return Command
 */
Console->add($command)

/**
 * 获取指令
 * @access public
 * @param  string $name 指令名称
 * @return Command
 * @throws \InvalidArgumentException
 */
Console->get($name)

/**
 * 某个指令是否存在
 * @access public
 * @param  string $name 指令名称
 * @return bool
 */
Console->has($name)

/**
 * 获取所有的命名空间
 * @access public
 * @return array
 */
Console->getNamespaces()

/**
 * 查找注册命名空间中的名称或缩写。
 * @access public
 * @param  string $namespace
 * @return string
 * @throws \InvalidArgumentException
 */
Console->findNamespace($namespace)

/**
 * 查找指令
 * @access public
 * @param  string $name 名称或者别名
 * @return Command
 * @throws \InvalidArgumentException
 */
Console->find($name)

/**
 * 获取所有的指令
 * @access public
 * @param  string $namespace 命名空间
 * @return Command[]
 * @api
 */
Console->all($namespace = NULL)

/**
 * 获取可能的指令名
 * @access public
 * @param  array $names
 * @return array
 */
Console::getAbbreviations($names)

/**
 * 配置基于用户的参数和选项的输入和输出实例。
 * @access protected
 * @param  Input  $input  输入实例
 * @param  Output $output 输出实例
 */
$this->configureIO($input, $output)

/**
 * 执行指令
 * @access protected
 * @param  Command $command 指令实例
 * @param  Input   $input   输入实例
 * @param  Output  $output  输出实例
 * @return int
 * @throws \Exception
 */
$this->doRunCommand($command, $input, $output)

/**
 * 获取指令的基础名称
 * @access protected
 * @param  Input $input
 * @return string
 */
$this->getCommandName($input)

/**
 * 获取默认输入定义
 * @access protected
 * @return InputDefinition
 */
$this->getDefaultInputDefinition()

/**
 * 设置默认命令
 * @access protected
 * @return Command[] An array of default Command instances
 */
$this->getDefaultCommands()

Console::addDefaultCommands($classnames)

/**
 * 获取可能的建议
 * @access private
 * @param  array $abbrevs
 * @return string
 */
$this->getAbbreviationSuggestions($abbrevs)

/**
 * 返回命名空间部分
 * @access public
 * @param  string $name  指令
 * @param  string $limit 部分的命名空间的最大数量
 * @return string
 */
Console->extractNamespace($name, $limit = NULL)

/**
 * 查找可替代的建议
 * @access private
 * @param  string $name
 * @param  array|\Traversable $collection
 * @return array
 */
$this->findAlternatives($name, $collection)

/**
 * 设置默认的指令
 * @access public
 * @param  string $commandName The Command name
 */
Console->setDefaultCommand($commandName)

/**
 * 返回所有的命名空间
 * @access private
 * @param  string $name
 * @return array
 */
$this->extractAllNamespaces($name)
:::
::: card Container
``` php
$Container = new Container();
/**
 * 获取当前容器的实例（单例）
 * @access public
 * @return static
 */
Container::getInstance()

/**
 * 获取容器中的对象实例
 * @access public
 * @param  string$abstract   类名或者标识
 * @param  array|true$vars   变量
 * @param  bool  $newInstance是否每次创建新的实例
 * @return object
 */
Container::get($abstract, $vars = [], $newInstance = false)

/**
 * 绑定一个类、闭包、实例、接口实现到容器
 * @access public
 * @param  string  $abstract类标识、接口
 * @param  mixed   $concrete要绑定的类、闭包或者实例
 * @return Container
 */
Container::set($abstract, $concrete = NULL)

/**
 * 绑定一个类、闭包、实例、接口实现到容器
 * @access public
 * @param  string|array  $abstract类标识、接口
 * @param  mixed $concrete要绑定的类、闭包或者实例
 * @return $this
 */
Container->bind($abstract, $concrete = NULL)

/**
 * 绑定一个类实例当容器
 * @access public
 * @param  string$abstract类名或者标识
 * @param  object$instance类的实例
 * @return $this
 */
Container->instance($abstract, $instance)

/**
 * 判断容器中是否存在类及标识
 * @access public
 * @param  string$abstract类名或者标识
 * @return bool
 */
Container->bound($abstract)

/**
 * 判断容器中是否存在类及标识
 * @access public
 * @param  string$name类名或者标识
 * @return bool
 */
Container->has($name)

/**
 * 创建类的实例
 * @access public
 * @param  string$abstract   类名或者标识
 * @param  array|true$args   变量
 * @param  bool  $newInstance是否每次创建新的实例
 * @return object
 */
Container->make($abstract, $vars = [], $newInstance = false)

/**
 * 执行函数或者闭包方法 支持参数调用
 * @access public
 * @param  string|array|\Closure $function 函数或者闭包
 * @param  array $vars 变量
 * @return mixed
 */
Container->invokeFunction($function, $vars = [])

/**
 * 调用反射执行类的方法 支持参数绑定
 * @access public
 * @param  string|array $method 方法
 * @param  array$vars   变量
 * @return mixed
 */
Container->invokeMethod($method, $vars = [])

/**
 * 调用反射执行callable 支持参数绑定
 * @access public
 * @param  mixed $callable
 * @param  array $vars   变量
 * @return mixed
 */
Container->invoke($callable, $vars = [])

/**
 * 调用反射执行类的实例化 支持依赖注入
 * @access public
 * @param  string$class 类名
 * @param  array $vars  变量
 * @return mixed
 */
Container->invokeClass($class, $vars = [])

/**
 * 绑定参数
 * @access protected
 * @param  \ReflectionMethod|\ReflectionFunction $reflect 反射类
 * @param  array $vars变量
 * @return array
 */
$this->bindParams($reflect, $vars = [])
:::
::: card Controller
``` php
$Controller = new Controller();

$this->initialize()

/**
 * 前置操作
 * @access protected
 * @param  string $method  前置操作方法名
 * @param  array  $options 调用参数 ['only'=>[...]] 或者['except'=>[...]]
 */
$this->beforeAction($method, $options = [])

/**
 * 加载模板输出
 * @access protected
 * @param  string $template 模板文件名
 * @param  array  $vars 模板输出变量
 * @param  array  $config   模板参数
 * @return mixed
 */
$this->fetch($template = '', $vars = [], $config = [])

/**
 * 渲染内容输出
 * @access protected
 * @param  string $content 模板内容
 * @param  array  $vars模板输出变量
 * @param  array  $config  模板参数
 * @return mixed
 */
$this->display($content = '', $vars = [], $config = [])

/**
 * 模板变量赋值
 * @access protected
 * @param  mixed $name  要显示的模板变量
 * @param  mixed $value 变量的值
 * @return $this
 */
$this->assign($name, $value = '')

/**
 * 视图过滤
 * @access protected
 * @param  Callable $filter 过滤方法或闭包
 * @return $this
 */
$this->filter($filter)

/**
 * 初始化模板引擎
 * @access protected
 * @param  array|string $engine 引擎参数
 * @return $this
 */
$this->engine($engine)

/**
 * 设置验证失败后是否抛出异常
 * @access protected
 * @param  bool $fail 是否抛出异常
 * @return $this
 */
$this->validateFailException($fail = true)

/**
 * 验证数据
 * @access protected
 * @param  array$data 数据
 * @param  string|array $validate 验证器名或者验证规则数组
 * @param  array$message  提示信息
 * @param  bool $batch是否批量验证
 * @param  mixed$callback 回调方法（闭包）
 * @return array|string|true
 * @throws ValidateException
 */
$this->validate($data, $validate, $message = [], $batch = false, $callback = NULL)

/**
 * 操作成功跳转的快捷方法
 * @access protected
 * @param  mixed $msg 提示信息
 * @param  string$url 跳转的URL地址
 * @param  mixed $data 返回的数据
 * @param  integer   $wait 跳转等待时间
 * @param  array $header 发送的Header信息
 * @return void
 */
$this->success($msg = '', $url = NULL, $data = '', $wait = 3, $header = [])

/**
 * 操作错误跳转的快捷方法
 * @access protected
 * @param  mixed $msg 提示信息
 * @param  string$url 跳转的URL地址
 * @param  mixed $data 返回的数据
 * @param  integer   $wait 跳转等待时间
 * @param  array $header 发送的Header信息
 * @return void
 */
$this->error($msg = '', $url = NULL, $data = '', $wait = 3, $header = [])

/**
 * 返回封装后的API数据到客户端
 * @access protected
 * @param  mixed $data 要返回的数据
 * @param  integer   $code 返回的code
 * @param  mixed $msg 提示信息
 * @param  string$type 返回数据格式
 * @param  array $header 发送的Header信息
 * @return void
 */
$this->result($data, $code = 0, $msg = '', $type = '', $header = [])

/**
 * URL重定向
 * @access protected
 * @param  string $url 跳转的URL表达式
 * @param  array|integer  $params 其它URL参数
 * @param  integer$code http code
 * @param  array  $with 隐式传参
 * @return void
 */
$this->redirect($url, $params = [], $code = 302, $with = [])

/**
 * 获取当前的response 输出类型
 * @access protected
 * @return string
 */
$this->getResponseType()
:::
::: card Cookie
``` php
$Cookie = new Cookie();
/**
 * Cookie初始化
 * @access public
 * @param  array $config
 * @return void
 */
Cookie->init($config = [])

/**
 * 设置或者获取cookie作用域（前缀）
 * @access public
 * @param  string $prefix
 * @return string|void
 */
Cookie->prefix($prefix = '')

/**
 * Cookie 设置、获取、删除
 *
 * @access public
 * @param  string $name  cookie名称
 * @param  mixed  $value cookie值
 * @param  mixed  $option 可选参数 可能会是 null|integer|string
 * @return void
 */
Cookie->set($name, $value = '', $option = NULL)

/**
 * 永久保存Cookie数据
 * @access public
 * @param  string $name  cookie名称
 * @param  mixed  $value cookie值
 * @param  mixed  $option 可选参数 可能会是 null|integer|string
 * @return void
 */
Cookie->forever($name, $value = '', $option = NULL)

/**
 * 判断Cookie数据
 * @access public
 * @param  string$name cookie名称
 * @param  string|null   $prefix cookie前缀
 * @return bool
 */
Cookie->has($name, $prefix = NULL)

/**
 * Cookie获取
 * @access public
 * @param  string$name cookie名称 留空获取全部
 * @param  string|null   $prefix cookie前缀
 * @return mixed
 */
Cookie->get($name = '', $prefix = NULL)

/**
 * Cookie删除
 * @access public
 * @param  string$name cookie名称
 * @param  string|null   $prefix cookie前缀
 * @return void
 */
Cookie->delete($name, $prefix = NULL)

/**
 * Cookie清空
 * @access public
 * @param  string|null $prefix cookie前缀
 * @return void
 */
Cookie->clear($prefix = NULL)

$this->jsonFormatProtect(&$val, $key, $type = 'encode')
:::
::: card Db
``` php
Db::__callStatic($method, $args)
:::
::: card Debug
``` php
$Debug = new Debug();
/**
 * 记录时间（微秒）和内存使用情况
 * @access public
 * @param  string$name 标记位置
 * @param  mixed $value 标记值 留空则取当前 time 表示仅记录时间 否则同时记录时间和内存
 * @return void
 */
Debug->remark($name, $value = '')

/**
 * 统计某个区间的时间（微秒）使用情况
 * @access public
 * @param  string$start 开始标签
 * @param  string$end 结束标签
 * @param  integer|string$dec 小数位
 * @return integer
 */
Debug->getRangeTime($start, $end, $dec = 6)

/**
 * 统计从开始到统计时的时间（微秒）使用情况
 * @access public
 * @param  integer|string $dec 小数位
 * @return integer
 */
Debug->getUseTime($dec = 6)

/**
 * 获取当前访问的吞吐率情况
 * @access public
 * @return string
 */
Debug->getThroughputRate()

/**
 * 记录区间的内存使用情况
 * @access public
 * @param  string$start 开始标签
 * @param  string$end 结束标签
 * @param  integer|string$dec 小数位
 * @return string
 */
Debug->getRangeMem($start, $end, $dec = 2)

/**
 * 统计从开始到统计时的内存使用情况
 * @access public
 * @param  integer|string $dec 小数位
 * @return string
 */
Debug->getUseMem($dec = 2)

/**
 * 统计区间的内存峰值情况
 * @access public
 * @param  string$start 开始标签
 * @param  string$end 结束标签
 * @param  integer|string$dec 小数位
 * @return string
 */
Debug->getMemPeak($start, $end, $dec = 2)

/**
 * 获取文件加载信息
 * @access public
 * @param  bool  $detail 是否显示详细
 * @return integer|array
 */
Debug->getFile($detail = false)

/**
 * 浏览器友好的变量输出
 * @access public
 * @param  mixed $var 变量
 * @param  boolean   $echo 是否输出 默认为true 如果为false 则返回输出字符串
 * @param  string$label 标签 默认为空
 * @param  integer   $flags htmlspecialchars flags
 * @return void|string
 */
Debug->dump($var, $echo = true, $label = NULL, $flags = 8)

Debug->inject($response, &$content) 
:::
::: card Env
``` php
$Env = new Env();
/**
 * 读取环境变量定义文件
 * @access public
 * @param  string$file  环境变量定义文件
 * @return void
 */
Env->load($file)

/**
 * 获取环境变量值
 * @access public
 * @param  string$name 环境变量名
 * @param  mixed $default  默认值
 * @return mixed
 */
Env->get($name = NULL, $default = NULL)

$this->getEnv($name, $default = NULL)

/**
 * 设置环境变量值
 * @access public
 * @param  string|array  $env   环境变量
 * @param  mixed $value  值
 * @return void
 */
Env->set($env, $value = NULL)
:::
::: card Error 
``` php
/**
 * 注册异常处理
 * @access public
 * @return void
 */
Error::register()

/**
 * Exception Handler
 * @access public
 * @param  \Exception|\Throwable $e
 */
Error::appException($e)

/**
 * Error Handler
 * @access public
 * @param  integer $errno   错误编号
 * @param  integer $errstr  详细错误信息
 * @param  string  $errfile 出错的文件
 * @param  integer $errline 出错行号
 * @throws ErrorException
 */
Error::appError($errno, $errstr, $errfile = '', $errline = 0)

/**
 * Shutdown Handler
 * @access public
 */
Error::appShutdown()

/**
 * 确定错误类型是否致命
 *
 * @access protected
 * @param  int $type
 * @return bool
 */
self::isFatal($type)

/**
 * Get an instance of the exception handler.
 *
 * @access public
 * @return Handle
 */
Error::getExceptionHandler()
:::
::: card Exception 
``` php
$Exception = new Exception();
/**
 * 设置异常额外的Debug数据
 * 数据将会显示为下面的格式
 *
 * Exception Data
 * --------------------------------------------------
 * Label 
1 *   key1  value
1 *   key2  value2
 * Label 2
 *   key1  value
1 *   key2  value2
 *
 * @access protected
 * @param  string $label 数据分类，用于异常页面显示
 * @param  array  $data  需要显示的数据，必须为关联数组
 */
$this->setData($label, $data)

/**
 * 获取异常额外Debug数据
 * 主要用于输出到异常页面便于调试
 * @access public
 * @return array 由setData设置的Debug数据
 */
Exception->getData()

$this->__clone()

Exception->__wakeup()

Exception->getMessage()

Exception->getCode()

Exception->getFile()

Exception->getLine()

Exception->getTrace()

Exception->getPrevious()

Exception->getTraceAsString()

Exception->__toString()
:::
::: card Facade 
``` php
/**
 * 绑定类的静态代理
 * @static
 * @access public
 * @param  string|array  $name类标识
 * @param  string$class   类名
 * @return object
 */
Facade::bind($name, $class = NULL)

/**
 * 创建Facade实例
 * @static
 * @access protected
 * @param  string$class  类名或标识
 * @param  array $args   变量
 * @param  bool  $newInstance是否每次创建新的实例
 * @return object
 */
self::createFacade($class = '', $args = [], $newInstance = false)

/**
 * 获取当前Facade对应类名
 * @access protected
 * @return string
 */
self::getFacadeClass()

/**
 * 带参数实例化当前Facade类
 * @access public
 * @return object
 */
Facade::instance($args)

/**
 * 调用类的实例
 * @access public
 * @param  string$class  类名或者标识
 * @param  array|true$args   变量
 * @param  bool  $newInstance是否每次创建新的实例
 * @return object
 */
Facade::make($class, $args = [], $newInstance = false)

Facade::__callStatic($method, $params)
:::
::: card File 
``` php
$File = new File();
/**
 * 是否测试
 * @access public
 * @param  bool   $test 是否测试
 * @return $this
 */
File->isTest($test = false)

/**
 * 设置上传信息
 * @access public
 * @param  array   $info 上传文件信息
 * @return $this
 */
File->setUploadInfo($info)

/**
 * 获取上传文件的信息
 * @access public
 * @param  string   $name
 * @return array|string
 */
File->getInfo($name = '')

/**
 * 获取上传文件的文件名
 * @access public
 * @return string
 */
File->getSaveName()

/**
 * 设置上传文件的保存文件名
 * @access public
 * @param  string   $saveName
 * @return $this
 */
File->setSaveName($saveName)

/**
 * 获取文件的哈希散列值
 * @access public
 * @param  string $type
 * @return string
 */
File->hash($type = 'sha1')

/**
 * 检查目录是否可写
 * @access public
 * @param  string   $path目录
 * @return boolean
 */
$this->checkPath($path)

/**
 * 获取文件类型信息
 * @access public
 * @return string
 */
File->getMime()

/**
 * 设置文件的命名规则
 * @access public
 * @param  string   $rule文件命名规则
 * @return $this
 */
File->rule($rule)

/**
 * 设置上传文件的验证规则
 * @access public
 * @param  array   $rule验证规则
 * @return $this
 */
File->validate($rule = [])

/**
 * 检测是否合法的上传文件
 * @access public
 * @return bool
 */
File->isValid()

/**
 * 检测上传文件
 * @access public
 * @param  array   $rule验证规则
 * @return bool
 */
File->check($rule = [])

/**
 * 检测上传文件后缀
 * @access public
 * @param  array|string   $ext允许后缀
 * @return bool
 */
File->checkExt($ext)

/**
 * 检测图像文件
 * @access public
 * @return bool
 */
File->checkImg()

$this->getImageType($image)

/**
 * 检测上传文件大小
 * @access public
 * @param  integer   $size最大大小
 * @return bool
 */
File->checkSize($size)

/**
 * 检测上传文件类型
 * @access public
 * @param  array|string   $mime允许类型
 * @return bool
 */
File->checkMime($mime)

/**
 * 移动文件
 * @access public
 * @param  string   $path保存路径
 * @param  string|bool  $savename保存的文件名 默认自动生成
 * @param  boolean  $replace 同名文件是否覆盖
 * @return false|File   false-失败 否则返回File实例
 */
File->move($path, $savename = true, $replace = true)

/**
 * 获取保存文件名
 * @access public
 * @param  string|bool   $savename保存的文件名 默认自动生成
 * @return string
 */
$this->buildSaveName($savename)

/**
 * 获取错误代码信息
 * @access public
 * @param  int $errorNo  错误号
 */
$this->error($errorNo)

/**
 * 获取错误信息（支持多语言）
 * @access public
 * @return string
 */
File->getError()

File->__call($method, $args)

File->rewind()

File->eof()

File->valid()

File->fgets()

File->fgetcsv($delimiter, $enclosure, $escape)

File->fputcsv($fields, $delimiter, $enclosure, $escape)

File->setCsvControl($delimiter, $enclosure, $escape)

File->getCsvControl()

File->flock($operation, &$wouldblock)

File->fflush()

File->ftell()

File->fseek($pos, $whence)

File->fgetc()

File->fpassthru()

File->fgetss($allowable_tags)

File->fscanf($format, &$vars)

File->fwrite($str, $length)

File->fread($length)

File->fstat()

File->ftruncate($size)

File->current()

File->key()

File->next()

File->setFlags($flags)

File->getFlags()

File->setMaxLineLen($max_len)

File->getMaxLineLen()

File->hasChildren()

File->getChildren()

File->seek($line_pos)

File->getCurrentLine()

File->__toString()

File->getPath()

File->getFilename()

File->getExtension()

File->getBasename($suffix)

File->getPathname()

File->getPerms()

File->getInode()

File->getSize()

File->getOwner()

File->getGroup()

File->getATime()

File->getMTime()

File->getCTime()

File->getType()

File->isWritable()

File->isReadable()

File->isExecutable()

File->isFile()

File->isDir()

File->isLink()

File->getLinkTarget()

File->getRealPath()

File->getFileInfo($class_name)

File->getPathInfo($class_name)

File->openFile($open_mode, $use_include_path, $context)

File->setFileClass($class_name)

File->setInfoClass($class_name)

File->_bad_state_ex()
:::
::: card Hook 
``` php
$Hook = new Hook();
/**
 * 指定入口方法名称
 * @access public
 * @param  string  $name 方法名
 * @return $this
 */
Hook->portal($name)

/**
 * 指定行为标识 便于调用
 * @access public
 * @param  string|array  $name 行为标识
 * @param  mixed $behavior 行为
 * @return $this
 */
Hook->alias($name, $behavior = NULL)

/**
 * 动态添加行为扩展到某个标签
 * @access public
 * @param  string$tag 标签名称
 * @param  mixed $behavior 行为名称
 * @param  bool  $first 是否放到开头执行
 * @return void
 */
Hook->add($tag, $behavior, $first = false)

/**
 * 批量导入插件
 * @access public
 * @param  array $tags 插件信息
 * @param  bool  $recursive 是否递归合并
 * @return void
 */
Hook->import($tags, $recursive = true)

/**
 * 获取插件信息
 * @access public
 * @param  string $tag 插件位置 留空获取全部
 * @return array
 */
Hook->get($tag = '')

/**
 * 监听标签的行为
 * @access public
 * @param  string $tag标签名称
 * @param  mixed  $params 传入参数
 * @param  bool   $once   只获取一个有效返回值
 * @return mixed
 */
Hook->listen($tag, $params = NULL, $once = false)

/**
 * 执行行为
 * @access public
 * @param  mixed $class  行为
 * @param  mixed $params 参数
 * @return mixed
 */
Hook->exec($class, $params = NULL)

/**
 * 执行某个标签的行为
 * @access protected
 * @param  mixed $class  要执行的行为
 * @param  string$tag方法名（标签名）
 * @param  mixed $params 参数
 * @return mixed
 */
$this->execTag($class, $tag = '', $params = NULL)
:::
::: card Lang 
``` php
$Lang = new Lang();

Lang->range($range = '')

/**
 * 设置语言定义(不区分大小写)
 * @access public
 * @param  string|array  $name 语言变量
 * @param  string$value 语言值
 * @param  string$range 语言作用域
 * @return mixed
 */
Lang->set($name, $value = NULL, $range = '')

/**
 * 加载语言定义(不区分大小写)
 * @access public
 * @param  string|array  $file   语言文件
 * @param  string$range  语言作用域
 * @return array
 */
Lang->load($file, $range = '')

/**
 * 获取语言定义(不区分大小写)
 * @access public
 * @param  string|null   $name 语言变量
 * @param  string$range 语言作用域
 * @return bool
 */
Lang->has($name, $range = '')

/**
 * 获取语言定义(不区分大小写)
 * @access public
 * @param  string|null   $name 语言变量
 * @param  array $vars 变量替换
 * @param  string$range 语言作用域
 * @return mixed
 */
Lang->get($name = NULL, $vars = [], $range = '')

/**
 * 自动侦测设置获取语言选择
 * @access public
 * @return string
 */
Lang->detect()

/**
 * 设置当前语言到Cookie
 * @access public
 * @param  string $lang 语言
 * @return void
 */
Lang->saveToCookie($lang = NULL)

/**
 * 设置语言自动侦测的变量
 * @access public
 * @param  string $var 变量名称
 * @return void
 */
Lang->setLangDetectVar($var)

/**
 * 设置语言的cookie保存变量
 * @access public
 * @param  string $var 变量名称
 * @return void
 */
Lang->setLangCookieVar($var)

/**
 * 设置允许的语言列表
 * @access public
 * @param  array $list 语言列表
 * @return void
 */
Lang->setAllowLangList($list)
:::
::: card Loader 
``` php
Loader::register($autoload = '')

Loader::autoload($class)

/**
 * 查找文件
 * @access private
 * @param  string $class
 * @return string|false
 */
self::findFile($class)

Loader::addClassMap($class, $map = '')

Loader::addNamespace($namespace, $path = '')

self::addPsr0($prefix, $paths, $prepend = false)

self::addPsr4($prefix, $paths, $prepend = false)

Loader::addAutoLoadDir($path)

Loader::addClassAlias($alias, $class = NULL)

Loader::registerComposerLoader($composerPath)

Loader::loadComposerAutoloadFiles()

/**
 * 字符串命名风格转换
 * type 0 将Java风格转换为C的风格 1 将C风格转换为Java的风格
 * @access public
 * @param  string  $name 字符串
 * @param  integer $type 转换类型
 * @param  bool$ucfirst 首字母是否大写（驼峰规则）
 * @return string
 */
Loader::parseName($name, $type = 0, $ucfirst = true)
:::
::: card Log 
``` php
$Log = new Log();
/**
 * 日志初始化
 * @access public
 * @param  array $config
 * @return $this
 */
Log->init($config = [])

/**
 * 获取日志信息
 * @access public
 * @param  string $type 信息类型
 * @return array
 */
Log->getLog($type = '')

/**
 * 记录日志信息
 * @access public
 * @param  mixed  $msg   日志信息
 * @param  string $type  日志级别
 * @param  array  $context   替换内容
 * @return $this
 */
Log->record($msg, $type = 'info', $context = [])

/**
 * 清空日志信息
 * @access public
 * @return $this
 */
Log->clear()

/**
 * 当前日志记录的授权key
 * @access public
 * @param  string  $key  授权key
 * @return $this
 */
Log->key($key)

/**
 * 检查日志写入权限
 * @access public
 * @param  array  $config  当前日志配置参数
 * @return bool
 */
Log->check($config)

/**
 * 保存调试信息
 * @access public
 * @return bool
 */
Log->save()

/**
 * 实时写入日志信息 并支持行为
 * @access public
 * @param  mixed  $msg   调试信息
 * @param  string $type  日志级别
 * @param  bool   $force 是否强制写入
 * @return bool
 */
Log->write($msg, $type = 'info', $force = false)

/**
 * 记录日志信息
 * @access public
 * @param  string $level 日志级别
 * @param  mixed  $message   日志信息
 * @param  array  $context   替换内容
 * @return void
 */
Log->log($level, $message, $context = [])

/**
 * 记录emergency信息
 * @access public
 * @param  mixed  $message   日志信息
 * @param  array  $context   替换内容
 * @return void
 */
Log->emergency($message, $context = [])

/**
 * 记录警报信息
 * @access public
 * @param  mixed  $message   日志信息
 * @param  array  $context   替换内容
 * @return void
 */
Log->alert($message, $context = [])

/**
 * 记录紧急情况
 * @access public
 * @param  mixed  $message   日志信息
 * @param  array  $context   替换内容
 * @return void
 */
Log->critical($message, $context = [])

/**
 * 记录错误信息
 * @access public
 * @param  mixed  $message   日志信息
 * @param  array  $context   替换内容
 * @return void
 */
Log->error($message, $context = [])

/**
 * 记录warning信息
 * @access public
 * @param  mixed  $message   日志信息
 * @param  array  $context   替换内容
 * @return void
 */
Log->warning($message, $context = [])

/**
 * 记录notice信息
 * @access public
 * @param  mixed  $message   日志信息
 * @param  array  $context   替换内容
 * @return void
 */
Log->notice($message, $context = [])

/**
 * 记录一般信息
 * @access public
 * @param  mixed  $message   日志信息
 * @param  array  $context   替换内容
 * @return void
 */
Log->info($message, $context = [])

/**
 * 记录调试信息
 * @access public
 * @param  mixed  $message   日志信息
 * @param  array  $context   替换内容
 * @return void
 */
Log->debug($message, $context = [])

/**
 * 记录sql信息
 * @access public
 * @param  mixed  $message   日志信息
 * @param  array  $context   替换内容
 * @return void
 */
Log->sql($message, $context = [])
:::
::: card Model 
``` php
$Model = new Model();
/**
 * 获取当前模型名称
 * @access public
 * @return string
 */
Model->getName()

/**
 * 创建新的模型实例
 * @access public
 * @param  array|object $data 数据
 * @param  bool $isUpdate 是否为更新
 * @param  mixed$where 更新条件
 * @return Model
 */
Model->newInstance($data = [], $isUpdate = false, $where = NULL)

/**
 * 创建模型的查询对象
 * @access protected
 * @return Query
 */
$this->buildQuery()

/**
 * 获取当前模型的数据库查询对象
 * @access public
 * @param  Query $query 查询对象实例
 * @return $this
 */
Model->setQuery($query)

/**
 * 获取当前模型的数据库查询对象
 * @access public
 * @param  bool $useBaseQuery 是否调用全局查询范围
 * @return Query
 */
Model->db($useBaseQuery = true)

/**
 *  初始化模型
 * @access protected
 * @return void
 */
$this->initialize()

/**
 * 初始化处理
 * @access protected
 * @return void
 */
self::init()

/**
 * 数据自动完成
 * @access protected
 * @param  array $auto 要自动更新的字段列表
 * @return void
 */
$this->autoCompleteData($auto = [])

/**
 * 更新是否强制写入数据 而不做比较
 * @access public
 * @param  bool $force
 * @return $this
 */
Model->force($force = true)

/**
 * 保存当前数据对象
 * @access public
 * @param  array  $data 数据
 * @param  array  $where更新条件
 * @param  string $sequence 自增序列名
 * @return integer|false
 */
Model->save($data = [], $where = [], $sequence = NULL)

/**
 * 写入之前检查数据
 * @access protected
 * @param  array   $data  数据
 * @param  array   $where 保存条件
 * @return bool
 */
$this->checkBeforeSave($data, $where)

/**
 * 检查数据是否允许写入
 * @access protected
 * @param  array   $autoFields 自动完成的字段列表
 * @return array
 */
$this->checkAllowFields($append = [])

/**
 * 保存写入数据
 * @access protected
 * @param  array   $where 保存条件
 * @return int|false
 */
$this->updateData($where)

/**
 * 新增写入数据
 * @access protected
 * @param  string   $sequence 自增名
 * @return int|false
 */
$this->insertData($sequence)

/**
 * 字段值(延迟)增长
 * @access public
 * @param  string  $field字段名
 * @param  integer $step 增长值
 * @param  integer $lazyTime 延时时间(s)
 * @return integer|true
 * @throws Exception
 */
Model->setInc($field, $step = 1, $lazyTime = 0)

/**
 * 字段值(延迟)增长
 * @access public
 * @param  string  $field字段名
 * @param  integer $step 增长值
 * @param  integer $lazyTime 延时时间(s)
 * @return integer|true
 * @throws Exception
 */
Model->setDec($field, $step = 1, $lazyTime = 0)

/**
 * 获取当前的更新条件
 * @access protected
 * @return mixed
 */
$this->getWhere()

/**
 * 保存多个数据到当前数据对象
 * @access public
 * @param  array   $dataSet 数据
 * @param  boolean $replace 是否自动识别更新和写入
 * @return Collection
 * @throws \Exception
 */
Model->saveAll($dataSet, $replace = true)

/**
 * 是否为更新数据
 * @access public
 * @param  mixed  $update
 * @param  mixed  $where
 * @return $this
 */
Model->isUpdate($update = true, $where = NULL)

/**
 * 删除当前的记录
 * @access public
 * @return integer
 */
Model->delete()

/**
 * 设置自动完成的字段（ 规则通过修改器定义）
 * @access public
 * @param  array $fields 需要自动完成的字段
 * @return $this
 */
Model->auto($fields)

/**
 * 写入数据
 * @access public
 * @param  array  $data  数据数组
 * @param  array|true $field 允许字段
 * @return static
 */
Model::create($data = [], $field = NULL)

/**
 * 更新数据
 * @access public
 * @param  array  $data  数据数组
 * @param  array  $where 更新条件
 * @param  array|true $field 允许字段
 * @return static
 */
Model::update($data = [], $where = [], $field = NULL)

/**
 * 查找单条记录
 * @access public
 * @param  mixed $data  主键值或者查询条件（闭包）
 * @param  mixed $with  关联预查询
 * @param  bool  $cache 是否缓存
 * @param  bool  $failException 是否抛出异常
 * @return static|null
 * @throws exception\DbException
 */
Model::get($data, $with = [], $cache = false, $failException = false)

/**
 * 查找单条记录 如果不存在直接抛出异常
 * @access public
 * @param  mixed $data  主键值或者查询条件（闭包）
 * @param  mixed $with  关联预查询
 * @param  bool  $cache 是否缓存
 * @return static|null
 * @throws exception\DbException
 */
Model::getOrFail($data, $with = [], $cache = false)

/**
 * 查找所有记录
 * @access public
 * @param  mixed$data  主键列表或者查询条件（闭包）
 * @param  array|string $with  关联预查询
 * @param  bool $cache 是否缓存
 * @return static[]|false
 * @throws exception\DbException
 */
Model::all($data = NULL, $with = [], $cache = false)

/**
 * 分析查询表达式
 * @access public
 * @param  mixed  $data  主键列表或者查询条件（闭包）
 * @param  string $with  关联预查询
 * @param  bool   $cache 是否缓存
 * @return Query
 */
self::parseQuery(&$data, $with, $cache)

/**
 * 删除记录
 * @access public
 * @param  mixed $data 主键列表 支持闭包查询条件
 * @return integer 成功删除的记录数
 */
Model::destroy($data)

/**
 * 获取错误信息
 * @access public
 * @return mixed
 */
Model->getError()

/**
 * 解序列化后处理
 */
Model->__wakeup()

Model->__debugInfo()

/**
 * 修改器 设置数据对象的值
 * @access public
 * @param  string $name  名称
 * @param  mixed  $value 值
 * @return void
 */
Model->__set($name, $value)

/**
 * 获取器 获取数据对象的值
 * @access public
 * @param  string $name 名称
 * @return mixed
 */
Model->__get($name)

/**
 * 检测数据对象的值
 * @access public
 * @param  string $name 名称
 * @return boolean
 */
Model->__isset($name)

/**
 * 销毁数据对象的值
 * @access public
 * @param  string $name 名称
 * @return void
 */
Model->__unset($name)

Model->offsetSet($name, $value)

Model->offsetExists($name)

Model->offsetUnset($name)

Model->offsetGet($name)

/**
 * 设置是否使用全局查询范围
 * @access public
 * @param  bool $use 是否启用全局查询范围
 * @return Query
 */
Model::useGlobalScope($use)

Model->__call($method, $args)

Model::__callStatic($method, $args)

/**
 * 获取模型对象的主键
 * @access public
 * @return string|array
 */
Model->getPk()

/**
 * 判断一个字段名是否为主键字段
 * @access public
 * @param  string $key 名称
 * @return bool
 */
$this->isPk($key)

/**
 * 设置允许写入的字段
 * @access public
 * @param  array|string|true $field 允许写入的字段 如果为true只允许写入数据表字段
 * @return $this
 */
Model->allowField($field)

/**
 * 设置只读字段
 * @access public
 * @param  array|string $field 只读字段
 * @return $this
 */
Model->readonly($field)

/**
 * 设置数据对象值
 * @access public
 * @param  mixed $data  数据或者属性名
 * @param  mixed $value 值
 * @return $this
 */
Model->data($data, $value = NULL)

/**
 * 批量设置数据对象值
 * @access public
 * @param  mixed $data  数据
 * @param  bool  $set   是否需要进行数据处理
 * @return $this
 */
Model->appendData($data, $set = false)

/**
 * 获取对象原始数据 如果不存在指定字段返回null
 * @access public
 * @param  string $name 字段名 留空获取全部
 * @return mixed
 */
Model->getOrigin($name = NULL)

/**
 * 获取对象原始数据 如果不存在指定字段返回false
 * @access public
 * @param  string $name 字段名 留空获取全部
 * @return mixed
 * @throws InvalidArgumentException
 */
Model->getData($name = NULL)

/**
 * 获取变化的数据 并排除只读数据
 * @access public
 * @return array
 */
Model->getChangedData()

/**
 * 修改器 设置数据对象值
 * @access public
 * @param  string $name  属性名
 * @param  mixed  $value 属性值
 * @param  array  $data  数据
 * @return $this
 */
Model->setAttr($name, $value, $data = [])

/**
 * 是否需要自动写入时间字段
 * @access public
 * @param  bool $auto
 * @return $this
 */
Model->isAutoWriteTimestamp($auto)

/**
 * 自动写入时间戳
 * @access protected
 * @param  string $name 时间戳字段
 * @return mixed
 */
$this->autoWriteTimestamp($name)

/**
 * 数据写入 类型转换
 * @access protected
 * @param  mixed$value 值
 * @param  string|array $type  要转换的类型
 * @return mixed
 */
$this->writeTransform($value, $type)

/**
 * 获取器 获取数据对象的值
 * @access public
 * @param  string $name 名称
 * @param  array  $item 数据
 * @return mixed
 * @throws InvalidArgumentException
 */
Model->getAttr($name, &$item = NULL)

/**
 * 数据读取 类型转换
 * @access protected
 * @param  mixed$value 值
 * @param  string|array $type  要转换的类型
 * @return mixed
 */
$this->readTransform($value, $type)

/**
 * 设置父关联对象
 * @access public
 * @param  Model $model  模型对象
 * @return $this
 */
Model->setParent($model)

/**
 * 获取父关联对象
 * @access public
 * @return Model
 */
Model->getParent()

/**
 * 获取当前模型的关联模型数据
 * @access public
 * @param  string $name 关联方法名
 * @return mixed
 */
Model->getRelation($name = NULL)

/**
 * 设置关联数据对象值
 * @access public
 * @param  string $name  属性名
 * @param  mixed  $value 属性值
 * @param  array  $data  数据
 * @return $this
 */
Model->setRelation($name, $value, $data = [])

/**
 * 关联数据写入
 * @access public
 * @param  array|string $relation 关联
 * @return $this
 */
Model->together($relation)

/**
 * 根据关联条件查询当前模型
 * @access public
 * @param  string  $relation 关联方法名
 * @param  mixed   $operator 比较操作符
 * @param  integer $count个数
 * @param  string  $id   关联表的统计字段
 * @return Query
 */
Model::has($relation, $operator = '>=', $count = 1, $id = '*')

/**
 * 根据关联条件查询当前模型
 * @access public
 * @param  string $relation 关联方法名
 * @param  mixed  $where查询条件（数组或者闭包）
 * @param  mixed  $fields   字段
 * @return Query
 */
Model::hasWhere($relation, $where = [], $fields = '*')

/**
 * 查询当前模型的关联数据
 * @access public
 * @param  string|array $relations 关联名
 * @return $this
 */
Model->relationQuery($relations)

/**
 * 预载入关联查询 返回数据集
 * @access public
 * @param  array  $resultSet 数据集
 * @param  string $relation  关联名
 * @return array
 */
Model->eagerlyResultSet(&$resultSet, $relation)

/**
 * 预载入关联查询 返回模型对象
 * @access public
 * @param  Model  $result   数据对象
 * @param  string $relation 关联名
 * @return Model
 */
Model->eagerlyResult(&$result, $relation)

/**
 * 关联统计
 * @access public
 * @param  Model$result 数据对象
 * @param  array$relations  关联名
 * @param  string   $aggregate  聚合查询方法
 * @param  string   $field  字段
 * @return void
 */
Model->relationCount(&$result, $relations, $aggregate = 'sum', $field = '*')

/**
 * HAS ONE 关联定义
 * @access public
 * @param  string $model  模型名
 * @param  string $foreignKey 关联外键
 * @param  string $localKey   当前主键
 * @return HasOne
 */
Model->hasOne($model, $foreignKey = '', $localKey = '')

/**
 * BELONGS TO 关联定义
 * @access public
 * @param  string $model  模型名
 * @param  string $foreignKey 关联外键
 * @param  string $localKey   关联主键
 * @return BelongsTo
 */
Model->belongsTo($model, $foreignKey = '', $localKey = '')

/**
 * HAS MANY 关联定义
 * @access public
 * @param  string $model  模型名
 * @param  string $foreignKey 关联外键
 * @param  string $localKey   当前主键
 * @return HasMany
 */
Model->hasMany($model, $foreignKey = '', $localKey = '')

/**
 * HAS MANY 远程关联定义
 * @access public
 * @param  string $model  模型名
 * @param  string $through中间模型名
 * @param  string $foreignKey 关联外键
 * @param  string $throughKey 关联外键
 * @param  string $localKey   当前主键
 * @return HasManyThrough
 */
Model->hasManyThrough($model, $through, $foreignKey = '', $throughKey = '', $localKey = '')

/**
 * BELONGS TO MANY 关联定义
 * @access public
 * @param  string $model  模型名
 * @param  string $table  中间表名
 * @param  string $foreignKey 关联外键
 * @param  string $localKey   当前模型关联键
 * @return BelongsToMany
 */
Model->belongsToMany($model, $table = '', $foreignKey = '', $localKey = '')

/**
 * MORPH  One 关联定义
 * @access public
 * @param  string   $model 模型名
 * @param  string|array $morph 多态字段信息
 * @param  string   $type  多态类型
 * @return MorphOne
 */
Model->morphOne($model, $morph = NULL, $type = '')

/**
 * MORPH  MANY 关联定义
 * @access public
 * @param  string   $model 模型名
 * @param  string|array $morph 多态字段信息
 * @param  string   $type  多态类型
 * @return MorphMany
 */
Model->morphMany($model, $morph = NULL, $type = '')

/**
 * MORPH TO 关联定义
 * @access public
 * @param  string|array $morph 多态字段信息
 * @param  array$alias 多态别名定义
 * @return MorphTo
 */
Model->morphTo($morph = NULL, $alias = [])

/**
 * 解析模型的完整命名空间
 * @access protected
 * @param  string $model 模型名（或者完整类名）
 * @return string
 */
$this->parseModel($model)

/**
 * 获取模型的默认外键名
 * @access protected
 * @param  string $name 模型名
 * @return string
 */
$this->getForeignKey($name)

/**
 * 检查属性是否为关联属性 如果是则返回关联方法名
 * @access protected
 * @param  string $attr 关联属性名
 * @return string|false
 */
$this->isRelationAttr($attr)

/**
 * 智能获取关联模型数据
 * @access protected
 * @param  Relation  $modelRelation 模型关联对象
 * @return mixed
 */
$this->getRelationData($modelRelation)

/**
 * 关联数据自动写入检查
 * @access protected
 * @return void
 */
$this->checkAutoRelationWrite()

/**
 * 自动关联数据更新（针对一对一关联）
 * @access protected
 * @return void
 */
$this->autoRelationUpdate()

/**
 * 自动关联数据写入（针对一对一关联）
 * @access protected
 * @return void
 */
$this->autoRelationInsert()

/**
 * 自动关联数据删除（支持一对一及一对多关联）
 * @access protected
 * @return void
 */
$this->autoRelationDelete()

/**
 * 注册回调方法
 * @access public
 * @param  string   $event事件名
 * @param  callable $callback 回调方法
 * @param  bool $override 是否覆盖
 * @return void
 */
Model::event($event, $callback, $override = false)

/**
 * 触发事件
 * @access protected
 * @param  string $event  事件名
 * @return bool
 */
$this->trigger($event)

/**
 * 模型before_insert事件快捷方法
 * @access protected
 * @param callable  $callback
 * @param bool  $override
 */
self::beforeInsert($callback, $override = false)

/**
 * 模型after_insert事件快捷方法
 * @access protected
 * @param callable  $callback
 * @param bool  $override
 */
self::afterInsert($callback, $override = false)

/**
 * 模型before_update事件快捷方法
 * @access protected
 * @param callable  $callback
 * @param bool  $override
 */
self::beforeUpdate($callback, $override = false)

/**
 * 模型after_update事件快捷方法
 * @access protected
 * @param callable  $callback
 * @param bool  $override
 */
self::afterUpdate($callback, $override = false)

/**
 * 模型before_write事件快捷方法
 * @access protected
 * @param callable  $callback
 * @param bool  $override
 */
self::beforeWrite($callback, $override = false)

/**
 * 模型after_write事件快捷方法
 * @access protected
 * @param callable  $callback
 * @param bool  $override
 */
self::afterWrite($callback, $override = false)

/**
 * 模型before_delete事件快捷方法
 * @access protected
 * @param callable  $callback
 * @param bool  $override
 */
self::beforeDelete($callback, $override = false)

/**
 * 模型after_delete事件快捷方法
 * @access protected
 * @param callable  $callback
 * @param bool  $override
 */
self::afterDelete($callback, $override = false)

/**
 * 时间日期字段格式化处理
 * @access protected
 * @param  mixed $time  时间日期表达式
 * @param  mixed $format日期格式
 * @param  bool  $timestamp 是否进行时间戳转换
 * @return mixed
 */
$this->formatDateTime($time, $format, $timestamp = false)

/**
 * 检查时间字段写入
 * @access protected
 * @return void
 */
$this->checkTimeStampWrite()

/**
 * 设置需要附加的输出属性
 * @access public
 * @param  array $append   属性列表
 * @param  bool  $override 是否覆盖
 * @return $this
 */
Model->append($append = [], $override = false)

/**
 * 设置附加关联对象的属性
 * @access public
 * @param  string   $attr关联属性
 * @param  string|array $append  追加属性名
 * @return $this
 * @throws Exception
 */
Model->appendRelationAttr($attr, $append)

/**
 * 设置需要隐藏的输出属性
 * @access public
 * @param  array $hidden   属性列表
 * @param  bool  $override 是否覆盖
 * @return $this
 */
Model->hidden($hidden = [], $override = false)

/**
 * 设置需要输出的属性
 * @access public
 * @param  array $visible
 * @param  bool  $override 是否覆盖
 * @return $this
 */
Model->visible($visible = [], $override = false)

/**
 * 转换当前模型对象为数组
 * @access public
 * @return array
 */
Model->toArray()

/**
 * 转换当前模型对象为JSON字符串
 * @access public
 * @param  integer $options json参数
 * @return string
 */
Model->toJson($options = 256)

/**
 * 移除当前模型的关联属性
 * @access public
 * @return $this
 */
Model->removeRelation()

Model->__toString()

Model->jsonSerialize()

/**
 * 转换数据集为数据集对象
 * @access public
 * @param  array|Collection $collection 数据集
 * @param  string   $resultSetType 数据集类
 * @return Collection
 */
Model->toCollection($collection, $resultSetType = NULL)

/**
 * 解析隐藏及显示属性
 * @access protected
 * @param  array $attrs  属性
 * @param  array $result 结果集
 * @param  bool  $visible
 * @return array
 */
$this->parseAttr($attrs, &$result, $visible = true) 
:::
::: card Paginator 
``` php
$Paginator = new Paginator();
/**
 * @access public
 * @param   $items
 * @param   $listRows
 * @param null  $currentPage
 * @param bool  $simple
 * @param null  $total
 * @param array $options
 * @return Paginator
 */
Paginator::make($items, $listRows, $currentPage = NULL, $total = NULL, $simple = false, $options = [])

$this->setCurrentPage($currentPage)

/**
 * 获取页码对应的链接
 *
 * @access protected
 * @param  $page
 * @return string
 */
$this->url($page)

/**
 * 自动获取当前页码
 * @access public
 * @param  string $varPage
 * @param  int$default
 * @return int
 */
Paginator::getCurrentPage($varPage = 'page', $default = 1)

/**
 * 自动获取当前的path
 * @access public
 * @return string
 */
Paginator::getCurrentPath()

Paginator->total()

Paginator->listRows()

Paginator->currentPage()

Paginator->lastPage()

/**
 * 数据是否足够分页
 * @access public
 * @return boolean
 */
Paginator->hasPages()

/**
 * 创建一组分页链接
 *
 * @access public
 * @param  int $start
 * @param  int $end
 * @return array
 */
Paginator->getUrlRange($start, $end)

/**
 * 设置URL锚点
 *
 * @access public
 * @param  string|null $fragment
 * @return $this
 */
Paginator->fragment($fragment)

/**
 * 添加URL参数
 *
 * @access public
 * @param  array|string $key
 * @param  string|null  $value
 * @return $this
 */
Paginator->appends($key, $value = NULL)

/**
 * 构造锚点字符串
 *
 * @access public
 * @return string
 */
$this->buildFragment()

/**
 * 渲染分页html
 * @access public
 * @return mixed
 */
Paginator->render()

Paginator->items()

Paginator->getCollection()

Paginator->isEmpty()

/**
 * 给每个元素执行个回调
 *
 * @access public
 * @param  callable $callback
 * @return $this
 */
Paginator->each($callback)

/**
 * Retrieve an external iterator
 * @access public
 * @return Traversable An instance of an object implementing <b>Iterator</b> or
 * <b>Traversable</b>
 */
Paginator->getIterator()

/**
 * Whether a offset exists
 * @access public
 * @param  mixed $offset
 * @return bool
 */
Paginator->offsetExists($offset)

/**
 * Offset to retrieve
 * @access public
 * @param  mixed $offset
 * @return mixed
 */
Paginator->offsetGet($offset)

/**
 * Offset to set
 * @access public
 * @param  mixed $offset
 * @param  mixed $value
 */
Paginator->offsetSet($offset, $value)

/**
 * Offset to unset
 * @access public
 * @param  mixed $offset
 * @return void
 * @since  5.0.0
 */
Paginator->offsetUnset($offset)

/**
 * Count elements of an object
 */
Paginator->count()

Paginator->__toString()

Paginator->toArray()

/**
 * Specify data which should be serialized to JSON
 */
Paginator->jsonSerialize()

Paginator->__call($name, $arguments) 
:::
::: card Process 
``` php
$Process = new Process();

Process->__clone()

/**
 * 运行指令
 * @access public
 * @param  callback|null $callback
 * @return int
 */
Process->run($callback = NULL)

/**
 * 运行指令
 * @access public
 * @param  callable|null $callback
 * @return self
 * @throws \RuntimeException
 * @throws ProcessFailedException
 */
Process->mustRun($callback = NULL)

/**
 * 启动进程并写到 STDIN 输入后返回。
 * @access public
 * @param  callable|null $callback
 * @throws \RuntimeException
 * @throws \RuntimeException
 * @throws \LogicException
 */
Process->start($callback = NULL)

/**
 * 重启进程
 * @access public
 * @param  callable|null $callback
 * @return Process
 * @throws \RuntimeException
 * @throws \RuntimeException
 */
Process->restart($callback = NULL)

/**
 * 等待要终止的进程
 * @access public
 * @param  callable|null $callback
 * @return int
 */
Process->wait($callback = NULL)

/**
 * 获取PID
 * @access public
 * @return int|null
 * @throws \RuntimeException
 */
Process->getPid()

/**
 * 将一个 POSIX 信号发送到进程中
 * @access public
 * @param  int $signal
 * @return Process
 */
Process->signal($signal)

/**
 * 禁用从底层过程获取输出和错误输出。
 * @access public
 * @return Process
 */
Process->disableOutput()

/**
 * 开启从底层过程获取输出和错误输出。
 * @access public
 * @return Process
 * @throws \RuntimeException
 */
Process->enableOutput()

/**
 * 输出是否禁用
 * @access public
 * @return bool
 */
Process->isOutputDisabled()

/**
 * 获取当前的输出管道
 * @access public
 * @return string
 * @throws \LogicException
 * @api
 */
Process->getOutput()

/**
 * 以增量方式返回的输出结果。
 * @access public
 * @return string
 */
Process->getIncrementalOutput()

/**
 * 清空输出
 * @access public
 * @return Process
 */
Process->clearOutput()

/**
 * 返回当前的错误输出的过程 (STDERR)。
 * @access public
 * @return string
 */
Process->getErrorOutput()

/**
 * 以增量方式返回 errorOutput
 * @access public
 * @return string
 */
Process->getIncrementalErrorOutput()

/**
 * 清空 errorOutput
 * @access public
 * @return Process
 */
Process->clearErrorOutput()

/**
 * 获取退出码
 * @access public
 * @return null|int
 */
Process->getExitCode()

/**
 * 获取退出文本
 * @access public
 * @return null|string
 */
Process->getExitCodeText()

/**
 * 检查是否成功
 * @access public
 * @return bool
 */
Process->isSuccessful()

/**
 * 是否未捕获的信号已被终止子进程
 * @access public
 * @return bool
 */
Process->hasBeenSignaled()

/**
 * 返回导致子进程终止其执行的数。
 * @access public
 * @return int
 */
Process->getTermSignal()

/**
 * 检查子进程信号是否已停止
 * @access public
 * @return bool
 */
Process->hasBeenStopped()

/**
 * 返回导致子进程停止其执行的数。
 * @access public
 * @return int
 */
Process->getStopSignal()

/**
 * 检查是否正在运行
 * @access public
 * @return bool
 */
Process->isRunning()

/**
 * 检查是否已开始
 * @access public
 * @return bool
 */
Process->isStarted()

/**
 * 检查是否已终止
 * @access public
 * @return bool
 */
Process->isTerminated()

/**
 * 获取当前的状态
 * @access public
 * @return string
 */
Process->getStatus()

/**
 * 终止进程
 * @access public
 */
Process->stop()

/**
 * 添加一行输出
 * @access public
 * @param string $line
 */
Process->addOutput($line)

/**
 * 添加一行错误输出
 * @access public
 * @param string $line
 */
Process->addErrorOutput($line)

/**
 * 获取被执行的指令
 * @access public
 * @return string
 */
Process->getCommandLine()

/**
 * 设置指令
 * @access public
 * @param string $commandline
 * @return self
 */
Process->setCommandLine($commandline)

/**
 * 获取超时时间
 * @access public
 * @return float|null
 */
Process->getTimeout()

/**
 * 获取idle超时时间
 * @access public
 * @return float|null
 */
Process->getIdleTimeout()

/**
 * 设置超时时间
 * @access public
 * @param  int|float|null $timeout
 * @return self
 */
Process->setTimeout($timeout)

/**
 * 设置idle超时时间
 * @access public
 * @param  int|float|null $timeout
 * @return self
 */
Process->setIdleTimeout($timeout)

/**
 * 设置TTY
 * @access public
 * @param  bool $tty
 * @return self
 */
Process->setTty($tty)

/**
 * 检查是否是tty模式
 * @access public
 * @return bool
 */
Process->isTty()

/**
 * 设置pty模式
 * @access public
 * @param  bool $bool
 * @return self
 */
Process->setPty($bool)

/**
 * 是否是pty模式
 * @access public
 * @return bool
 */
Process->isPty()

/**
 * 获取工作目录
 * @access public
 * @return string|null
 */
Process->getWorkingDirectory()

/**
 * 设置工作目录
 * @access public
 * @param  string $cwd
 * @return self
 */
Process->setWorkingDirectory($cwd)

/**
 * 获取环境变量
 * @access public
 * @return array
 */
Process->getEnv()

/**
 * 设置环境变量
 * @access public
 * @param  array $env
 * @return self
 */
Process->setEnv($env)

/**
 * 获取输入
 * @access public
 * @return null|string
 */
Process->getInput()

/**
 * 设置输入
 * @access public
 * @param  mixed $input
 * @return self
 */
Process->setInput($input)

/**
 * 获取proc_open的选项
 * @access public
 * @return array
 */
Process->getOptions()

/**
 * 设置proc_open的选项
 * @access public
 * @param  array $options
 * @return self
 */
Process->setOptions($options)

/**
 * 是否兼容windows
 * @access public
 * @return bool
 */
Process->getEnhanceWindowsCompatibility()

/**
 * 设置是否兼容windows
 * @access public
 * @param  bool $enhance
 * @return self
 */
Process->setEnhanceWindowsCompatibility($enhance)

/**
 * 返回是否 sigchild 兼容模式激活
 * @access public
 * @return bool
 */
Process->getEnhanceSigchildCompatibility()

/**
 * 激活 sigchild 兼容性模式。
 * @access public
 * @param  bool $enhance
 * @return self
 */
Process->setEnhanceSigchildCompatibility($enhance)

/**
 * 是否超时
 */
Process->checkTimeout()

/**
 * 是否支持pty
 * @access public
 * @return bool
 */
Process::isPtySupported()

/**
 * 创建所需的 proc_open 的描述符
 * @access private
 * @return array
 */
$this->getDescriptors()

/**
 * 建立 wait () 使用的回调。
 * @access protected
 * @param  callable|null $callback
 * @return callable
 */
$this->buildCallback($callback)

/**
 * 更新状态
 * @access protected
 * @param bool $blocking
 */
$this->updateStatus($blocking)

/**
 * 是否开启 '--enable-sigchild'
 * @access protected
 * @return bool
 */
$this->isSigchildEnabled()

/**
 * 验证是否超时
 * @access private
 * @param  int|float|null $timeout
 * @return float|null
 */
$this->validateTimeout($timeout)

/**
 * 读取pipes
 * @access private
 * @param  bool $blocking
 * @param  bool $close
 */
$this->readPipes($blocking, $close)

/**
 * 捕获退出码
 */
$this->captureExitCode()

/**
 * 关闭资源
 * @access private
 * @return int 退出码
 */
$this->close()

/**
 * 重置数据
 */
$this->resetProcessData()

/**
 * 将一个 POSIX 信号发送到进程中。
 * @access private
 * @param  int  $signal
 * @param  bool $throwException
 * @return bool
 */
$this->doSignal($signal, $throwException)

/**
 * 确保进程已经开启
 * @access private
 * @param  string $functionName
 */
$this->requireProcessIsStarted($functionName)

/**
 * 确保进程已经终止
 * @access private
 * @param  string $functionName
 */
$this->requireProcessIsTerminated($functionName)
:::
::: card Request 
``` php
$Request = new Request();

Request->__call($method, $args)

/**
 * Hook 方法注入
 * @access public
 * @param  string|array  $method 方法名
 * @param  mixed $callback callable
 * @return void
 */
Request->hook($method, $callback = NULL)

/**
 * 创建一个URL请求
 * @access public
 * @param  string$uri URL地址
 * @param  string$method 请求类型
 * @param  array $params 请求参数
 * @param  array $cookie
 * @param  array $files
 * @param  array $server
 * @param  string$content
 * @return \think\Request
 */
Request->create($uri, $method = 'GET', $params = [], $cookie = [], $files = [], $server = [], $content = NULL)

/**
 * 设置或获取当前包含协议的域名
 * @access public
 * @param  string $domain 域名
 * @return string|$this
 */
Request->domain($domain = NULL)

/**
 * 获取当前子域名
 * @access public
 * @return string|$this
 */
Request->subDomain()

/**
 * 设置或获取当前泛域名的值
 * @access public
 * @param  string $domain 域名
 * @return string|$this
 */
Request->panDomain($domain = NULL)

/**
 * 设置或获取当前完整URL 包括QUERY_STRING
 * @access public
 * @param  string|true $url URL地址 true 带域名获取
 * @return string|$this
 */
Request->url($url = NULL)

/**
 * 设置或获取当前URL 不含QUERY_STRING
 * @access public
 * @param  string $url URL地址
 * @return string|$this
 */
Request->baseUrl($url = NULL)

/**
 * 设置或获取当前执行的文件 SCRIPT_NAME
 * @access public
 * @param  string $file 当前执行的文件
 * @return string|$this
 */
Request->baseFile($file = NULL)

/**
 * 设置或获取URL访问根地址
 * @access public
 * @param  string $url URL地址
 * @return string|$this
 */
Request->root($url = NULL)

/**
 * 获取URL访问根目录
 * @access public
 * @return string
 */
Request->rootUrl()

/**
 * 获取当前请求URL的pathinfo信息（含URL后缀）
 * @access public
 * @return string
 */
Request->pathinfo()

/**
 * 获取当前请求URL的pathinfo信息(不含URL后缀)
 * @access public
 * @return string
 */
Request->path()

/**
 * 当前URL的访问后缀
 * @access public
 * @return string
 */
Request->ext()

/**
 * 获取当前请求的时间
 * @access public
 * @param  bool $float 是否使用浮点类型
 * @return integer|float
 */
Request->time($float = false)

/**
 * 当前请求的资源类型
 * @access public
 * @return false|string
 */
Request->type()

/**
 * 设置资源类型
 * @access public
 * @param  string|array  $type 资源类型名
 * @param  string$val 资源类型
 * @return void
 */
Request->mimeType($type, $val = '')

/**
 * 当前的请求类型
 * @access public
 * @param  bool $method  true 获取原始请求类型
 * @return string
 */
Request->method($method = false)

/**
 * 是否为GET请求
 * @access public
 * @return bool
 */
Request->isGet()

/**
 * 是否为POST请求
 * @access public
 * @return bool
 */
Request->isPost()

/**
 * 是否为PUT请求
 * @access public
 * @return bool
 */
Request->isPut()

/**
 * 是否为DELTE请求
 * @access public
 * @return bool
 */
Request->isDelete()

/**
 * 是否为HEAD请求
 * @access public
 * @return bool
 */
Request->isHead()

/**
 * 是否为PATCH请求
 * @access public
 * @return bool
 */
Request->isPatch()

/**
 * 是否为OPTIONS请求
 * @access public
 * @return bool
 */
Request->isOptions()

/**
 * 是否为cli
 * @access public
 * @return bool
 */
Request->isCli()

/**
 * 是否为cgi
 * @access public
 * @return bool
 */
Request->isCgi()

/**
 * 获取当前请求的参数
 * @access public
 * @param  mixed $name 变量名
 * @param  mixed $default 默认值
 * @param  string|array  $filter 过滤方法
 * @return mixed
 */
Request->param($name = '', $default = NULL, $filter = '')

/**
 * 设置获取路由参数
 * @access public
 * @param  mixed $name 变量名
 * @param  mixed $default 默认值
 * @param  string|array  $filter 过滤方法
 * @return mixed
 */
Request->route($name = '', $default = NULL, $filter = '')

/**
 * 设置获取GET参数
 * @access public
 * @param  mixed $name 变量名
 * @param  mixed $default 默认值
 * @param  string|array  $filter 过滤方法
 * @return mixed
 */
Request->get($name = '', $default = NULL, $filter = '')

/**
 * 设置获取POST参数
 * @access public
 * @param  mixed $name 变量名
 * @param  mixed $default 默认值
 * @param  string|array  $filter 过滤方法
 * @return mixed
 */
Request->post($name = '', $default = NULL, $filter = '')

/**
 * 设置获取PUT参数
 * @access public
 * @param  mixed $name 变量名
 * @param  mixed $default 默认值
 * @param  string|array  $filter 过滤方法
 * @return mixed
 */
Request->put($name = '', $default = NULL, $filter = '')

/**
 * 设置获取DELETE参数
 * @access public
 * @param  mixed $name 变量名
 * @param  mixed $default 默认值
 * @param  string|array  $filter 过滤方法
 * @return mixed
 */
Request->delete($name = '', $default = NULL, $filter = '')

/**
 * 设置获取PATCH参数
 * @access public
 * @param  mixed $name 变量名
 * @param  mixed $default 默认值
 * @param  string|array  $filter 过滤方法
 * @return mixed
 */
Request->patch($name = '', $default = NULL, $filter = '')

/**
 * 获取request变量
 * @access public
 * @param  mixed $name 数据名称
 * @param  string$default 默认值
 * @param  string|array  $filter 过滤方法
 * @return mixed
 */
Request->request($name = '', $default = NULL, $filter = '')

/**
 * 获取session数据
 * @access public
 * @param  mixed $name 数据名称
 * @param  string$default 默认值
 * @param  string|array  $filter 过滤方法
 * @return mixed
 */
Request->session($name = '', $default = NULL, $filter = '')

/**
 * 获取cookie参数
 * @access public
 * @param  mixed $name 数据名称
 * @param  string$default 默认值
 * @param  string|array  $filter 过滤方法
 * @return mixed
 */
Request->cookie($name = '', $default = NULL, $filter = '')

/**
 * 获取server参数
 * @access public
 * @param  mixed $name 数据名称
 * @param  string$default 默认值
 * @param  string|array  $filter 过滤方法
 * @return mixed
 */
Request->server($name = '', $default = NULL, $filter = '')

/**
 * 获取上传的文件信息
 * @access public
 * @param  string|array $name 名称
 * @return null|array|\think\File
 */
Request->file($name = '')

/**
 * 获取环境变量
 * @access public
 * @param  mixed $name 数据名称
 * @param  string$default 默认值
 * @param  string|array  $filter 过滤方法
 * @return mixed
 */
Request->env($name = '', $default = NULL, $filter = '')

/**
 * 设置或者获取当前的Header
 * @access public
 * @param  string|array  $name header名称
 * @param  string$default 默认值
 * @return string
 */
Request->header($name = '', $default = NULL)

/**
 * 获取变量 支持过滤和默认值
 * @access public
 * @param  array $data 数据源
 * @param  string|false  $name 字段名
 * @param  mixed $default 默认值
 * @param  string|array  $filter 过滤函数
 * @return mixed
 */
Request->input($data = [], $name = '', $default = NULL, $filter = '')

/**
 * 设置或获取当前的过滤规则
 * @access public
 * @param  mixed $filter 过滤规则
 * @return mixed
 */
Request->filter($filter = NULL)

$this->getFilter($filter, $default)

/**
 * 递归过滤给定的值
 * @access public
 * @param  mixed $value 键值
 * @param  mixed $key 键名
 * @param  array $filters 过滤方法+默认值
 * @return mixed
 */
$this->filterValue(&$value, $key, $filters)

/**
 * 强制类型转换
 * @access public
 * @param  string $data
 * @param  string $type
 * @return mixed
 */
$this->typeCast(&$data, $type)

/**
 * 是否存在某个请求参数
 * @access public
 * @param  string$name 变量名
 * @param  string$type 变量类型
 * @param  bool  $checkEmpty 是否检测空值
 * @return mixed
 */
Request->has($name, $type = 'param', $checkEmpty = false)

/**
 * 获取指定的参数
 * @access public
 * @param  string|array  $name 变量名
 * @param  string$type 变量类型
 * @return mixed
 */
Request->only($name, $type = 'param')

/**
 * 排除指定参数获取
 * @access public
 * @param  string|array  $name 变量名
 * @param  string$type 变量类型
 * @return mixed
 */
Request->except($name, $type = 'param')

/**
 * 当前是否ssl
 * @access public
 * @return bool
 */
Request->isSsl()

/**
 * 当前是否Ajax请求
 * @access public
 * @param  bool $ajax  true 获取原始ajax请求
 * @return bool
 */
Request->isAjax($ajax = false)

/**
 * 当前是否Pjax请求
 * @access public
 * @param  bool $pjax  true 获取原始pjax请求
 * @return bool
 */
Request->isPjax($pjax = false)

/**
 * 获取客户端IP地址
 * @access public
 * @param  integer   $type 返回类型 0 返回IP地址 1 返回IPV4地址数字
 * @param  boolean   $adv 是否进行高级模式获取（有可能被伪装）
 * @return mixed
 */
Request->ip($type = 0, $adv = true)

/**
 * 检测是否使用手机访问
 * @access public
 * @return bool
 */
Request->isMobile()

/**
 * 当前URL地址中的scheme参数
 * @access public
 * @return string
 */
Request->scheme()

/**
 * 当前请求URL地址中的query参数
 * @access public
 * @return string
 */
Request->query()

/**
 * 当前请求的host
 * @access public
 * @return string
 */
Request->host()

/**
 * 当前请求URL地址中的port参数
 * @access public
 * @return integer
 */
Request->port()

/**
 * 当前请求 SERVER_PROTOCOL
 * @access public
 * @return integer
 */
Request->protocol()

/**
 * 当前请求 REMOTE_PORT
 * @access public
 * @return integer
 */
Request->remotePort()

/**
 * 当前请求 HTTP_CONTENT_TYPE
 * @access public
 * @return string
 */
Request->contentType()

/**
 * 获取当前请求的路由信息
 * @access public
 * @param  array $route 路由名称
 * @return array
 */
Request->routeInfo($route = [])

/**
 * 设置或者获取当前请求的调度信息
 * @access public
 * @param  array  $dispatch 调度信息
 * @return array
 */
Request->dispatch($dispatch = NULL)

/**
 * 设置或者获取当前的模块名
 * @access public
 * @param  string $module 模块名
 * @return string|Request
 */
Request->module($module = NULL)

/**
 * 设置或者获取当前的控制器名
 * @access public
 * @param  string $controller 控制器名
 * @return string|Request
 */
Request->controller($controller = NULL)

/**
 * 设置或者获取当前的操作名
 * @access public
 * @param  string $action 操作名
 * @return string|Request
 */
Request->action($action = NULL)

/**
 * 设置或者获取当前的语言
 * @access public
 * @param  string $lang 语言名
 * @return string|Request
 */
Request->langset($lang = NULL)

/**
 * 设置或者获取当前请求的content
 * @access public
 * @return string
 */
Request->getContent()

/**
 * 获取当前请求的php://input
 * @access public
 * @return string
 */
Request->getInput()

/**
 * 生成请求令牌
 * @access public
 * @param  string $name 令牌名称
 * @param  mixed  $type 令牌生成方法
 * @return string
 */
Request->token($name = '__token__', $type = 'md5')

/**
 * 设置当前地址的请求缓存
 * @access public
 * @param  string $key 缓存标识，支持变量规则 ，例如 item/:name/:id
 * @param  mixed  $expire 缓存有效期
 * @param  array  $except 缓存排除
 * @param  string $tag缓存标签
 * @return void
 */
Request->cache($key, $expire = NULL, $except = [], $tag = NULL)

/**
 * 读取请求缓存设置
 * @access public
 * @return array
 */
Request->getCache()
:::
::: card Response 
``` php
$Response = new Response();
/**
 * 创建Response对象
 * @access public
 * @param  mixed  $data输出数据
 * @param  string $type输出类型
 * @param  int$code
 * @param  array  $header
 * @param  array  $options 输出参数
 * @return Response
 */
Response::create($data = '', $type = '', $code = 200, $header = [], $options = [])

/**
 * 发送数据到客户端
 * @access public
 * @return void
 * @throws \InvalidArgumentException
 */
Response->send()

/**
 * 处理数据
 * @access protected
 * @param  mixed $data 要处理的数据
 * @return mixed
 */
$this->output($data)

/**
 * 输出数据
 * @access protected
 * @param string $data 要处理的数据
 * @return void
 */
$this->sendData($data)

/**
 * 输出的参数
 * @access public
 * @param  mixed $options 输出参数
 * @return $this
 */
Response->options($options = [])

/**
 * 输出数据设置
 * @access public
 * @param  mixed $data 输出数据
 * @return $this
 */
Response->data($data)

/**
 * 是否允许请求缓存
 * @access public
 * @param  bool $cache 允许请求缓存
 * @return $this
 */
Response->allowCache($cache)

/**
 * 设置响应头
 * @access public
 * @param  string|array $name  参数名
 * @param  string   $value 参数值
 * @return $this
 */
Response->header($name, $value = NULL)

/**
 * 设置页面输出内容
 * @access public
 * @param  mixed $content
 * @return $this
 */
Response->content($content)

/**
 * 发送HTTP状态
 * @access public
 * @param  integer $code 状态码
 * @return $this
 */
Response->code($code)

/**
 * LastModified
 * @access public
 * @param  string $time
 * @return $this
 */
Response->lastModified($time)

/**
 * Expires
 * @access public
 * @param  string $time
 * @return $this
 */
Response->expires($time)

/**
 * ETag
 * @access public
 * @param  string $eTag
 * @return $this
 */
Response->eTag($eTag)

/**
 * 页面缓存控制
 * @access public
 * @param  string $cache 状态码
 * @return $this
 */
Response->cacheControl($cache)

/**
 * 页面输出类型
 * @access public
 * @param  string $contentType 输出类型
 * @param  string $charset 输出编码
 * @return $this
 */
Response->contentType($contentType, $charset = 'utf-8')

/**
 * 获取头部信息
 * @access public
 * @param  string $name 头部名称
 * @return mixed
 */
Response->getHeader($name = '')

/**
 * 获取原始数据
 * @access public
 * @return mixed
 */
Response->getData()

/**
 * 获取输出数据
 * @access public
 * @return mixed
 */
Response->getContent()

/**
 * 获取状态码
 * @access public
 * @return integer
 */
Response->getCode()
:::
::: card Route 
``` php
$Route = new Route();
/**
 * 初始化默认域名
 * @access protected
 * @return void
 */
$this->setDefaultDomain()

/**
 * 创建一个域名下的顶级路由分组
 * @access protected
 * @param  Domain$domain 域名
 * @return RuleGroup
 */
$this->createTopGroup($domain)

/**
 * 设置当前域名
 * @access public
 * @param  RuleGroup$group 域名
 * @return void
 */
Route->setGroup($group)

/**
 * 获取当前分组
 * @access public
 * @return RuleGroup
 */
Route->getGroup()

/**
 * 注册变量规则
 * @access public
 * @param  string|array  $name 变量名
 * @param  string$rule 变量规则
 * @return $this
 */
Route->pattern($name, $rule = '')

/**
 * 注册路由参数
 * @access public
 * @param  string|array  $name  参数名
 * @param  mixed $value 值
 * @return $this
 */
Route->option($name, $value = '')

/**
 * 获取当前根域名
 * @access protected
 * @return string
 */
$this->getRootDomain()

/**
 * 注册域名路由
 * @access public
 * @param  string|array  $name 子域名
 * @param  mixed $rule 路由规则
 * @param  array $option 路由参数
 * @param  array $pattern 变量规则
 * @return Domain
 */
Route->domain($name, $rule = '', $option = [], $pattern = [])

/**
 * 解析分组和域名的路由规则及绑定
 * @access public
 * @param  RuleGroup$group 分组路由对象
 * @param  mixed$rule 路由规则
 * @return void
 */
Route->parseGroupRule($group, $rule)

/**
 * 获取域名
 * @access public
 * @return array
 */
Route->getDomains()

/**
 * 设置路由绑定
 * @access public
 * @param  string $bind 绑定信息
 * @return $this
 */
Route->bind($bind)

/**
 * 读取路由绑定
 * @access public
 * @param  string$domain 域名
 * @return string|null
 */
Route->getBind($domain = NULL)

/**
 * 设置当前路由标识
 * @access public
 * @param  string $name 路由命名标识
 * @return $this
 */
Route->name($name)

/**
 * 读取路由标识
 * @access public
 * @param  string$name 路由标识
 * @return mixed
 */
Route->getName($name = NULL)

/**
 * 批量导入路由标识
 * @access public
 * @param  array$name 路由标识
 * @return $this
 */
Route->setName($name)

/**
 * 导入配置文件的路由规则
 * @access public
 * @param  array $rules 路由规则
 * @param  string$type  请求类型
 * @return void
 */
Route->import($rules, $type = '*')

/**
 * 注册路由规则
 * @access public
 * @param  string$rule   路由规则
 * @param  mixed $route  路由地址
 * @param  string$method 请求类型
 * @param  array $option 路由参数
 * @param  array $pattern变量规则
 * @return RuleItem
 */
Route->rule($rule, $route, $method = '*', $option = [], $pattern = [])

/**
 * 设置路由标识 用于URL反解生成
 * @access public
 * @param  string$rule  路由规则
 * @param  string$name  路由标识
 * @param  array $option路由参数
 * @return void
 */
Route->setRuleName($rule, $name, $option = [])

/**
 * 设置跨域有效路由规则
 * @access public
 * @param  Rule  $rule  路由规则
 * @param  string$method请求类型
 * @return $this
 */
Route->setCrossDomainRule($rule, $method = '*')

/**
 * 批量注册路由规则
 * @access public
 * @param  array $rules  路由规则
 * @param  string$method 请求类型
 * @param  array $option 路由参数
 * @param  array $pattern变量规则
 * @return void
 */
Route->rules($rules, $method = '*', $option = [], $pattern = [])

/**
 * 注册路由分组
 * @access public
 * @param  string|array  $name   分组名称或者参数
 * @param  array|\Closure$route  分组路由
 * @param  array $option 路由参数
 * @param  array $pattern变量规则
 * @return RuleGroup
 */
Route->group($name, $route, $option = [], $pattern = [])

/**
 * 注册路由
 * @access public
 * @param  string$rule 路由规则
 * @param  string$route 路由地址
 * @param  array $option 路由参数
 * @param  array $pattern 变量规则
 * @return RuleItem
 */
Route->any($rule, $route = '', $option = [], $pattern = [])

/**
 * 注册GET路由
 * @access public
 * @param  string$rule 路由规则
 * @param  string$route 路由地址
 * @param  array $option 路由参数
 * @param  array $pattern 变量规则
 * @return RuleItem
 */
Route->get($rule, $route = '', $option = [], $pattern = [])

/**
 * 注册POST路由
 * @access public
 * @param  string$rule 路由规则
 * @param  string$route 路由地址
 * @param  array $option 路由参数
 * @param  array $pattern 变量规则
 * @return RuleItem
 */
Route->post($rule, $route = '', $option = [], $pattern = [])

/**
 * 注册PUT路由
 * @access public
 * @param  string$rule 路由规则
 * @param  string$route 路由地址
 * @param  array $option 路由参数
 * @param  array $pattern 变量规则
 * @return RuleItem
 */
Route->put($rule, $route = '', $option = [], $pattern = [])

/**
 * 注册DELETE路由
 * @access public
 * @param  string$rule 路由规则
 * @param  string$route 路由地址
 * @param  array $option 路由参数
 * @param  array $pattern 变量规则
 * @return RuleItem
 */
Route->delete($rule, $route = '', $option = [], $pattern = [])

/**
 * 注册PATCH路由
 * @access public
 * @param  string$rule 路由规则
 * @param  string$route 路由地址
 * @param  array $option 路由参数
 * @param  array $pattern 变量规则
 * @return RuleItem
 */
Route->patch($rule, $route = '', $option = [], $pattern = [])

/**
 * 注册资源路由
 * @access public
 * @param  string$rule 路由规则
 * @param  string$route 路由地址
 * @param  array $option 路由参数
 * @param  array $pattern 变量规则
 * @return Resource
 */
Route->resource($rule, $route = '', $option = [], $pattern = [])

/**
 * 注册控制器路由 操作方法对应不同的请求后缀
 * @access public
 * @param  string$rule 路由规则
 * @param  string$route 路由地址
 * @param  array $option 路由参数
 * @param  array $pattern 变量规则
 * @return $this
 */
Route->controller($rule, $route = '', $option = [], $pattern = [])

/**
 * 注册视图路由
 * @access public
 * @param  string|array $rule 路由规则
 * @param  string   $template 路由模板地址
 * @param  array$vars 模板变量
 * @param  array$option 路由参数
 * @param  array$pattern 变量规则
 * @return RuleItem
 */
Route->view($rule, $template = '', $vars = [], $option = [], $pattern = [])

/**
 * 注册重定向路由
 * @access public
 * @param  string|array $rule 路由规则
 * @param  string   $template 路由模板地址
 * @param  array$status 状态码
 * @param  array$option 路由参数
 * @param  array$pattern 变量规则
 * @return RuleItem
 */
Route->redirect($rule, $route = '', $status = 301, $option = [], $pattern = [])

/**
 * 注册别名路由
 * @access public
 * @param  string|array  $rule 路由别名
 * @param  string$route 路由地址
 * @param  array $option 路由参数
 * @return $this
 */
Route->alias($rule = NULL, $route = '', $option = [])

/**
 * 获取别名路由定义
 * @access public
 * @param  string$name 路由别名
 * @return string|array|null
 */
Route->getAlias($name = NULL)

/**
 * 设置不同请求类型下面的方法前缀
 * @access public
 * @param  string|array  $method 请求类型
 * @param  string$prefix 类型前缀
 * @return $this
 */
Route->setMethodPrefix($method, $prefix = '')

/**
 * 获取请求类型的方法前缀
 * @access public
 * @param  string$method 请求类型
 * @param  string$prefix 类型前缀
 * @return string|null
 */
Route->getMethodPrefix($method)

/**
 * rest方法定义和修改
 * @access public
 * @param  string$name 方法名称
 * @param  array|bool$resource 资源
 * @return $this
 */
Route->rest($name, $resource = [])

/**
 * 获取rest方法定义的参数
 * @access public
 * @param  string$name 方法名称
 * @return array|null
 */
Route->getRest($name = NULL)

/**
 * 注册未匹配路由规则后的处理
 * @access public
 * @param  string$route 路由地址
 * @param  string$method 请求类型
 * @param  array $option 路由参数
 * @return RuleItem
 */
Route->miss($route, $method = '*', $option = [])

/**
 * 注册一个自动解析的URL路由
 * @access public
 * @param  string$route 路由地址
 * @return RuleItem
 */
Route->auto($route)

/**
 * 检测URL路由
 * @access public
 * @param  string$url URL地址
 * @param  string$depr URL分隔符
 * @param  bool  $must 是否强制路由
 * @param  bool  $completeMatch   路由是否完全匹配
 * @return Dispatch
 * @throws RouteNotFoundException
 */
Route->check($url, $depr = '/', $must = false, $completeMatch = false)

/**
 * 检测域名的路由规则
 * @access protected
 * @param  string$host 当前主机地址
 * @return Domain
 */
$this->checkDomain()

/**
 * 分析路由规则中的变量
 * @access public
 * @param  string$rule 路由规则
 * @return array
 */
Route->parseVar($rule)

/**
 * 设置全局的路由分组参数
 * @access public
 * @param  string$method 方法名
 * @param  array $args   调用参数
 * @return RuleGroup
 */
Route->__call($method, $args)
:::
::: card Session 
``` php
$Session = new Session();
/**
 * 设置或者获取session作用域（前缀）
 * @access public
 * @param  string $prefix
 * @return string|void
 */
Session->prefix($prefix = '')

/**
 * session初始化
 * @access public
 * @param  array $config
 * @return void
 * @throws \think\Exception
 */
Session->init($config = [])

/**
 * session自动启动或者初始化
 * @access public
 * @return void
 */
Session->boot()

/**
 * session设置
 * @access public
 * @param  string$name session名称
 * @param  mixed $value session值
 * @param  string|null   $prefix 作用域（前缀）
 * @return void
 */
Session->set($name, $value, $prefix = NULL)

/**
 * session获取
 * @access public
 * @param  string$name session名称
 * @param  string|null   $prefix 作用域（前缀）
 * @return mixed
 */
Session->get($name = '', $prefix = NULL)

/**
 * session 读写锁驱动实例化
 */
$this->initDriver()

/**
 * session 读写加锁
 * @access protected
 * @return void
 */
$this->lock()

/**
 * session 读写解锁
 * @access protected
 * @return void
 */
$this->unlock()

/**
 * session获取并删除
 * @access public
 * @param  string$name session名称
 * @param  string|null   $prefix 作用域（前缀）
 * @return mixed
 */
Session->pull($name, $prefix = NULL)

/**
 * session设置 下一次请求有效
 * @access public
 * @param  string$name session名称
 * @param  mixed $value session值
 * @param  string|null   $prefix 作用域（前缀）
 * @return void
 */
Session->flash($name, $value)

/**
 * 清空当前请求的session数据
 * @access public
 * @return void
 */
Session->flush()

/**
 * 删除session数据
 * @access public
 * @param  string|array  $name session名称
 * @param  string|null   $prefix 作用域（前缀）
 * @return void
 */
Session->delete($name, $prefix = NULL)

/**
 * 清空session数据
 * @access public
 * @param  string|null   $prefix 作用域（前缀）
 * @return void
 */
Session->clear($prefix = NULL)

/**
 * 判断session数据
 * @access public
 * @param  string$name session名称
 * @param  string|null   $prefix
 * @return bool
 */
Session->has($name, $prefix = NULL)

/**
 * 添加数据到一个session数组
 * @access public
 * @param  string  $key
 * @param  mixed   $value
 * @return void
 */
Session->push($key, $value)

/**
 * 启动session
 * @access public
 * @return void
 */
Session->start()

/**
 * 销毁session
 * @access public
 * @return void
 */
Session->destroy()

/**
 * 重新生成session_id
 * @access public
 * @param  bool $delete 是否删除关联会话文件
 * @return void
 */
Session->regenerate($delete = false)

/**
 * 暂停session
 * @access public
 * @return void
 */
Session->pause()
:::
::: card Template 
``` php
$Template = new Template();
/**
 * 字符串替换 避免正则混淆
 * @access private
 * @param  string $str
 * @return string
 */
$this->stripPreg($str)

/**
 * 模板变量赋值
 * @access public
 * @param  mixed $name
 * @param  mixed $value
 * @return void
 */
Template->assign($name, $value = '')

/**
 * 模板引擎参数赋值
 * @access public
 * @param  mixed $name
 * @param  mixed $value
 */
Template->__set($name, $value)

/**
 * 模板引擎配置项
 * @access public
 * @param  array|string $config
 * @return void|array
 */
Template->config($config)

/**
 * 模板变量获取
 * @access public
 * @param  string $name 变量名
 * @return mixed
 */
Template->get($name = '')

/**
 * 渲染模板文件
 * @access public
 * @param  string$template 模板文件
 * @param  array $vars 模板变量
 * @param  array $config 模板参数
 * @return void
 */
Template->fetch($template, $vars = [], $config = [])

/**
 * 渲染模板内容
 * @access public
 * @param  string$content 模板内容
 * @param  array $vars 模板变量
 * @param  array $config 模板参数
 * @return void
 */
Template->display($content, $vars = [], $config = [])

/**
 * 设置布局
 * @access public
 * @param  mixed $name 布局模板名称 false 则关闭布局
 * @param  string$replace 布局模板内容替换标识
 * @return object
 */
Template->layout($name, $replace = '')

/**
 * 检查编译缓存是否有效
 * 如果无效则需要重新编译
 * @access private
 * @param  string $cacheFile 缓存文件名
 * @return boolean
 */
$this->checkCache($cacheFile)

/**
 * 检查编译缓存是否存在
 * @access public
 * @param  string $cacheId 缓存的id
 * @return boolean
 */
Template->isCache($cacheId)

/**
 * 编译模板文件内容
 * @access private
 * @param  string$content 模板内容
 * @param  string$cacheFile 缓存文件名
 * @return void
 */
$this->compiler(&$content, $cacheFile)

/**
 * 模板解析入口
 * 支持普通标签和TagLib解析 支持自定义标签库
 * @access public
 * @param  string $content 要解析的模板内容
 * @return void
 */
Template->parse(&$content)

/**
 * 检查PHP语法
 * @access private
 * @param  string $content 要解析的模板内容
 * @return void
 * @throws \think\Exception
 */
$this->parsePhp(&$content)

/**
 * 解析模板中的布局标签
 * @access private
 * @param  string $content 要解析的模板内容
 * @return void
 */
$this->parseLayout(&$content)

/**
 * 解析模板中的include标签
 * @access private
 * @param  string $content 要解析的模板内容
 * @return void
 */
$this->parseInclude(&$content)

/**
 * 解析模板中的extend标签
 * @access private
 * @param  string $content 要解析的模板内容
 * @return void
 */
$this->parseExtend(&$content)

/**
 * 替换页面中的literal标签
 * @access private
 * @param  string   $content 模板内容
 * @param  boolean  $restore 是否为还原
 * @return void
 */
$this->parseLiteral(&$content, $restore = false)

/**
 * 获取模板中的block标签
 * @access private
 * @param  string   $content 模板内容
 * @param  boolean  $sort 是否排序
 * @return array
 */
$this->parseBlock(&$content, $sort = false)

/**
 * 搜索模板页面中包含的TagLib库
 * 并返回列表
 * @access private
 * @param  string $content 模板内容
 * @return array|null
 */
$this->getIncludeTagLib(&$content)

/**
 * TagLib库解析
 * @access public
 * @param  string   $tagLib 要解析的标签库
 * @param  string   $content 要解析的模板内容
 * @param  boolean  $hide 是否隐藏标签库前缀
 * @return void
 */
Template->parseTagLib($tagLib, &$content, $hide = false)

/**
 * 分析标签属性
 * @access public
 * @param  string   $str 属性字符串
 * @param  string   $name 不为空时返回指定的属性名
 * @return array
 */
Template->parseAttr($str, $name = NULL)

/**
 * 模板标签解析
 * 格式： {TagName:args [|content] }
 * @access private
 * @param  string $content 要解析的模板内容
 * @return void
 */
$this->parseTag(&$content)

/**
 * 模板变量解析,支持使用函数
 * 格式： {$varname|function1|function2=arg1,arg2}
 * @access public
 * @param  string $varStr 变量数据
 * @return void
 */
Template->parseVar(&$varStr)

/**
 * 对模板中使用了函数的变量进行解析
 * 格式 {$varname|function1|function2=arg1,arg2}
 * @access public
 * @param  string$varStr 变量字符串
 * @param  bool  $autoescape 自动转义
 * @return void
 */
Template->parseVarFunction(&$varStr, $autoescape = true)

/**
 * 特殊模板变量解析
 * 格式 以 $Think. 打头的变量属于特殊模板变量
 * @access public
 * @param  array $vars 变量数组
 * @return string
 */
Template->parseThinkVar($vars)

/**
 * 分析加载的模板文件并读取内容 支持多个模板文件读取
 * @access private
 * @param  string $templateName 模板文件名
 * @return string
 */
$this->parseTemplateName($templateName)

/**
 * 解析模板文件名
 * @access private
 * @param  string $template 文件名
 * @return string|false
 */
$this->parseTemplateFile($template)

/**
 * 按标签生成正则
 * @access private
 * @param  string $tagName 标签名
 * @return string
 */
$this->getRegex($tagName)
:::
::: card Url 
``` php
$Url = new Url();
/**
 * URL生成 支持路由反射
 * @access public
 * @param  string$url 路由地址
 * @param  string|array  $vars 参数（支持数组和字符串）a=val&b=val2... ['a'=>'val1', 'b'=>'val2']
 * @param  string|bool   $suffix 伪静态后缀，默认为true表示获取配置值
 * @param  boolean|string$domain 是否显示域名 或者直接传入域名
 * @return string
 */
Url->build($url = '', $vars = '', $suffix = true, $domain = false)

$this->parseUrl($url)

$this->parseDomain(&$url, $domain)

$this->parseSuffix($suffix)

Url->getRuleUrl($rule, &$vars = [])

Url->root($root)
:::
::: card Validate 
``` php
$Validate = new Validate();
/**
 * 创建一个验证器类
 * @access public
 * @param  array $rules 验证规则
 * @param  array $message 验证提示信息
 * @param  array $field 验证字段描述信息
 */
Validate::make($rules = [], $message = [], $field = [])

/**
 * 添加字段验证规则
 * @access protected
 * @param  string|array  $name  字段名称或者规则数组
 * @param  mixed $rule  验证规则或者字段描述信息
 * @return $this
 */
Validate->rule($name, $rule = '')

/**
 * 注册扩展验证（类型）规则
 * @access public
 * @param  string$type  验证规则类型
 * @param  mixed $callback callback方法(或闭包)
 * @return void
 */
Validate::extend($type, $callback = NULL)

/**
 * 设置验证规则的默认提示信息
 * @access public
 * @param  string|array  $type  验证规则类型名称或者数组
 * @param  string$msg  验证提示信息
 * @return void
 */
Validate::setTypeMsg($type, $msg = NULL)

/**
 * 设置提示信息
 * @access public
 * @param  string|array  $name  字段名称
 * @param  string$message 提示信息
 * @return Validate
 */
Validate->message($name, $message = '')

/**
 * 设置验证场景
 * @access public
 * @param  string  $name  场景名
 * @return $this
 */
Validate->scene($name)

/**
 * 判断是否存在某个验证场景
 * @access public
 * @param  string $name 场景名
 * @return bool
 */
Validate->hasScene($name)

/**
 * 设置批量验证
 * @access public
 * @param  bool $batch  是否批量验证
 * @return $this
 */
Validate->batch($batch = true)

/**
 * 指定需要验证的字段列表
 * @access public
 * @param  array $fields  字段名
 * @return $this
 */
Validate->only($fields)

/**
 * 移除某个字段的验证规则
 * @access public
 * @param  string|array  $field  字段名
 * @param  mixed $rule   验证规则 true 移除所有规则
 * @return $this
 */
Validate->remove($field, $rule = true)

/**
 * 追加某个字段的验证规则
 * @access public
 * @param  string|array  $field  字段名
 * @param  mixed $rule   验证规则
 * @return $this
 */
Validate->append($field, $rule = NULL)

/**
 * 数据自动验证
 * @access public
 * @param  array $data  数据
 * @param  mixed $rules  验证规则
 * @param  string$scene 验证场景
 * @return bool
 */
Validate->check($data, $rules = [], $scene = '')

/**
 * 根据验证规则验证数据
 * @access public
 * @param  mixed $value 字段值
 * @param  mixed $rules 验证规则
 * @return bool
 */
Validate->checkRule($value, $rules)

/**
 * 验证单个字段规则
 * @access protected
 * @param  string$field  字段名
 * @param  mixed $value  字段值
 * @param  mixed $rules  验证规则
 * @param  array $data  数据
 * @param  string$title  字段描述
 * @param  array $msg  提示信息
 * @return mixed
 */
$this->checkItem($field, $value, $rules, $data, $title = '', $msg = [])

/**
 * 获取当前验证类型及规则
 * @access public
 * @param  mixed $key
 * @param  mixed $rule
 * @return array
 */
$this->getValidateType($key, $rule)

/**
 * 验证是否和某个字段的值一致
 * @access public
 * @param  mixed $value 字段值
 * @param  mixed $rule  验证规则
 * @param  array $data  数据
 * @param  string$field 字段名
 * @return bool
 */
Validate->confirm($value, $rule, $data = [], $field = '')

/**
 * 验证是否和某个字段的值是否不同
 * @access public
 * @param  mixed $value 字段值
 * @param  mixed $rule  验证规则
 * @param  array $data  数据
 * @return bool
 */
Validate->different($value, $rule, $data = [])

/**
 * 验证是否大于等于某个值
 * @access public
 * @param  mixed $value  字段值
 * @param  mixed $rule  验证规则
 * @param  array $data  数据
 * @return bool
 */
Validate->egt($value, $rule, $data = [])

/**
 * 验证是否大于某个值
 * @access public
 * @param  mixed $value  字段值
 * @param  mixed $rule  验证规则
 * @param  array $data  数据
 * @return bool
 */
Validate->gt($value, $rule, $data)

/**
 * 验证是否小于等于某个值
 * @access public
 * @param  mixed $value  字段值
 * @param  mixed $rule  验证规则
 * @param  array $data  数据
 * @return bool
 */
Validate->elt($value, $rule, $data = [])

/**
 * 验证是否小于某个值
 * @access public
 * @param  mixed $value  字段值
 * @param  mixed $rule  验证规则
 * @param  array $data  数据
 * @return bool
 */
Validate->lt($value, $rule, $data = [])

/**
 * 验证是否等于某个值
 * @access public
 * @param  mixed $value  字段值
 * @param  mixed $rule  验证规则
 * @return bool
 */
Validate->eq($value, $rule)

/**
 * 必须验证
 * @access public
 * @param  mixed $value  字段值
 * @param  mixed $rule  验证规则
 * @return bool
 */
Validate->must($value, $rule = NULL)

/**
 * 验证字段值是否为有效格式
 * @access public
 * @param  mixed $value  字段值
 * @param  string$rule  验证规则
 * @param  array $data  验证数据
 * @return bool
 */
Validate->is($value, $rule, $data = [])

$this->getImageType($image)

/**
 * 验证是否为合格的域名或者IP 支持A，MX，NS，SOA，PTR，CNAME，AAAA，A6， SRV，NAPTR，TXT 或者 ANY类型
 * @access public
 * @param  mixed $value  字段值
 * @param  mixed $rule  验证规则
 * @return bool
 */
Validate->activeUrl($value, $rule = 'MX')

/**
 * 验证是否有效IP
 * @access public
 * @param  mixed $value  字段值
 * @param  mixed $rule  验证规则 ipv4 ipv6
 * @return bool
 */
Validate->ip($value, $rule = 'ipv4')

/**
 * 验证上传文件后缀
 * @access public
 * @param  mixed $file  上传文件
 * @param  mixed $rule  验证规则
 * @return bool
 */
Validate->fileExt($file, $rule)

/**
 * 验证上传文件类型
 * @access public
 * @param  mixed $file  上传文件
 * @param  mixed $rule  验证规则
 * @return bool
 */
Validate->fileMime($file, $rule)

/**
 * 验证上传文件大小
 * @access public
 * @param  mixed $file  上传文件
 * @param  mixed $rule  验证规则
 * @return bool
 */
Validate->fileSize($file, $rule)

/**
 * 验证图片的宽高及类型
 * @access public
 * @param  mixed $file  上传文件
 * @param  mixed $rule  验证规则
 * @return bool
 */
Validate->image($file, $rule)

/**
 * 验证请求类型
 * @access public
 * @param  mixed $value  字段值
 * @param  mixed $rule  验证规则
 * @return bool
 */
Validate->method($value, $rule)

/**
 * 验证时间和日期是否符合指定格式
 * @access public
 * @param  mixed $value  字段值
 * @param  mixed $rule  验证规则
 * @return bool
 */
Validate->dateFormat($value, $rule)

/**
 * 验证是否唯一
 * @access public
 * @param  mixed $value  字段值
 * @param  mixed $rule  验证规则 格式：数据表,字段名,排除ID,主键名
 * @param  array $data  数据
 * @param  string$field  验证字段名
 * @return bool
 */
Validate->unique($value, $rule, $data, $field)

/**
 * 使用行为类验证
 * @access public
 * @param  mixed $value  字段值
 * @param  mixed $rule  验证规则
 * @param  array $data  数据
 * @return mixed
 */
Validate->behavior($value, $rule, $data)

/**
 * 使用filter_var方式验证
 * @access public
 * @param  mixed $value  字段值
 * @param  mixed $rule  验证规则
 * @return bool
 */
Validate->filter($value, $rule)

/**
 * 验证某个字段等于某个值的时候必须
 * @access public
 * @param  mixed $value  字段值
 * @param  mixed $rule  验证规则
 * @param  array $data  数据
 * @return bool
 */
Validate->requireIf($value, $rule, $data)

/**
 * 通过回调方法验证某个字段是否必须
 * @access public
 * @param  mixed $value  字段值
 * @param  mixed $rule  验证规则
 * @param  array $data  数据
 * @return bool
 */
Validate->requireCallback($value, $rule, $data)

/**
 * 验证某个字段有值的情况下必须
 * @access public
 * @param  mixed $value  字段值
 * @param  mixed $rule  验证规则
 * @param  array $data  数据
 * @return bool
 */
Validate->requireWith($value, $rule, $data)

/**
 * 验证是否在范围内
 * @access public
 * @param  mixed $value  字段值
 * @param  mixed $rule  验证规则
 * @return bool
 */
Validate->in($value, $rule)

/**
 * 验证是否不在某个范围
 * @access public
 * @param  mixed $value  字段值
 * @param  mixed $rule  验证规则
 * @return bool
 */
Validate->notIn($value, $rule)

/**
 * between验证数据
 * @access public
 * @param  mixed $value  字段值
 * @param  mixed $rule  验证规则
 * @return bool
 */
Validate->between($value, $rule)

/**
 * 使用notbetween验证数据
 * @access public
 * @param  mixed $value  字段值
 * @param  mixed $rule  验证规则
 * @return bool
 */
Validate->notBetween($value, $rule)

/**
 * 验证数据长度
 * @access public
 * @param  mixed $value  字段值
 * @param  mixed $rule  验证规则
 * @return bool
 */
Validate->length($value, $rule)

/**
 * 验证数据最大长度
 * @access public
 * @param  mixed $value  字段值
 * @param  mixed $rule  验证规则
 * @return bool
 */
Validate->max($value, $rule)

/**
 * 验证数据最小长度
 * @access public
 * @param  mixed $value  字段值
 * @param  mixed $rule  验证规则
 * @return bool
 */
Validate->min($value, $rule)

/**
 * 验证日期
 * @access public
 * @param  mixed $value  字段值
 * @param  mixed $rule  验证规则
 * @return bool
 */
Validate->after($value, $rule)

/**
 * 验证日期
 * @access public
 * @param  mixed $value  字段值
 * @param  mixed $rule  验证规则
 * @return bool
 */
Validate->before($value, $rule)

/**
 * 验证有效期
 * @access public
 * @param  mixed $value  字段值
 * @param  mixed $rule  验证规则
 * @return bool
 */
Validate->expire($value, $rule)

/**
 * 验证IP许可
 * @access public
 * @param  string$value  字段值
 * @param  mixed $rule  验证规则
 * @return mixed
 */
Validate->allowIp($value, $rule)

/**
 * 验证IP禁用
 * @access public
 * @param  string$value  字段值
 * @param  mixed $rule  验证规则
 * @return mixed
 */
Validate->denyIp($value, $rule)

/**
 * 使用正则验证数据
 * @access public
 * @param  mixed $value  字段值
 * @param  mixed $rule  验证规则 正则规则或者预定义正则名
 * @return bool
 */
Validate->regex($value, $rule)

/**
 * 验证表单令牌
 * @access public
 * @param  mixed $value  字段值
 * @param  mixed $rule  验证规则
 * @param  array $data  数据
 * @return bool
 */
Validate->token($value, $rule, $data)

Validate->getError()

/**
 * 获取数据值
 * @access protected
 * @param  array $data  数据
 * @param  string$key  数据标识 支持二维
 * @return mixed
 */
$this->getDataValue($data, $key)

/**
 * 获取验证规则的错误提示信息
 * @access protected
 * @param  string$attribute  字段英文名
 * @param  string$title  字段描述名
 * @param  string$type  验证规则名称
 * @param  mixed $rule  验证规则数据
 * @return string
 */
$this->getRuleMsg($attribute, $title, $type, $rule)

/**
 * 获取数据验证的场景
 * @access protected
 * @param  string $scene  验证场景
 * @return array
 */
$this->getScene($scene = '')

/**
 * 动态方法 直接调用is方法进行验证
 * @access public
 * @param  string $method  方法名
 * @param  array $args  调用参数
 * @return bool
 */
Validate->__call($method, $args)
:::
::: card View 
``` php
$View = new View();
/**
 * 初始化
 * @access public
 * @param  mixed $engine  模板引擎参数
 * @return $this
 */
View->init($engine = [])

/**
 * 模板变量静态赋值
 * @access public
 * @param  mixed $name  变量名
 * @param  mixed $value 变量值
 * @return $this
 */
View->share($name, $value = '')

/**
 * 模板变量赋值
 * @access public
 * @param  mixed $name  变量名
 * @param  mixed $value 变量值
 * @return $this
 */
View->assign($name, $value = '')

/**
 * 设置当前模板解析的引擎
 * @access public
 * @param  array|string $options 引擎参数
 * @return $this
 */
View->engine($options = [])

/**
 * 配置模板引擎
 * @access public
 * @param  string|array  $name 参数名
 * @param  mixed $value 参数值
 * @return $this
 */
View->config($name, $value = NULL)

/**
 * 检查模板是否存在
 * @access public
 * @param  string|array  $name 参数名
 * @return bool
 */
View->exists($name)

/**
 * 视图过滤
 * @access public
 * @param Callable  $filter 过滤方法或闭包
 * @return $this
 */
View->filter($filter)

/**
 * 解析和获取模板内容 用于输出
 * @access public
 * @param  string$template 模板文件名或者内容
 * @param  array $vars 模板输出变量
 * @param  array $config 模板参数
 * @param  bool  $renderContent 是否渲染内容
 * @return string
 * @throws \Exception
 */
View->fetch($template = '', $vars = [], $config = [], $renderContent = false)

/**
 * 渲染内容输出
 * @access public
 * @param  string $content 内容
 * @param  array  $vars模板输出变量
 * @param  array  $config  模板参数
 * @return mixed
 */
View->display($content, $vars = [], $config = [])

/**
 * 模板变量赋值
 * @access public
 * @param  string$name  变量名
 * @param  mixed $value 变量值
 */
View->__set($name, $value)

/**
 * 取得模板显示变量的值
 * @access protected
 * @param  string $name 模板变量
 * @return mixed
 */
View->__get($name)

/**
 * 检测模板变量是否设置
 * @access public
 * @param  string $name 模板变量名
 * @return bool
 */
View->__isset($name)
:::