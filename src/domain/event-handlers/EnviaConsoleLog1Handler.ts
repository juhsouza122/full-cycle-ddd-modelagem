import { CustomerCreatedEvent } from "../events/customer-created.event";

export class EnviaConsoleLog1Handler {
  handle(event: CustomerCreatedEvent) {
    console.log("Esse é o primeiro console.log do evento: CustomerCreated");
  }
}
