using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using EyeCare.BLL.BusinessLayer;

namespace EyeCare.Web.Controllers
{
    public class DoctorController : Controller
    {
        //DoctorBLL doctorBLL = new DoctorBLL();
        //// GET: Doctor
        //[Authorize(Roles ="admin,doctor")]
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Dashboard()
        {
            return View();
        }
    }
}