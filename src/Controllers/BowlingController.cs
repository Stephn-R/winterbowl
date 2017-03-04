using Microsoft.AspNetCore.Mvc;
using src.Models;

namespace src.Controllers
{
    /// <summary>
    /// Bowling API Controller
    /// </summary>
    [Route("api/[controller]")]
    public class BowlingController : Controller
    {
        /// <summary>
        /// Calculates the total score of the bowling scoreboard
        /// </summary>
        /// <param name="scoreboard"></param>
        /// <returns>a JSON response containing the score and additional details</returns>
        [HttpPost]
        [Route("score")]
        public IActionResult CalculateScore([FromBody]Scoreboard scoreboard)
        {
            // 1. Validate the frames
            if (!scoreboard.FramesValid()) return BadRequest("The provided scores are not valid");
            // 2. Calculate the score (default: 0)
            else return (scoreboard.Frames.Length > 0) ? Json(scoreboard.CalculateScore()) : Json(0);
        }
    }
}
