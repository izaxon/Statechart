using System;
using System.Collections.Generic;
using System.Text;

namespace Statechart
{
    /// <summary>
    /// Statechart class.
    /// </summary>
    public class Statechart : State
    {
        /// <summary>
        /// Statechart constructor.
        /// </summary>
        /// <param name="entry">Statechart entry state.</param>
        /// <param name="states">Enumeration of statechart states (optional).</param>
        public Statechart(State entry, IEnumerable<State> states = null)
        {
            Current = entry;
            if (states != null)
            {
                States.AddRange(states);
            }
        }

        /// <summary>
        /// Update statechart.
        /// Runs internal state members to update statechart state.
        /// </summary>
        public void Update()
        {
            Run();
        }
    }
}
