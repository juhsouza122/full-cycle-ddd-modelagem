import { CustomerAddressChangedEvent } from "../events/customer-address-changed.event";

export class EnviaConsoleLogHandler {
  handle(event: CustomerAddressChangedEvent) {
    const { id, name, address } = event.payload;
    console.log(`Endereço do cliente: ${id}, ${name} alterado para: ${address}`);
  }
}
