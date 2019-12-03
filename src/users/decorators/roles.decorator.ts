import { ReflectMetadata, SetMetadata } from '@nestjs/common';
// 自定义装饰器
export const Roles = (...args: string[]) => SetMetadata('roles', args);
