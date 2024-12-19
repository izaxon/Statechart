import { State } from ".";

export default class Transition {
  to: State;
  condition?: () => boolean;
  action?: () => void;
  event: any;
  constructor(to: State, options: TransitionOptions) {
    this.to = to;
    this.condition = options.condition;
    this.action = options.action;
  }
}

export interface TransitionOptions {
  condition?: () => boolean;
  action?: () => void;
}
