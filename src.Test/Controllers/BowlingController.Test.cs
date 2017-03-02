using System.Reflection;
using Microsoft.AspNetCore.Mvc;
using src.Controllers;
using src.Test.Helpers;
using Xunit;

namespace src.Test.Controllers
{
    public class BowlingControllerTest
    {
        private static BowlingController _controller;

        /// <summary>
        /// Prepares the HomeController for testing
        /// </summary>
        public BowlingControllerTest()
        {
            _controller = new BowlingController();
        }

        /// <summary>
        /// Tests if the home route exists
        /// </summary>
        [Fact]
        public void ReturnPostScoreEndpoint()
        {
            IActionResult result = _controller.CalculateScore(ScoreboardUtils.GeneratePerfectGame());
            Assert.IsType<JsonResult>(result);
        }
    }
}
