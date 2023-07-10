using Microsoft.AspNetCore.Identity;

namespace MistifyBE.Data
{
    public class Login
    {
        private int Id { get; set; }

        public required string UserName { get; set; }

        private string Password { get; set; }

        private string Address { get; set; }

        private string Email { get; set; }

        private Boolean DisplayInfo { get; set; }

        private string PhoneNumber { get; set;}


    }
}