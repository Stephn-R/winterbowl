﻿using System.Linq;

namespace src.Models
{
    /// <summary>
    /// Model representing a Bowling Scoreboard
    /// </summary>
    public class Scoreboard
    {
        #region MEMBERS

        /// <summary>
        /// The Bowling Frames
        /// </summary>
        /// <returns>the frames bowled</returns>
        public Frame[] Frames { get; set; }

        #endregion

        #region CONSTRUCTORS

        public Scoreboard() {}

        #endregion

        #region HELPER METHODS

        /// <summary>
        /// Checks if the frames are valid
        /// </summary>
        /// <param name="frames">the bowling scores on each frame</param>
        /// <returns>the frames are valid</returns>
        public bool FramesValid()
        {
            bool validFrames = true;
            bool validFinalFrame = true;

            for(int i = 0; i < Frames.Length; i++)
            {
                // Validate each bowling frame for input values
                validFrames = validFrames ? Frames[i].ValidFrame() : false;

                // Validate if only the last frame is a valid final frame
                if(Frames[i].ThirdRoll > 0 && i < Frames.Length-1) validFinalFrame = false;
                // Break if anything reported false
                if(!validFrames && !validFinalFrame) break;
            }

            return (validFrames && validFinalFrame);
        }

        /// <summary>
        /// Calculates the complete score of the entire scoreboard
        /// </summary>
        /// <returns>the score</returns>
        public int CalculateScore()
        {
            // Zero out an array
            int[] score = Enumerable.Repeat(0, Frames.Length).ToArray();

            // Calculate final frame first so we can compute the other frame's scores
            Frame f = Frames[Frames.Length-1];
            if(f.HasStrike() && f.SecondRoll == 10) score[Frames.Length-1] = f.CalculateScore() + f.ThirdRoll;
            else score[Frames.Length-1] = f.CalculateScore();

            // Calculate score for all frames in reverse order (starting from second to last)
            for(int i = Frames.Length-2; i >= 0; i--)
            {
                Frame curr = Frames[i];
                Frame next = Frames[i+1];

                // Pair of Strikes
                if(curr.HasStrike() && next.HasStrike()) score[i] = 30;
                // Spare Frames
                else if(curr.HasSpare() && next.HasStrike()) score[i] = 20;
                // If following frame has a spare
                else if(
                    (curr.HasSpare() && next.HasSpare()) ||
                    (curr.HasStrike() && next.HasSpare())
                ) score[i] = 10 + next.FirstRoll;
                // Strike (or) Spare followed by an open frame
                else if(curr.HasStrike() && !next.HasStrike() && !next.HasSpare()) score[i] = curr.CalculateScore() + next.CalculateScore();
                else if(curr.HasSpare() && !next.HasStrike() && !next.HasSpare()) score[i] = curr.CalculateScore() + next.FirstRoll;
                // Open Frame
                else score[i] = curr.CalculateScore();
            }

            // Return the total
            return score.Sum();
        }

        #endregion
    }
}
