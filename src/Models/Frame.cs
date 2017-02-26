namespace Winter_Bowl.Models
{
    /// <summary>
    /// Model representing a Bowling Frame
    /// </summary>
    public class Frame
    {
        #region MEMBERS

        public int FirstRoll { get; set; }
        public int SecondRoll { get; set; }
        public int ThirdRoll { get; set; }

        #endregion

        #region HELPER METHODS

        /// <summary>
        /// Checks if a strike was thrown in the first two rolls
        /// </summary>
        /// <returns>a strike was thrown</returns>
        public bool HasStrike()
        {
            return (FirstRoll == 10);
        }

        /// <summary>
        /// Checks if a spare was thrown
        /// </summary>
        /// <returns>a spare was thrown in the first two rolls</returns>
        public bool HasSpare()
        {
            return (
                (FirstRoll + SecondRoll == 10) &&
                (FirstRoll < 10)
            );
        }

        /// <summary>
        /// Validates the inputs of the first two rolls
        /// </summary>
        /// <returns>the first two rolls are valid</returns>
        public bool ValidFrame()
        {
            return (
                (FirstRoll >= 0 && SecondRoll >= 0) &&
                (FirstRoll <= 10 && SecondRoll <= 10)
            );
        }

        /// <summary>
        /// Calculates the simple score of the frame
        /// </summary>
        /// <returns>the sum total points of the rolls</returns>
        public int CalculateScore()
        {
            return (FirstRoll + SecondRoll);
        }

        #endregion
    }
}
