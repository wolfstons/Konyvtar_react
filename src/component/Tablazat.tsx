import type { KonyvTipus } from "../data/adat";
import Sor from "./Sor";

interface TablazatProps {
  konyvek: KonyvTipus[];
  torol: (id: number) => void;
}

export default function Tablazat({ konyvek, torol }: TablazatProps) {
  return (
    <>
      <header>könyvmoly</header>
      <div className="tablazat">
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>Cím</th>
              <th>Szerző</th>
              <th>Ár</th>
              <th>DB</th>
              <th>Művelet</th>
            </tr>
          </thead>{" "}
          <tbody>
            {konyvek.map((konyv) => (
              <Sor key={konyv.id} konyv={konyv} torol={torol} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
