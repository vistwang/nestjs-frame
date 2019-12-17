import redis from 'redis';

const config = {
    redis: {
        port: 8888,
        host: 'localhost',
        pass: 8888,
    },
};
const dbConfig = config.redis,
    RDS_PORT = dbConfig.port,     // 端口号
    RDS_HOST = dbConfig.host,     // 服务器IP
    RDS_PWD = dbConfig.pass,      // 密码
    RDS_OPTS = {auth_pass: RDS_PWD},
    client = redis.createClient(RDS_PORT, RDS_HOST, RDS_OPTS);

export default client;