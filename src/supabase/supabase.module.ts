import { Module, Global } from '@nestjs/common';
import { SupabaseClient } from './supabase.provider.js';

@Global() // Make it available everywhere
@Module({
  providers: [
    {
      provide: 'SUPABASE_CLIENT',
      useValue: SupabaseClient,
    },
  ],
  exports: ['SUPABASE_CLIENT'],
})
export class SupabaseModule {}
