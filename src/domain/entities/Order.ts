export class Order {
  constructor(
    public readonly id: string,
    public readonly customerId: string,
    public readonly amount: number
  ) {}
}
