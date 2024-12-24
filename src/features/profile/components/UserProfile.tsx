import { Avatar } from "@/features/shared/components/ui/Avatar";

export const UserProfile = () => {
  return (
    <div className="flex items-center w-full gap-4 px-3 py-2.5 rounded-2xl">
      <Avatar alt="Usuario" classNames={{ fallback: "bg-black text-white" }} />
      <label>
        <span className="block text-lg font-medium leading-none">Usuario</span>
        <small className="text-xs italic leading-none text-text-secondary">
          Profesional
        </small>
      </label>
    </div>
  );
};
