describe("State and Transition", () => {
  // let stateA: State;
  // let stateB: State;
  // let stateC: State;
  // let transitionAB: Transition;
  // let transitionAC: Transition;

  beforeEach(() => {
    // stateA = new State("StateA");
    // stateB = new State("StateB");
    // stateC = new State("StateC");
    // stateA.isActive = true;
    // transitionAB = new Transition(stateA, stateB, "eventA", () => true);
    // transitionAC = new Transition(stateA, stateC, "eventB", () => true);
  });

  it("should create states with names", () => {
    // expect(stateA.name).toBe("StateA");
    // expect(stateB.name).toBe("StateB");
    // expect(stateC.name).toBe("StateC");
  });

  // it("should create transition between states", () => {
  //   expect(transitionAB.to).toBe(stateB);
  //   expect(transitionAC.to).toBe(stateC);
  // });

  // it("should trigger transition and change state", () => {
  //   stateA.transitions.push(transitionAB);
  //   stateA.trigger("eventA");
  //   expect(stateA.isActive).toBe(false);
  //   expect(stateB.isActive).toBe(true);
  //   expect(stateC.isActive).toBe(false);
  // });

  // it("should handle multiple transitions from a single state", () => {
  //   stateA.transitions.push(transitionAB);
  //   stateA.transitions.push(transitionAC);
  //   stateA.trigger("eventB");
  //   expect(stateA.isActive).toBe(false);
  //   expect(stateB.isActive).toBe(false);
  //   expect(stateC.isActive).toBe(true);
  // });
});
