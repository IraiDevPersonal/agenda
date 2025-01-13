import { cn, RoutePaths } from "@/config";
import { UserAccount } from "@/features/account/components/UserAccount";
import {
  IconAgenda,
  IconDocument,
  IconDolar,
  IconMyDay,
  IconUsers,
} from "../icons";
import { ArrayMap } from "../utils";
import { Box, NavLinkRouter } from "./";

const PAGES: PageProps[] = [
  { label: "Mi Día", icon: <IconMyDay />, route: "/" },
  { label: "Agenda", icon: <IconAgenda />, route: "/agenda" },
  { label: "Pacientes", icon: <IconUsers />, route: "/not-found" },
  { label: "Informes", icon: <IconDocument />, route: "/not-found" },
  { label: "Contabilidad", icon: <IconDolar />, route: "/not-found" },
];

type PageProps = { label: string; icon: React.ReactNode; route: RoutePaths };

export const AppSidebar = () => {
  return (
    <Box as="aside" className="flex flex-col w-full max-w-64 gap-y-8">
      <div className="flex items-center gap-4 px-3">
        <span className="text-2xl italic font-bold">AGENDA</span>
        <span className="block w-10 h-10 text-white bg-black rounded-full"></span>
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
        <button className="flex items-center w-full transition-colors duration-300 bg-black/5 hover:bg-black/10 rounded-2xl">
          <UserAccount />
          <span className="text-3xl rotate-90">{"..."}</span>
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
          !isActive ? "hover:bg-black/10" : "bg-black text-white"
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
