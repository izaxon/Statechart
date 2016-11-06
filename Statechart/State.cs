using System;
using System.Collections.Generic;
using System.Text;

namespace Statechart
{
    /// <summary>
    /// Statechart state class.
    /// </summary>
    public class State
    {
        /// <summary>
        /// State constructor.
        /// </summary>
        /// <param name="entering">Entering state action. Called before the state is entered.</param>
        /// <param name="within">Within state action. Called when the state is updated.</param>
        /// <param name="exiting">Exiting state action. Called when the state is exited.</param>
        /// <param name="transitions">State transition collection. Transitions from this state to (possible) others are kept here.</param>
        public State(Action entering = null, Action within = null, Action exiting = null, IEnumerable<Transition> transitions = null)
        {
            Entering = entering;
            Within = within;
            Exiting = exiting;
            if (transitions != null)
            {
                Transitions.AddRange(transitions);
            }
        }

        /// <summary>
        /// List of sub states.
        /// </summary>
        public readonly List<State> States = new List<State>();

        /// <summary>
        /// List of transitions going from this state.
        /// </summary>
        public readonly List<Transition> Transitions = new List<Transition>();

        /// <summary>
        /// Gets or sets the current (active) sub state (i.e. the state within States that is active)
        /// </summary>
        public State Current = null;

        /// <summary>
        /// Gets or sets the entering state action.
        /// The entering action is called before the state is entered.
        /// </summary>
        public Action Entering = null;

        /// <summary>
        /// Gets or sets the exiting state action.
        /// The exiting action is called when the state is exited.
        /// </summary>
        public Action Exiting = null;

        /// <summary>
        /// Gets or sets the withing state action.
        /// The within action is called when the state is updated (and not transitioning, i.e. entering or exiting).
        /// </summary>
        public Action Within = null;

        // Runs, i.e. updates, current state.
        protected void Run()
        {
            if (Within != null)
            {
                Within();
            }

            if (Current != null)
            {
                foreach (Transition t in Current.Transitions)
                {
                    // Condition lacking or true => go to state
                    if (t.Condition == null || t.Condition())
                    {
                        if (Current != null && Current.Exiting != null)
                        {
                            Current.Exiting();
                        }
                        Current = t.To;
                        if (t.Action != null)
                        {
                            t.Action();
                        }
                        if (Current != null && Current.Entering != null)
                        {
                            Current.Entering();
                        }
                        return;
                    }
                }
                Current.Run();
            }
        }
    }
}
