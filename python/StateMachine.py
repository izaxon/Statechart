
class Transition:
    """ Transition constructor.
    - to  Transition target State, i.e. the state this transition leads to.
    - condition   Lambda function returning a boolean. Condition function for the transition.
    - action  Transition action.
    """
    def __init__(self, to, condition = None, action = None):
        self.to = to
        if condition != None: self.condition = condition
        if action != None: self.action = action

    """Transition action.
    This action is called when the transition leads to a state change, i.e. when transitioning.
    """
    action = lambda _ : None

    """ Gets or sets the transition target state.
    This is the state that the transition leads to.
    """
    to = None

    """ Condition function.
        The condition is tested and must evaluate to true for the transition to transition to its target state.
        """
    condition = lambda _ : True

class State:
    def __init__(self, entering = None, within = None, exiting = None, transitions = []):
        self.entering = entering
        self.within = within
        self.exiting = exiting
        self.transitions = transitions
        
    """List of sub states."""        
    states = []

    """List of transitions going from this state."""    
    transitions = []

    """Gets or sets the current (active) sub state (i.e. the state within States that is active)"""    
    current = None

    """Gets or sets the entering state action.
     The entering action is called before the state is entered."""    
    entering = None

    """Gets or sets the exiting state action.
     The exiting action is called when the state is exited."""    
    exiting = None

    """Gets or sets the withing state action.
     The within action is called when the state is updated (and not transitioning, i.e. entering or exiting)."""    
    within = None

    """ Runs (i.e. updates) current state."""
    def update(self):
        if (self.within != None):
            self.within()
        if (self.current != None):
            for t in self.current.transitions:
                # Condition lacking or true => go to state
                if (t.condition == None or t.condition()):
                    if (self.current != None and self.current.exiting != None):
                        self.current.exiting()
                    self.current = t.to
                    if (t.action != None):
                        t.action()
                    if (self.current != None and self.current.entering != None):
                        self.current.entering()
                    return
            self.current.run()

class StateMachine(State):
    """ 
    Statechart constructor.
     - states        List of state machine states.
     - start_state   Statechart entry state.
    """
    def __init__(self, states = None, start_state = None):
        if (states != None): 
            self.states = states
        self.current = start_state


state1 = State(lambda: print('entering state1'), exiting=lambda: print('bye!'))
state2 = State(lambda: print('entering state2'))
state1.transitions = [Transition(state2)]
state2.transitions = [Transition(state1)]

sm = StateMachine([state1, state2], state1)
sm.update()
sm.update()
sm.update()
sm.update()
sm.update()