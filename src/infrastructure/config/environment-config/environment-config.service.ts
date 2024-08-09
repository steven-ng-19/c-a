import { ConfigService } from '@nestjs/config';
import { DatabaseConfig } from 'src/domain/database/database.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class EnvironmentConfigService implements DatabaseConfig {
  constructor(private readonly _configService: ConfigService) {}
  getDatabaseUrl(): string {
    return this._configService.getOrThrow<string>('DATABASE_URL');
  }
}
