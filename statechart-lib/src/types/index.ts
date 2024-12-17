// src/types/index.ts

export interface StateConfig {
  name: string;
  onEnter?: () => void;
}

export interface TransitionConfig {
  fromState: string;
  toState: string;
  event: string;
}

// Rename the Transition type to TransitionType
export type TransitionType = {
  event: string;
  from: string;
  to: string;
};
