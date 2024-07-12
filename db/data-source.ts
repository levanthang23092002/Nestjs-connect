import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '123456',
  database: 'hotels',
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/db/migration/*{.js,.ts}'],
  synchronize: false,
};
const dataSource = new DataSource(dataSourceOptions);

export default dataSource;
