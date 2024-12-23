/**
 * HEADER:
 * agenda (NOMBRE APP) - logo
 * BODY:
 * 1. Mi dia
 * 2. Pacientes
 * 3. Informes
 * 4. Contabilidad
 * FOOTER:
 * dropdown usuario
 */

import { RoutePaths } from "@/config/routes";
import { NavLinkRouter } from "./router/NavLinkRouter";
import { ArrayMap } from "./utils/ArrayMap";
import { cn } from "@/config/tailwind-merge";
import { UserProfile } from "@/features/profile/components/UserProfile";

const PAGES: PageProps[] = [
  { label: "Mi Día", icon: "*", route: "/" },
  { label: "Pacientes", icon: "*", route: "/not-found" },
  { label: "Informes", icon: "*", route: "/not-found" },
  { label: "Contabilidad", icon: "*", route: "/not-found" },
];

type PageProps = { label: string; icon: React.ReactNode; route: RoutePaths };

export const AppSidebar = () => {
  return (
    <aside className="flex flex-col w-full p-4 max-w-64 gap-y-8">
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
          <UserProfile />
          <span className="text-3xl rotate-90">{"..."}</span>
        </button>
      </div>
    </aside>
  );
};

const ActiveNavLink: React.FC<PageProps> = ({ icon, label, route }) => {
  return (
    <NavLinkRouter
      to={route}
      className={({ isActive }) =>
        cn(
          "p-3 flex gap-4 items-center rounded-2xl font-medium",
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