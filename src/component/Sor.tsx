import type { KonyvTipus } from "../data/adat";

interface SorProps {
  konyv: KonyvTipus;
  torol: (id: number) => void;
}

export default function Sor({ konyv, torol }: SorProps) {
  return (
    <>
      <tr>
        <td>{konyv.id}</td>
        <td>{konyv.cim}</td>
        <td>{konyv.szerzo}</td>
        <td>{konyv.ar}</td>
        <td>{konyv.darabszam}</td>
        <td>
          <button
            className="delete-button"
            type="button"
            aria-label={`${konyv.cim} törlése`}
            title="Könyv törlése"
            onClick={() => torol(konyv.id)}
          >
            <span aria-hidden="true">×</span>
          </button>
        </td>
      </tr>
    </>
  );
}
