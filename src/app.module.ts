import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { MongoModule } from "./mongo/mongo.module"
import { ConfigModule } from '@nestjs/config'
import { UsersModule } from "./users/users.module"

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    MongoModule,
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
