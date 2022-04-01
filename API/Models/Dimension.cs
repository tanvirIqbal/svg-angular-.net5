using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace API.Models
{
    public class Dimension
    {
        [Required]
        public int Width { get; set; }
        [Required]
        public int Height { get; set; }

        public Dimension()
        {
            Width = 0;
            Height = 0;
        }
    }
}