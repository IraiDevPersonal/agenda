import { ArrayMap } from "@/features/_core/components/utils";
import { DataWrapper } from "./DataWrapper";

type Props = {
  className?: string;
};

export const PatientHistory: React.FC<Props> = ({ className }) => {
  return (
    <DataWrapper
      className={className}
      title={
        <>
          Historial paciente{" "}
          <small className="text-xs text-muted-foreground">
            (Ultimas 4 atenciones...)
          </small>
        </>
      }
    >
      <ul className="text-sm">
        <li className="flex justify-between items-center *:font-semibold">
          <strong>Fecha/Hora</strong>
          <strong>Estado</strong>
        </li>
        <ArrayMap dataset={[1, 2, 3, 4]}>
          {(item) => (
            <li
              key={item}
              className="flex items-center justify-between text-muted-foreground"
            >
              <span>07-01-2025/13:00</span>
              <span>{item === 1 ? "Cancelada" : "Confirmada"}</span>
            </li>
          )}
        </ArrayMap>
      </ul>
    </DataWrapper>
  );
};
