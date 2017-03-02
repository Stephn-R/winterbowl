using Xunit;
using src.Models;
using src.Test.Helpers;

namespace src.Test.Models
{
    public class ScoreboardTest
    {
        #region TESTS

        /// <summary>
        /// Tests if the scoreboard can hold frames
        /// </summary>
        [Fact]
        public void CanStoreFrames()
        {
            Scoreboard board = ScoreboardUtils.GenerateRandomScoreboard();
            Assert.NotEmpty(board.Frames);
        }

        /// <summary>
        /// Tests if the scoreboard can check for valid frames
        /// </summary>
        [Fact]
        public void CanDetectValidScoreboard()
        {
            Scoreboard validBoard = ScoreboardUtils.GenerateRandomScoreboard();
            Scoreboard invalidBoard = ScoreboardUtils.GenerateRandomInvalidScoreboard();
            Assert.True(validBoard.FramesValid());
            Assert.False(invalidBoard.FramesValid());
        }

        /// <summary>
        /// Tests if the scoreboard can calculate a total score
        /// </summary>
        public void CanCalculateTotalScore()
        {
            Scoreboard perfectGame = ScoreboardUtils.GeneratePerfectGame();
            Assert.True(perfectGame.CalculateScore() == 300);
        }

        #endregion
    }
}
