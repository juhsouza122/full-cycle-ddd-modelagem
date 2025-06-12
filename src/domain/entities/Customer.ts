import { Address } from "../value-objects/Address";
import { CustomerCreatedEvent } from "../events/customer-created.event";
import { CustomerAddressChangedEvent } from "../events/customer-address-changed.event";
import { EventDispatcher } from "../events/EventDispatcher";

export class Customer {
  private _id: string;
  private _name: string;
  private _address?: Address;
  private eventDispatcher = EventDispatcher.getInstance();

  constructor(id: string, name: string) {
    this._id = id;
    this._name = name;

    this.eventDispatcher.dispatch(new CustomerCreatedEvent({ id, name }));
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get address(): Address | undefined {
    return this._address;
  }

  changeAddress(address: Address): void {
    this._address = address;
    this.eventDispatcher.dispatch(
      new CustomerAddressChangedEvent({
        id: this._id,
        name: this._name,
        address: this._address.toString(),
      })
    );
  }
}
