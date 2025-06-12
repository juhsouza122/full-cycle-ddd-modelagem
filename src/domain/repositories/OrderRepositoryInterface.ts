import { Order } from '../entities/Order';

export interface OrderRepositoryInterface {
  create(order: Order): Promise<void>;
  findById(id: string): Promise<Order | null>;
  findAll(): Promise<Order[]>;
  delete(id: string): Promise<void>;
}
