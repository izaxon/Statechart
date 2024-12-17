export class State {
    name: string;
    onEnter?: () => void;

    constructor(name: string, onEnter?: () => void) {
        this.name = name;
        this.onEnter = onEnter;
    }

    enter() {
        if (this.onEnter) {
            this.onEnter();
        }
    }

    exit() {
        // Logic for exiting the state can be added here
    }
}