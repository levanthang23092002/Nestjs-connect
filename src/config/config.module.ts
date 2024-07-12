import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env.dev','.env.local'], // Định nghĩa các file .env cho từng môi trường
    }),
  ],
  exports: [ConfigModules],
})
export class ConfigModules {}
