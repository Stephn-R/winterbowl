using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Xunit;
using src.Controllers;

namespace src.Test.Controllers
{
    public class HomeControllerTest
    {
        private static HomeController _controller;

        /// <summary>
        /// Prepares the HomeController for testing
        /// </summary>
        public HomeControllerTest()
        {
            _controller = new HomeController();
        }

        /// <summary>
        /// Tests if the home route exists
        /// </summary>
        [Fact]
        public void ReturnHomeRoute()
        {
            var result = _controller.Index();
            Assert.IsType<ViewResult>(result);
        }

        /// <summary>
        /// Tests if the error page exists
        /// </summary>
        /// <returns></returns>
        [Fact]
        public void ReturnErrorRoute()
        {
            var result = _controller.Error();
            Assert.IsType<ViewResult>(result);
        }
    }
}
