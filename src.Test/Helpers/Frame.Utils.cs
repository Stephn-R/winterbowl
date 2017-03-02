using System;
using src.Models;

namespace src.Test.Helpers
{
    public static class FrameUtils
    {
        #region MEMBERS

        private static readonly Random Rnd = new Random();

        #endregion

        #region HELPERS

        /// <summary>
        /// Generates a frame with random numbers for rolls
        /// </summary>
        /// <param name="start">the minimum roll value</param>
        /// <param name="end">the maximum roll value</param>
        /// <returns>the new frame object</returns>
        public static Frame GenerateRandomFrame(int start, int end) => new Frame
        {
            FirstRoll = Rnd.Next(start, end),
            SecondRoll = Rnd.Next(start, end),
            ThirdRoll = 0
        };

        #endregion
    }
}
