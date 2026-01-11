import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {
    greetCustomers() {
        return 'Hello customers from customers service!';
    }

    infoCsutomers() {
        return 'Hello from customer service from customers info method';
    }
}
