import { DataSource } from 'typeorm';
import { User } from './entities/user.entity';
import { Post } from './entities/post.entity';



export const AppDataSource = new DataSource({
  type: 'mssql',  // نوع دیتابیس شما
  host: 'localhost',
  port: 1433,  // پورت پیش‌فرض SQL Server
  username: 'sa',
  password: '26702670',  // رمز عبور
  database: 'test',  // نام دیتابیس
  entities: [Post,User], // مشابه تنظیم برای entities
  migrations: [__dirname + './../migrations/*{.ts,.js}'],

  synchronize: false,  // از این گزینه در محیط تولید استفاده کنید
  options: {
    encrypt: false,  // اگر SQL Server نیاز به رمزنگاری ندارد
  },
});
