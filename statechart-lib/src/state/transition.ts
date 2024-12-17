// transition.ts

export class Transition {
    fromState: string;
    toState: string;
    event: string;

    constructor(fromState: string, toState: string, event: string) {
        this.fromState = fromState;
        this.toState = toState;
        this.event = event;
    }

    isTriggered(event: string): boolean {
        return this.event === event;
    }
}