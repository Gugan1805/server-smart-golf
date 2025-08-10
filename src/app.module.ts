import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SupabaseModule } from './supabase/supabase.module';
import {RoleModule} from './roles/role.module';
import {UserModule} from './users/user.module';

@Module({
  imports: [SupabaseModule, UserModule , RoleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
