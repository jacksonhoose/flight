import mongoose from 'mongoose';

const CONNECTION_PREFIX = 'mongodb://';

export default function connectDatabase(options = {}){
    let {
        username,
        password,
        host,
        port,
        database
    } = options;

    let connection = mongoose
            .connect(`${CONNECTION_PREFIX}${username}:${password}@${host}:${port}/${database}`);
    return connection;
}