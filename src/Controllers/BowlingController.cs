using Microsoft.AspNetCore.Mvc;
using Winter_Bowl.Models;

namespace Winter_Bowl.Controllers
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
            if(!scoreboard.FramesValid()) return BadRequest("The provided scores are not valid");
            // 2. Calculate the score
            return (scoreboard.frames.Length > 0) ? Json(scoreboard.CalculateScore()) : Json(0);
        }
    }
}
