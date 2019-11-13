import { Body, Controller, Get, Header, Param, Post, Put } from '@nestjs/common';

import { UserArray, UserInterface } from './users.interface';
import { UsersService } from './users.service';

export interface User {
    readonly id: number;
    readonly name: string;
    readonly age: number;
}

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService){}
    @Get()
    @Header('Access-Control-Allow-Origin', '*')
    async findAll(): Promise<UserInterface> {
        /** 是否成功 */
    // private boolean success;
    // /**返回码*/
    // private String code;
    // /**返回信息*/
    // private String msg;
    // /**返回数据*/
    // private Object data;
        return {
            success: true,
            code: 'X1000000',
            msg: '请求user数据',
            data: this.usersService.findAll(),
        };
    }

    @Post()
    async create(@Body() createUser: UserArray){
        this.usersService.create(createUser);
        return {
            success: true,
            code: 'X1000000',
            msg: '编辑user数据',
            data: createUser,
        };
    }

    @Get(':id')
    @Header('Access-Control-Allow-Origin', '*')
    findOne(@Param() params): string {
        return `This action returns a #${params.id} cat`;
    }
}
