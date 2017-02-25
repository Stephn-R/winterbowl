using Microsoft.AspNetCore.Mvc;

namespace Winter_Bowl.Controllers
{
    /// <summary>
    /// Home Web Controller
    /// </summary>
    public class HomeController : Controller
    {
        /// <summary>
        /// Loads the Index page
        /// </summary>
        /// <returns></returns>
        public IActionResult Index()
        {
            return View();
        }

        /// <summary>
        /// Loads the Error page
        /// </summary>
        /// <returns></returns>
        public IActionResult Error()
        {
            return View("Error");
        }
    }
}