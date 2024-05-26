import { ArgumentsHost, Catch, Logger } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';

@Catch()
export class ExceptionsLoggerFilter extends BaseExceptionFilter {
  catch(exception: any, host: ArgumentsHost): void {
    const logger = new Logger();
    logger.debug('Exception thrown', exception);
    super.catch(exception, host);
  }
}
