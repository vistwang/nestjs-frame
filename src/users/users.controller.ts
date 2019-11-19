import { Body, Controller, Delete, Get, Header, Logger, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiUseTags } from '@nestjs/swagger';

import { UserInfoInterface, UserInterface } from './users.interface';
import { UsersService } from './users.service';

export interface User {
    readonly id: number;
    readonly name: string;
    readonly age: number;
}

@Controller('users')
@ApiUseTags('用户相关api')
export class UsersController {
    constructor(private readonly usersService: UsersService){}
    private readonly logger = new Logger(UsersController.name);

    @Get()
    @ApiOperation({title: '获取所有用户'})
    @Header('Access-Control-Allow-Origin', '*')
    async findAll(): Promise<UserInterface> {
        // 日志打印 log/warn/error
        this.logger.log('获取所有用户');
        return {
            success: true,
            code: 'X1000000',
            msg: '请求user数据',
            data: this.usersService.findAll(),
        };
    }

    @Post('add')
    @ApiOperation({title: '添加用户'})
    @Header('Access-Control-Allow-Origin', '*')
    async create(@Body() createUser: UserInfoInterface): Promise<UserInterface>{
        this.usersService.create(createUser);
        this.logger.log('创新新的用户');
        return {
            success: true,
            code: 'X1000001',
            msg: '编辑user数据',
            data: createUser,
        };
    }

    @Get(':id')
    @ApiOperation({title: '获取某个用户'})
    @Header('Access-Control-Allow-Origin', '*')
    findOne(@Param() params): string {
        return `This action returns a #${params.id} cat`;
    }

    @Delete()
    @ApiOperation({title: '删除某个用户'})
    @Header('Access-Control-Allow-Origin', '*')
    async deleteOne(): Promise<UserInterface> {
        this.usersService.deleteData('测试2');
        this.logger.log('删除某个用户');
        return {
            success: true,
            code: 'X1000002',
            msg: '删除user数据',
            data: '删除成功',
        };
    }

    @Put(':id')
    @ApiOperation({title: '修改某个用户'})
    @Header('Access-Control-Allow-Origin', '*')
    async changeOne(@Param() params, @Body() newData: UserInfoInterface): Promise<UserInterface> {
        this.usersService.changeData(params.id, newData);
        this.logger.log('修改某个用户');
        return {
            success: true,
            code: 'X1000002',
            msg: '修改user数据',
            data: '修改成功',
        };
    }
}
