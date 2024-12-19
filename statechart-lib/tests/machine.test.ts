import { State, Transition, StateMachine } from "../src";

type CodicentState = "logged_in" | "unknown" | "logged_out" | "unregistered" | "error";
describe("Test state machine", () => {
  let machine: StateMachine;
  const state = {
    isAuthenticated: false,
    codicentState: "unknown" as CodicentState,
  };
  beforeEach(() => {
    state.isAuthenticated = false;
    state.codicentState = "unknown";

    const errorCheckingCodicentState = new State();
    const lacksCodicentUser = new State();
    const hasCodicentUser = new State({
      within: () => console.log("STATE: hasCodicentUser"),
    });

    const start = new State({ within: () => console.log("STATE: start - waiting for auth0 accessToken") });
    const authenticated = new State({
      within: () => console.log("STATE: authenticated - waiting for codicent state"),
      // entering: () => {
      //   console.log("calling codicent login()");
      //   setTimeout(() => {
      //     state.codicentState = "logged_in";
      //   }, 1000);
      // },
    });

    authenticated
      .addTransition(errorCheckingCodicentState, { condition: () => state.codicentState === "error" })
      .addTransition(lacksCodicentUser, { condition: () => state.codicentState === "unregistered" })
      .addTransition(hasCodicentUser, { condition: () => state.codicentState === "logged_in" });

    start.addTransition(authenticated, {
      condition: () => state.isAuthenticated,
      action: () => console.log("going to authenticated state"),
    });

    errorCheckingCodicentState.addTransition(authenticated, { condition: () => state.codicentState === "unknown" });

    machine = new StateMachine([start, authenticated, errorCheckingCodicentState, lacksCodicentUser, hasCodicentUser]);
  });

  //   afterEach(() => {
  //     state.isAuthenticated = false;
  //     state.codicentState = "unknown";
  //   });

  it("test1", () => {
    machine.update();
    machine.update();
    state.isAuthenticated = true;
    machine.update();
    machine.update();
    state.codicentState = "logged_in";
    machine.update();
    //  setTimeout(() => {
    //    machine.update();
    //  }, 3000);
    machine.update();
  });

  it("should transition to authenticated state when isAuthenticated is true", () => {
    machine.update();
    expect(state.isAuthenticated).toBe(false);
    state.isAuthenticated = true;
    machine.update();
    expect(state.isAuthenticated).toBe(true);
  });

  it("should transition to hasCodicentUser state when codicentState is logged_in", () => {
    state.isAuthenticated = true;
    machine.update();
    state.codicentState = "logged_in";
    machine.update();
    expect(state.codicentState).toBe("logged_in");
  });

  it("should handle state transitions with delays", () => {
    jest.useFakeTimers();
    state.isAuthenticated = true;
    machine.update();
    state.codicentState = "logged_in";
    setTimeout(() => {
      machine.update();
    }, 3000);
    jest.runAllTimers();
    expect(state.codicentState).toBe("logged_in");
    jest.useRealTimers();
  });
});
