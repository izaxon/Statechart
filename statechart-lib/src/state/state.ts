import { Transition } from "./transition";

export class State {
  readonly states: State[] = [];
  readonly transitions: Transition[] = [];
  current: State | null = null;
  public isActive: boolean = false;

  constructor(
    public readonly name: string,
    public entering: (() => void) | null = null,
    public within: (() => void) | null = null,
    public exiting: (() => void) | null = null,
    transitions: Transition[] | null = null
  ) {
    if (transitions) {
      this.transitions.push(...transitions);
    }
  }

  protected run(): void {
    if (this.within) {
      this.within();
    }

    if (this.current) {
      for (const t of this.current.transitions) {
        if (!t.condition || t.condition()) {
          if (this.current && this.current.exiting) {
            this.current.exiting();
          }
          this.current = t.to;
          if (t.action) {
            t.action();
          }
          if (this.current && this.current.entering) {
            this.current.entering();
          }
          return;
        }
      }
      this.current.run();
    }
  }

  public trigger(event: string): void {
    for (const t of this.transitions) {
      if (t.event === event && (!t.condition || t.condition())) {
        if (this.exiting) {
          this.exiting();
        }
        if (t.action) {
          t.action();
        }
        this.isActive = false;
        t.to.isActive = true;
        if (t.to.entering) {
          t.to.entering();
        }
        break;
      }
    }
  }
}
