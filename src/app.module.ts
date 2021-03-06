import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomInterceptor } from './custom.interceptor';
import { SummaryModule } from './summary/summary.module';
import { ServiceController } from './service/service.controller';

@Module({
  imports: [SummaryModule],
  controllers: [AppController, ServiceController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass:
        //CustomInterceptor,
        ClassSerializerInterceptor,
    },
  ],
})
export class AppModule {}
