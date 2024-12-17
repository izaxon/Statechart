export class State {
  constructor(public readonly name: string) {}

  toString(): string {
    return this.name;
  }
}
