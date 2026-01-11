import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
    getProducts() {
        return 'This action returns all products';
    }
}
