export class CustomerAddressChangedEvent {
  constructor(public payload: { id: string; name: string; address: string }) {}
}
