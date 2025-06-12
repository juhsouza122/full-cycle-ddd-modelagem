export class Address {
  constructor(
    public street: string,
    public number: number,
    public city: string,
    public zip: string
  ) {}

  toString(): string {
    return `${this.street}, ${this.number}, ${this.city} - ${this.zip}`;
  }
}
