import { Transition, TransitionOptions } from ".";

export default class State {
  readonly states: State[] = [];
  readonly transitions: Transition[] = [];
  current?: State;
  public isActive: boolean = false;

  public entering?: () => void;
  public within?: () => void;
  public exiting?: () => void;

  constructor({ entering, within, exiting }: StateOptions = {}) {
    // transitions: Transition[] = [],
    // this.transitions.push(...transitions);
    this.entering = entering;
    this.within = within;
    this.exiting = exiting;
  }

  public addTransition(state: State, options: TransitionOptions) {
    this.transitions.push(new Transition(state, options));
    return this;
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
}

export interface StateOptions {
  entering?: () => void;
  within?: () => void;
  exiting?: () => void;
}

// import { State } from ".";

// export default class Transition {
//   to: State;
//   condition?: () => boolean;
//   action?: () => void;
//   event: any;
//   constructor(to: State, options: TransitionOptions) {
//     this.to = to;
//     this.condition = options.condition;
//     this.action = options.action;
//   }
// }

// export interface TransitionOptions {
//   condition?: () => boolean;
//   action?: () => void;
// }
