export class EventDispatcher {
  private static instance: EventDispatcher;
  private handlersMap = new Map<string, Array<any>>();

  private constructor() {}

  public static getInstance(): EventDispatcher {
    if (!EventDispatcher.instance) {
      EventDispatcher.instance = new EventDispatcher();
    }
    return EventDispatcher.instance;
  }

  register(eventName: string, handler: any) {
    if (!this.handlersMap.has(eventName)) {
      this.handlersMap.set(eventName, []);
    }
    this.handlersMap.get(eventName)!.push(handler);
  }

  dispatch(event: any) {
    const eventName = event.constructor.name;
    const handlers = this.handlersMap.get(eventName) || [];
    for (const handler of handlers) {
      handler.handle(event);
    }
  }

  clear() {
    this.handlersMap.clear();
  }
}
