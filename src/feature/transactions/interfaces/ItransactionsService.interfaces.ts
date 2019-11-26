export interface IUserService {
    findAll(body: any): Promise<any>;

    findOne(id: number): Promise<any>;

    create(User): Promise<any>;
 }