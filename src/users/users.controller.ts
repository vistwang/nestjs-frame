import {
    Body, Controller, Delete, Get, Header, Logger, Param, ParseIntPipe, Patch, Post, Put, Query
} from '@nestjs/common';
import { ApiOperation, ApiUseTags } from '@nestjs/swagger';

import { UserIdPipe } from './pipes/user-id.pipe';
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

    @Get(':id')
    @ApiOperation({title: '通过id获取某个用户信息'})
    @Header('Access-Control-Allow-Origin', '*')
    findById(@Param() params): Promise<UserInterface> {
        return this.usersService.find({id: params.id}).then((sdata) => {
            return {
                success: true,
                code: 'X1000000',
                msg: 'id请求user数据',
                data: sdata,
            };
        });
    }

    @Get()
    @ApiOperation({title: '获取所有用户'})
    @Header('Access-Control-Allow-Origin', '*')
    async findAll(): Promise<UserInterface> {
        // 日志打印 log/warn/error
        this.logger.log('获取所有用户');
        return this.usersService.findAll().then((sdata) => {
            return {
                success: true,
                code: 'X1000000',
                msg: '请求user数据',
                data: sdata,
            };
        });

    }

    @Patch() // 部分更新
    @ApiOperation({title: '更新部分用户'})
    @Header('Access-Control-Allow-Origin', '*')
    async upDate(): Promise<UserInterface> {
        // 日志打印 log/warn/error
        this.logger.log('更新部分用户');
        return {
            success: true,
            code: 'X1000000',
            msg: '更新部分用户',
            data: [],
        };
    }

    @Post('add')
    @ApiOperation({title: '添加用户'})
    @Header('Access-Control-Allow-Origin', '*')
    async create(@Body() createUser: UserInfoInterface): Promise<UserInterface>{
        // createUser 请求体中存储的数据
        this.usersService.create(createUser);
        this.logger.log('创新新的用户');
        return {
            success: true,
            code: 'X1000001',
            msg: '编辑user数据',
            data: createUser,
        };
    }

    @Get('')
    @ApiOperation({title: '关键字获取某个用户信息'})
    @Header('Access-Control-Allow-Origin', '*')
    findByKey(@Query() query): Promise<UserInterface> {
        return this.usersService.find({name: /query.key/}).then((sdata) => {
            return {
                success: true,
                code: 'X1000000',
                msg: '关键字请求user数据',
                data: sdata,
            };
        });
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
    async changeOne(@Param('id', new UserIdPipe()) id, @Body() newData: UserInfoInterface): Promise<UserInterface> {
        this.usersService.changeData(id, newData);
        this.logger.log('修改某个用户');
        return {
            success: true,
            code: 'X1000002',
            msg: '修改user数据',
            data: '修改成功',
        };
    }
}
