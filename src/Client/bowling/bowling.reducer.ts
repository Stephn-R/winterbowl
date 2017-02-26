// ────────────────────────────────────────────────────────────────────────────────
// MODULES

import { BowlingActions } from './bowling.actions';

// ────────────────────────────────────────────────────────────────────────────────

export interface IBowlingFrame {
  FirstRoll?: Number;
  SecondRoll?: Number;
  ThirdRoll?: Number;
}

interface IScoreboardAction {
  type: String;
  scoreboard?: IBowlingFrame[];
}

const initialState = {
  // Empty scoreboard
  scoreboard: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]
};

export function bowlingReducer(state = initialState, action: IScoreboardAction) {
  switch (action.type) {
    // Loads the Scoreboard
    case BowlingActions.LOAD_SCOREBOARD: {
      // Zero out the scoreboard
      state.scoreboard.fill({
        FirstRoll: 0,
        SecondRoll: 0,
        ThirdRoll: 0
      });
    };

    case BowlingActions.FETCH_SCORE_SUCCESS: {
      // debugger;
    };
  }

  return state;
}
