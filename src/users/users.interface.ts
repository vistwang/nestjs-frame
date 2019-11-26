import { Document } from 'mongoose';

/** 是否成功 */
// private boolean success;
// /**返回码*/
// private String code;
// /**返回信息*/
// private String msg;
// /**返回数据*/
// private Object data;
export interface UserInterface{
    success: boolean;
    code: string;
    msg: string;
    data: any;
}

export interface UserInfoInterface{
    id: string;
    name: string;
    age: number;
}

export interface User extends Document{
    id: string;
    name: string;
    age: number;
}

export interface IUserService {

    findAll(): Promise<User[]>;

    findOne(id: number): Promise<User>;

    create(User): Promise<User>;

    edit(User): Promise<User>;

    remove(id: number): Promise<boolean>;

 }