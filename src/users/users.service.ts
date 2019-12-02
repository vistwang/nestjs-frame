import { Model } from 'mongoose';

import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { User, UserInfoInterface } from './users.interface';

@Injectable()
export class UsersService {
    constructor(@InjectModel('User') private readonly userModel: Model<User>){}
    private readonly logger = new Logger(UsersService.name);
    private readonly users: UserInfoInterface[] = [
        {
            id: '1',
            name: '小明',
            age: 18,
        },
        {
            id: '2',
            name: '小花',
            age: 18,
        },
        {
            id: '3',
            name: '小王',
            age: 18,
        },
    ];

    async create(cat: UserInfoInterface) {
        this.users.push(cat);

        // 文档新增
        /* 文档新增有三种方法，
        一种是使用上面文档的save()方法，如下
        另一种是使用模型model的create()方法，
        最后一种是模型model的insertMany()方法 */
        const user = new this.userModel(cat);
        await user.save();
    }

    async findAll(): Promise<UserInfoInterface[]> {

        /* 文档查询
        find()
        findById()
        findOne() */
        // 获取所有的
        return await this.userModel.find().exec();
    }

    async find(conditions): Promise<UserInfoInterface[]> {
        // 过滤字段
        const filterConditions = { _id: 0, __v: 0, updatedAt: 0 };
        return await this.userModel.find(conditions, filterConditions).exec();
    }

    async deleteData(na: string) {
        this.userModel.deleteOne({name: na}, (err) => {

        });
    }

    async changeData(cid: string, data: UserInfoInterface) {
        this.logger.log(JSON.stringify(data));
        this.userModel.findOneAndUpdate({id: cid}, data, (err: any, doc: User, res: any) => {
            if (err){
                this.logger.log('更新用户失败');
            }
        });
    }

    async upDate(cid: string, data: UserInfoInterface) {
        this.logger.log(JSON.stringify(data));
        this.userModel.findOneAndUpdate({id: cid}, data, (err: any, doc: User, res: any) => {
            if (err){
                this.logger.log('更新用户失败');
            }
        });
    }
}
