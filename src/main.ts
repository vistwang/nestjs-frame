import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);

//   const app = await NestFactory.createMicroservice(AppModule, {
//     transport: Transport.REDIS,
//     options: {
//       url: 'redis://localhost:6379',
//     },
//   });

  const options = new DocumentBuilder()
    .setTitle('Blockchain browser API documentation')
    .setDescription('我的第一个 swagger文档')
    .setVersion('1.0')
    .addTag('cats')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);

  // tslint:disable-next-line:no-console
  app.enableCors();
  await app.listen(3000, () => {
    // console.log('Application is listening on port 3000'),
  });
}
bootstrap();

// CoreModule 核心模块（注册中间件，过滤器，管道，守卫，拦截器，装饰器等）
// SharedModule 共享模块（注册服务，mongodb，redis等）
// ConfigModule 配置模块（系统配置）
// FeatureModule 特性模块（业务模块，如用户模块，产品模块等

// generate(简写：g) 生成文件
// class (简写: cl) 类
// controller (简写: co) 控制器
// decorator (简写: d) 装饰器
// exception (简写: e) 异常捕获
// filter (简写: f) 过滤器
// gateway (简写: ga) 网关
// guard (简写: gu) 守卫
// interceptor (简写: i) 拦截器
// middleware (简写: mi) 中间件
// module (简写: mo) 模块
// pipe (简写: pi) 管道
// provider (简写: pr) 供应商
// service (简写: s) 服务

// 模块是按业务逻辑划分基本单元，包含控制器和服务。控制器是处理请求和响应数据的部件，服务处理实际业务逻辑的部件。

// 中间件是路由处理Handler前的数据处理层，只能在模块或者全局注册，可以做日志处理中间件、用户认证中间件等处理，中间件和express的中间件一样，所以可以访问整个request、response的上下文，模块作用域可以依赖注入服务。全局注册只能是一个纯函数或者一个高阶函数。

// 管道是数据流处理，在中间件后路由处理前做数据处理，可以控制器中的类、方法、方法参数、全局注册使用，只能是一个纯函数。可以做数据验证，数据转换等数据处理。

// 守卫是决定请求是否可以到达对应的路由处理器，能够知道当前路由的执行上下文，可以控制器中的类、方法、全局注册使用，可以做角色守卫。

// 拦截器是进入控制器之前和之后处理相关逻辑，能够知道当前路由的执行上下文，可以控制器中的类、方法、全局注册使用，可以做日志、事务处理、异常处理、响应数据格式等。

// 过滤器是捕获错误信息，返回响应给客户端。可以控制器中的类、方法、全局注册使用，可以做自定义响应异常格式。

// 中间件、过滤器、管道、守卫、拦截器，这是几个比较容易混淆的东西。他们有个共同点都是和控制器挂钩的中间抽象处理层，但是他们的职责却不一样。

// 全局管道、守卫、过滤器和拦截器和任何模块松散耦合。他们不能依赖注入任何服务，因为他们不属于任何模块。
// 可以使用控制器作用域、方法作用域或辅助作用域仅由管道支持，其他除了中间件是模块作用域，都是控制器作用域和方法作用域

// 重点：在示例给出了它们的写法，注意全局管道、守卫、过滤器和拦截器，只能new，全局中间件是纯函数，全局管道、守卫、过滤器和拦截器，中间件都不能依赖注入。
// 中间件模块注册也不能用new，可以依赖注入。管道、守卫、过滤器和拦截器局部注册可以使用new和类名，除了管道以为其他都可以依赖注入。拦截器和守卫可以写成高阶方法来传参，达到定制目的。

// 管道、过滤器、拦截器守卫都有各自的具体职责。拦截器和守卫与模块结合在一起，而管道和过滤器则运行在模块区域之外。管道任务是根据特定条件验证类型、对象结构或映射数据。
// 过滤器任务是捕获各种错误返回给客户端。管道不是从数据库中选择或调用任何服务的适当位置。另一方面来说，拦截器不应该验证对象模式或修饰数据。如果需要重写，则必须由数据库调用服务引起。守卫决定了哪些路由可以访问，它接管你的验证责任。

// 客户端请求 ---> 中间件 ---> 守卫 ---> 拦截器之前 ---> 管道 ---> 控制器处理并响应 ---> 拦截器之后 ---> 过滤器
