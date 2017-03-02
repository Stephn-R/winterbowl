namespace src.Models
{
    /// <summary>
    /// Model representing a Bowling Frame
    /// </summary>
    public class Frame
    {
        #region MEMBERS

        public int FirstRoll { get; set; } = 0;
        public int SecondRoll { get; set; } = 0;
        public int ThirdRoll { get; set; } = 0;

        #endregion

        #region CONSTRUCTOR

        public Frame() {}

        #endregion

        #region HELPER METHODS

        /// <summary>
        /// Checks if a strike was thrown in the first two rolls
        /// </summary>
        /// <returns>a strike was thrown</returns>
        public bool HasStrike() => (FirstRoll == 10);

        /// <summary>
        /// Checks if a spare was thrown
        /// </summary>
        /// <returns>a spare was thrown in the first two rolls</returns>
        public bool HasSpare() => (
            (FirstRoll + SecondRoll == 10) &&
            (FirstRoll < 10)
        );

        /// <summary>
        /// Validates the inputs of the first two rolls
        /// </summary>
        /// <returns>the first two rolls are valid</returns>
        public bool ValidFrame() => (
            (FirstRoll >= 0 && SecondRoll >= 0) &&
            (FirstRoll <= 10 && SecondRoll <= 10)
        );

        /// <summary>
        /// Calculates the simple score of the frame
        /// </summary>
        /// <returns>the sum total points of the rolls</returns>
        public int CalculateScore() => (FirstRoll + SecondRoll);

        /// <summary>
        /// Calculates the total score of all rolls in the frame
        /// </summary>
        /// <returns>the sum total points of all rolls in the frame</returns>
        public int CalculateTotalScore() => (FirstRoll + SecondRoll + ThirdRoll);

        #endregion
    }
}
