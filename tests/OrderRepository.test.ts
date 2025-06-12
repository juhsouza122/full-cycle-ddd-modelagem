import { Order } from "../src/domain/entities/Order";
import { OrderRepository } from "../src/domain/repositories/OrderRepository";

describe('OrderRepository', () => {
  let repository: OrderRepository;

  beforeEach(() => {
    repository = new OrderRepository();
  });

  it('should create and retrieve an order', async () => {
    const order = new Order('1', 'cust-123', 100);
    await repository.create(order);

    const result = await repository.findById('1');
    expect(result).toEqual(order);
  });

  it('should return null for non-existent order', async () => {
    const result = await repository.findById('nonexistent');
    expect(result).toBeNull();
  });

  it('should retrieve all orders', async () => {
    const order1 = new Order('1', 'cust-1', 50);
    const order2 = new Order('2', 'cust-2', 75);

    await repository.create(order1);
    await repository.create(order2);

    const result = await repository.findAll();
    expect(result).toEqual([order1, order2]);
  });

  it('should delete an order', async () => {
    const order = new Order('1', 'cust-1', 100);
    await repository.create(order);

    await repository.delete('1');
    const result = await repository.findById('1');
    expect(result).toBeNull();
  });
});
