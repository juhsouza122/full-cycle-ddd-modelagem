import { Order } from '../entities/Order';
import { OrderRepositoryInterface } from './OrderRepositoryInterface';

export class OrderRepository implements OrderRepositoryInterface {
  private orders: Map<string, Order> = new Map();

  async create(order: Order): Promise<void> {
    this.orders.set(order.id, order);
  }

  async findById(id: string): Promise<Order | null> {
    return this.orders.get(id) || null;
  }

  async findAll(): Promise<Order[]> {
    return Array.from(this.orders.values());
  }

  async delete(id: string): Promise<void> {
    this.orders.delete(id);
  }
}
