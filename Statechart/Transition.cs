using System;
using System.Collections.Generic;
using System.Text;

namespace Statechart
{
    /// <summary>
    /// State transition class.
    /// </summary>
    public class Transition
    {
        /// <summary>
        /// Transition action.
        /// This action is called when the transition leads to a state change, i.e. when transitioning.
        /// </summary>
        public Action Action = null;

        /// <summary>
        /// Gets or sets the transition target state.
        /// This is the state that the transition leads to.
        /// </summary>
        public State To = null;

        /// <summary>
        /// Condition function.
        /// The condition is tested and must evaluate to true for the transition to transition to its target state.
        /// </summary>
        public Func<bool> Condition = null;

        /// <summary>
        /// Transition constructor.
        /// </summary>
        /// <param name="to">Transition target, i.e. the state this transition leads to.</param>
        /// <param name="condition">Condition function for the transition.</param>
        /// <param name="action">Transition action.</param>
        public Transition(State to = null, Func<bool> condition = null, Action action = null)
        {
            Action = action;
            To = to;
            Condition = condition;
        }
    }
}
