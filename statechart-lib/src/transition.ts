import { State } from "./state";

export class Transition {
  constructor(public readonly from: State, public readonly to: State, public readonly event: string) {}
}
