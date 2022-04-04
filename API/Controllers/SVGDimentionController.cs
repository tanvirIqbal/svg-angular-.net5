using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;

namespace API.Controllers
{
    [Route("api/[controller]")]
    public class SVGDimentionController : Controller
    {
        private readonly ILogger<SVGDimentionController> _logger;
        private readonly IWebHostEnvironment _webHostEnvironment;

        public SVGDimentionController(ILogger<SVGDimentionController> logger,
        IWebHostEnvironment webHostEnvironment)
        {
            _logger = logger;
            _webHostEnvironment = webHostEnvironment;
        }

        [Route("GetDimension")]
        [HttpGet]
        public ActionResult<Dimension> GetDimension()
        {
            string rootPath = _webHostEnvironment.ContentRootPath; //get the root path

            string fullPath = Path.Combine(rootPath, "dimension.json"); //combine the root path with that of our json file inside mydata directory
            if (!System.IO.File.Exists(fullPath))
            {
                return NotFound("JSON file not found.");
            }
            var jsonData = System.IO.File.ReadAllText(fullPath); //read all the content inside the file

            Dimension? dimention = JsonConvert.DeserializeObject<Dimension>(jsonData); //deserialize object as a list of users in accordance with your json file


            return dimention == null ? new Dimension() : dimention;

        }

        [Route("SaveDimension")]
        [HttpPost]
        public ActionResult SaveDimension([FromBody] Dimension dimension)
        {
            string rootPath = _webHostEnvironment.ContentRootPath; //get the root path

            string fullPath = Path.Combine(rootPath, "dimension.json"); //combine the root path with that of our json file inside mydata directory
            if (!System.IO.File.Exists(fullPath))
            {
                return NotFound("JSON file not found.");
            }

            string json = JsonConvert.SerializeObject(dimension);

            System.IO.File.WriteAllText(fullPath, json);

            
            return Ok("Saved Successfully.");

        }
    }
}