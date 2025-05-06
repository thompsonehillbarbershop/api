import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { MongoModule } from "./mongo/mongo.module"
import { ConfigModule } from '@nestjs/config'
import { FirebaseModule } from "./firebase/firebase.module"

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    MongoModule,
    FirebaseModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
