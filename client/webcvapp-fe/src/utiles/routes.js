import { Home } from "../pages/Home.js";
import { Education } from "../pages/Education.js";
import { EmploymentHistory } from "../pages/EmploymentHistory";
import { Contact } from "../pages/Contact";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import SchoolIcon from "@mui/icons-material/School";
import HomeIcon from "@mui/icons-material/Home";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";

const routes = [
  {
    path: "/",
    component: <Home />,
    label: "Home",
    isExact: true,
    icon: <HomeIcon />,
  },
  {
    path: "/Education",
    component: <Education />,
    label: "Education",
    isExact: false,
    icon: <SchoolIcon />,
  },
  {
    path: "/EmploymentHistory",
    component: <EmploymentHistory />,
    label: "Employment History",
    isExact: false,
    icon: <WorkHistoryIcon />,
  },
  {
    path: "/Contact",
    component: <Contact />,
    label: "Contact",
    isExact: false,
    icon: <ContactSupportIcon />,
  },
];

export default routes;
