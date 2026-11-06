import { createContext, useState } from "react";
import { KONYVEK, type KonyvTipus } from "../data/adat";
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type UjKonyvTipus = Omit<KonyvTipus, "id"> ;

interface TablazatContextProps {
    konyvek: KonyvTipus[];
    torles: (id: number) => void;
    ujKonyvHozzaadas: (ujKonyv: UjKonyvTipus) => void;
}

export const TablazatContext = createContext<TablazatContextProps | undefined>(undefined);

export default function TablazatContextProvider({ children }: { children: React.ReactNode }) {
    const [konyvek, setKonyvek] = useState<KonyvTipus[]>(KONYVEK);

    function torles(id: number) {
        setKonyvek((aktualisKonyvek) => aktualisKonyvek.filter((konyv) => konyv.id !== id));
    }

    function konyvHozzaadas(ujKonyv: UjKonyvTipus) {
        const ujId = konyvek.length > 0 ? Math.max(...konyvek.map((konyv) => konyv.id)) + 1 : 1;
        const konyv: KonyvTipus = { id: ujId, ...ujKonyv };
        setKonyvek((aktualisKonyvek) => [...aktualisKonyvek, konyv]);
    }



    return (
        <TablazatContext.Provider value={{ konyvek, torles, ujKonyvHozzaadas: konyvHozzaadas }}>
            {children}
        </TablazatContext.Provider>
    );
}