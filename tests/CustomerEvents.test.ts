import { Customer } from "../src/domain/entities/Customer";
import { Address } from "../src/domain/value-objects/Address";
import { EventDispatcher } from "../src/domain/events/EventDispatcher";
import { EnviaConsoleLog1Handler } from "../src/domain/event-handlers/EnviaConsoleLog1Handler";
import { EnviaConsoleLog2Handler } from "../src/domain/event-handlers/EnviaConsoleLog2Handler";
import { EnviaConsoleLogHandler } from "../src/domain/event-handlers/EnviaConsoleLogHandler";

describe("Domain Events - Customer", () => {
  let spy1: jest.SpyInstance;
  let spy2: jest.SpyInstance;
  let spy3: jest.SpyInstance;

  beforeEach(() => {
    EventDispatcher.getInstance().clear();

    spy1 = jest.spyOn(console, "log").mockImplementation(() => {});
    spy2 = jest.spyOn(console, "log").mockImplementation(() => {});
    spy3 = jest.spyOn(console, "log").mockImplementation(() => {});

    const dispatcher = EventDispatcher.getInstance();
    dispatcher.register("CustomerCreatedEvent", new EnviaConsoleLog1Handler());
    dispatcher.register("CustomerCreatedEvent", new EnviaConsoleLog2Handler());
    dispatcher.register("CustomerAddressChangedEvent", new EnviaConsoleLogHandler());
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("deve disparar eventos ao criar um cliente", () => {
    new Customer("c1", "Julia");
    expect(spy1).toHaveBeenCalledWith("Esse é o primeiro console.log do evento: CustomerCreated");
    expect(spy2).toHaveBeenCalledWith("Esse é o segundo console.log do evento: CustomerCreated");
  });

  it("deve disparar evento ao trocar o endereço do cliente", () => {
    const customer = new Customer("c2", "Julia");
    const newAddress = new Address("Rua X", 99, "SP", "00000-000");
    customer.changeAddress(newAddress);

    expect(spy3).toHaveBeenCalledWith(
      "Endereço do cliente: c2, Julia alterado para: Rua X, 99, SP - 00000-000"
    );
  });
});
