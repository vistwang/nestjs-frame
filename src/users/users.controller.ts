import { Controller, Get, Header } from '@nestjs/common';

export interface User {
    readonly id: number;
    readonly name: string;
    readonly age: number;
}
export interface Response{
    success: boolean;
    code: string;
    msg: string;
    data: any;
}
@Controller('users')
export class UsersController {
    @Get()
    @Header('Access-Control-Allow-Origin', '*')
    async findAll(): Promise<Response> {
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
        data: [
            {
                id: 1,
                name: '小明',
                age: 18,
            },
            {
                id: 2,
                name: '小花',
                age: 18,
            },
            {
                id: 3,
                name: '小王',
                age: 18,
            },
        ]};
    }
}
