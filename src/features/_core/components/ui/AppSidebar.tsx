import UserAccount from "@/features/account/components/UserAccount";
import ArrayMap from "../utils/ArrayMap";
import NavLinkRouter from "./NavLinkRouter";
import Box from "./Box";
import IconMyDay from "../icons/IconMyDay";
import IconAgenda from "../icons/IconAgenda";
import IconUsers from "../icons/IconUsers";
import IconDolar from "../icons/IconDolar";
import IconVerticalDots from "../icons/IconVerticalDots";
import cn from "@/config/tailwind-merge";
import type { Paths } from "@/config/types";

const PAGES: PageProps[] = [
  { label: "Mi Día", icon: <IconMyDay />, route: "/" },
  { label: "Agenda", icon: <IconAgenda />, route: "/agenda" },
  { label: "Pacientes", icon: <IconUsers />, route: "/not-found" },
  // { label: "Informes", icon: <IconDocument />, route: "/not-found" },
  { label: "Contabilidad", icon: <IconDolar />, route: "/not-found" },
];

type PageProps = { label: string; icon: React.ReactNode; route: Paths };

const AppSidebar = () => {
  return (
    <Box as="aside" className="flex flex-col w-full max-w-64 gap-y-8">
      <div className="flex items-center gap-4 px-3">
        <span className="text-2xl italic font-bold">AGENDA</span>
        <span className="block w-10 h-10 text-white bg-primary rounded-full"></span>
      </div>

      <div className="mb-auto">
        <ul className="space-y-1">
          <ArrayMap dataset={PAGES}>
            {(page) => (
              <li key={page.label}>
                <ActiveNavLink {...page} />
              </li>
            )}
          </ArrayMap>
        </ul>
      </div>

      <div>
        <button className="flex items-center w-full transition-colors duration-300 bg-accent text-primary shadow-lg shadow-primary/10 rounded-2xl hover:bg-primary/15">
          <UserAccount />
          <IconVerticalDots className="me-2.5" />
        </button>
      </div>
    </Box>
  );
};

const ActiveNavLink: React.FC<PageProps> = ({ icon, label, route }) => {
  return (
    <NavLinkRouter
      to={route}
      className={({ isActive }) =>
        cn(
          "px-3 py-2.5 flex gap-4 items-center rounded-2xl font-medium",
          "[&_figure]:hover:scale-125",
          "transition-all duration-300",
          isActive ? "bg-primary text-white" : "hover:bg-accent",
        )
      }
    >
      <figure className="text-xl leading-none transition-transform duration-300">
        {icon}
      </figure>
      <span>{label}</span>
    </NavLinkRouter>
  );
};

export default AppSidebar;
