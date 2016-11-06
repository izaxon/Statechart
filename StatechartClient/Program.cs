using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Statechart;

namespace StatechartClient
{
    class Program
    {
        public static void Enter()
        {
            System.Console.WriteLine("Entering the State");
        }

        public static void Do()
        {
            System.Console.WriteLine("Working in the State");
        }

        public static void Exit()
        {
            System.Console.WriteLine("Exiting the State");
        }

        public static void Move01()
        {
            System.Console.WriteLine("Moving from 0 to 1");
        }

        public static void Move12()
        {
            System.Console.WriteLine("Moving from 1 to 2");
        }

        static void Main(string[] args)
        {
            State s2 = new State(Enter, Do, Exit, null);
            Transition t12 = new Transition(s2, null, Move12);
            LinkedList<Transition> trans12 = new LinkedList<Transition>();
            trans12.AddFirst(t12);
            State s1 = new State(Enter, Do, Exit, trans12);
            Transition t01 = new Transition(s1, null, Move01);
            LinkedList<Transition> trans01 = new LinkedList<Transition>();
            trans01.AddFirst(t01);
            State s0 = new State(Enter, Do, Exit, trans01);

            Statechart.Statechart sc = new Statechart.Statechart(s0, null);
            sc.Update();
        }
    }
}
