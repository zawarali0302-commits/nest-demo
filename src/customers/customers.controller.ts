import { Controller, Get } from '@nestjs/common';
import { CustomersService } from './customers.service';

@Controller('customers')
export class CustomersController {
    constructor(private readonly customersService: CustomersService) {}

    @Get()
    greet(): string {
        return this.customersService.greetCustomers();
    }

    @Get('info')
    info(): string {
        return this.customersService.infoCsutomers();
    }
}
