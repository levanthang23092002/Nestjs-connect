import { Module } from '@nestjs/common';
import { socket } from './socket';

@Module({
  imports: [socket],
})
export class SocketModule {}
