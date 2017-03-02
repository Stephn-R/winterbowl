using Xunit;
using src.Models;

namespace src.Test.Models
{
    public class FrameTest
    {
        #region HELPERS

        /// <summary>
        /// Builds the frame to test
        /// </summary>
        /// <param name="first">the first roll</param>
        /// <param name="second">the second roll</param>
        /// <param name="third">the third roll</param>
        /// <returns></returns>
        private static Frame BuildFrame(int first, int second, int third) => new Frame
        {
            FirstRoll = first,
            SecondRoll = second,
            ThirdRoll = third
        };

        #endregion

        #region TESTS

        /// <summary>
        /// Tests if the Frame model can hold roll data
        /// </summary>
        /// <param name="first">the first roll</param>
        /// <param name="second">the second roll</param>
        /// <param name="third">the third roll</param>
        [Theory]
        [InlineData(0, 0, 0)]
        [InlineData(2, 8, 10)]
        public void CanStoreRolls(int first, int second, int third)
        {
            Frame f = BuildFrame(first, second, third);
            Assert.True(f.FirstRoll == first);
            Assert.True(f.SecondRoll == second);
            Assert.True(f.ThirdRoll == third);
        }

        /// <summary>
        /// Tests if the frame can detect a strike
        /// </summary>
        [Fact]
        public void CanDetectStrike()
        {
            Frame a = BuildFrame(10, 0, 0);
            Frame b = BuildFrame(8, 7, 6);
            Assert.True(a.HasStrike());
            Assert.False(b.HasStrike());
        }

        /// <summary>
        /// Tests if the frame can detect a spare
        /// </summary>
        [Fact]
        public void CanDetectSpare()
        {
            Frame a = BuildFrame(8, 2, 0);
            Frame b = BuildFrame(2, 2, 10);
            Assert.True(a.HasSpare());
            Assert.False(b.HasSpare());
        }

        /// <summary>
        /// Tests if the frame can detect if it is valid
        /// </summary>
        /// <param name="first">the first roll</param>
        /// <param name="second">the second roll</param>
        /// <param name="third">the third roll</param>
        [Theory]
        [InlineData(10, 0, 10)]
        [InlineData(2, 5, 0)]
        public void CanDetectValidFrame(int first, int second, int third)
        {
            Frame f = BuildFrame(first, second, third);
            Assert.True(f.ValidFrame());
        }

        /// <summary>
        /// Tests if the frame can detect it if is invalid
        /// </summary>
        /// <param name="first">the first roll</param>
        /// <param name="second">the second roll</param>
        /// <param name="third">the third roll</param>
        [Theory]
        [InlineData(11, 11, 11)]
        [InlineData(-1, -1, -1)]
        public void CanDetectInvalidFrame(int first, int second, int third)
        {
            Frame f = BuildFrame(first, second, third);
            Assert.False(f.ValidFrame());
        }

        /// <summary>
        /// Tests if the frame can calculate a sum of the first two rolls
        /// </summary>
        /// <param name="first">the first roll</param>
        /// <param name="second">the second roll</param>
        /// <param name="third">the third roll</param>
        /// <param name="sum">the sum total of the first two rolls</param>
        [Theory]
        [InlineData(8, 2, 10, 10)]
        [InlineData(0, 0, 0, 0)]
        [InlineData(0, 0, 10, 0)]
        public void CanCalculateSimpleScore(int first, int second, int third, int sum)
        {
            Frame f = BuildFrame(first, second, third);
            Assert.True(f.CalculateScore() == sum);
        }

        /// <summary>
        /// Tests if the frame can calculate a sum of all rolls in the frame
        /// </summary>
        /// <param name="first">the first roll</param>
        /// <param name="second">the second roll</param>
        /// <param name="third">the third roll</param>
        /// <param name="sum">the sum total of all rolls in the frame</param>
        [Theory]
        [InlineData(8, 2, 10, 20)]
        [InlineData(0, 0, 0, 0)]
        [InlineData(0, 0, 10, 10)]
        public void CanCalculateTotalScore(int first, int second, int third, int sum)
        {
            Frame f = BuildFrame(first, second, third);
            Assert.True(f.CalculateTotalScore() == sum);
        }

        #endregion
    }
}
