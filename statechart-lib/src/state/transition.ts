import { State } from "./state";

// transition.ts

export class Transition {
  constructor(
    public to: State | null = null,
    public condition: (() => boolean) | null = null,
    public action: (() => void) | null = null
  ) {}
}
