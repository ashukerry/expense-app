import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { map } from 'rxjs';

// an interceptor is an  entity in side of nest js
export class CustomInterceptor implements NestInterceptor {
  //context gives us more info about the incomming request
  // the handler is the end piont that we are to give it to

  intercept(context: ExecutionContext, handler: CallHandler) {
    //anything iside of the pipe will be handling the out going response

    return handler.handle().pipe(
      map((data) => {
        console.log('this is intercepting the response');
        const response = {
          ...data,
          createdAt: data.created_at,
        };
        delete response.updated_at, delete response.created_at;
        return response;
      }),
    );
  }
}
