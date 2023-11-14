using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(EyeCare.Web.Startup))]
namespace EyeCare.Web
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
