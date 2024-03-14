import { Module } from '@nestjs/common';
import { BeersService } from './beers.service';

@Module({
  providers: [BeersService]
})
export class BeersModule {}
