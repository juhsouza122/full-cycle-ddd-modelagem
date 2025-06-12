export class CustomerCreatedEvent {
  constructor(public payload: { id: string; name: string }) {}
}
