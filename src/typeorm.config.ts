import { DataSource } from 'typeorm';
import * as dotenvConf from 'dotenv';

dotenvConf.config();

export default new DataSource({
  type: 'postgres',
  host: process.env.DATABASE_HOST || '127.0.0.1',
  port: parseInt(process.env.DATABASE_PORT) || 5432,
  username: process.env.DATABASE_USERNAME || 'root',
  password: process.env.DATABASE_PASSWORD || '12345',
  database: process.env.DATABASE_NAME || 'affilliate',
  schema: process.env.DATABASE_SCHEMA || 'public',
  entities: [__dirname + '/core/models/**/!(tracking|base).ts'],
  migrations: [__dirname + '/migrations/**/*.ts'],
});
