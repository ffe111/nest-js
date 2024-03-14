import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BeersController } from './beers/beers.controller';
import { BeersModule } from './beers/beers.module';
import { BeersService } from './beers/beers.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [BeersModule, MongooseModule.forRoot('mongodb://localhost:27017/test'), UsersModule, TodoModule],
  controllers: [AppController, BeersController],
  providers: [AppService, BeersService],
})
export class AppModule {}
