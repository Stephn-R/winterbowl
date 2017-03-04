using System;
using System.Linq;
using src.Models;

namespace src.Test.Helpers
{
    public static class ScoreboardUtils
    {
        #region MEMBERS

        private static readonly Random Rnd = new Random();

        #endregion

        #region HELPERS

        /// <summary>
        /// Generates a random scoreboard with random frames
        /// </summary>
        /// <returns>the new scoreboard object</returns>
        public static Scoreboard GenerateRandomScoreboard() => new Scoreboard
        {
            Frames = Enumerable.Repeat(FrameUtils.GenerateRandomFrame(1, 10), 10).ToArray()
        };

        /// <summary>
        /// Generates an invalid scoreboard with random invalid frames
        /// </summary>
        /// <returns>the new invalid scoreboard object</returns>
        public static Scoreboard GenerateRandomInvalidScoreboard() => new Scoreboard
        {
            Frames = Enumerable.Repeat(FrameUtils.GenerateRandomFrame(11, 20), 10).ToArray()
        };

        /// <summary>
        /// Generates a perfect game scoreboard
        /// </summary>
        /// <returns>the perfect game scoreboard object</returns>
        public static Scoreboard GeneratePerfectGame() => new Scoreboard
        {
            Frames = Enumerable.Repeat(FrameUtils.GenerateRandomFrame(10, 10), 10).ToArray()
        };

        #endregion
    }
}
