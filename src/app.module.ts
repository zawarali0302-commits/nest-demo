import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsModule } from './students/students.module';
import { CustomersModule } from './customers/customers.module';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { TeachersModule } from './teachers/teachers.module';

@Module({
  imports: [StudentsModule, CustomersModule, ProductsModule, UsersModule, TeachersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
