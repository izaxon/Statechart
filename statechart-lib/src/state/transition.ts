// transition.ts

export class Transition {
  fromState: string;
  toState: string;
  event: string;

  constructor(
    public to: State | null = null,
    public condition: (() => boolean) | null = null,
    public action: (() => void) | null = null
  ) {
    this.fromState = fromState;
    this.toState = toState;
    this.event = event;
  }

  isTriggered(event: string): boolean {
    return this.event === event;
  }
}
