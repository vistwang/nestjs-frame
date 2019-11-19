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

        // 存
        const user = new this.userModel(cat);
        await user.save();
    }

    async findAll(): Promise<UserInfoInterface[]> {

        // 获取所有的
        return await this.userModel.find().exec();

        // return this.users;
    }

    async deleteData(na: string) {
        this.userModel.deleteOne({name: na}, (err) => {
            this.logger.log('删除某个用户');
        });
    }

    async changeData(cid: string, data: UserInfoInterface) {
        this.logger.log(JSON.stringify(data));
        this.userModel.findOneAndUpdate({id: cid}, data);
    }
}
