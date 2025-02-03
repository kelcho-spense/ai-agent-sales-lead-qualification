import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  CosmosClient,
  Database,
  Container,
  PartitionKeyDefinitionVersion,
  PartitionKeyKind,
  CosmosDbDiagnosticLevel,
} from '@azure/cosmos';

@Injectable()
export class DatabaseService implements OnModuleInit {
  private readonly client: CosmosClient;
  private database: Database;
  private containers: Container[] = [];

  constructor(private configService: ConfigService) {
    this.client = new CosmosClient({
      endpoint: this.configService.get<string>('AZURE_COSMOS_DB_ENDPOINT')!,
      key: this.configService.get<string>('AZURE_COSMOS_DB_KEY')!,
      diagnosticLevel:
        this.configService.get<string>('NODE_ENV') != 'production'
          ? CosmosDbDiagnosticLevel.debug
          : CosmosDbDiagnosticLevel.info,
    });
  }

  async onModuleInit() {
    await this.initDatabase();
    await this.leadsContainer();
  }

  private async initDatabase() {
    const dbName = this.configService.get<string>('AZURE_COSMOS_DB_NAME');
    const { database } = await this.client.databases.createIfNotExists({
      id: dbName,
    });
    this.database = database;
  }

  private async leadsContainer() {
    const { container: leadsContainer } =
      await this.database.containers.createIfNotExists({
        id: 'leads',
        partitionKey: {
          paths: ['/email'],
          version: PartitionKeyDefinitionVersion.V2,
          kind: PartitionKeyKind.Hash,
        },
      });

    this.containers.push(leadsContainer);
  }

  getContainer(): Container[] {
    if (!this.containers) {
      throw new Error('Database container not initialized');
    }
    return this.containers;
  }
}
