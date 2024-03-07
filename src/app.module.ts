import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ActivityModule } from './activity/activity.module';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './database.module';

@Module({
  imports: [ActivityModule, UserModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
