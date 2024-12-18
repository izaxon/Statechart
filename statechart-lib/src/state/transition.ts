import { State } from "./state";

// transition.ts

export class Transition {
  constructor(
    public from: State,
    public to: State,
    public event: string,
    public condition: (() => boolean) | null = null,
    public action: (() => void) | null = null
  ) {}

  getFrom() {
    return this.from;
  }

  getTo() {
    return this.to;
  }

  getEvent() {
    return this.event;
  }
}
