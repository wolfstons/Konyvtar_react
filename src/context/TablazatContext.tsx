import { createContext, useState } from "react";
import { KONYVEK, type KonyvTipus } from "../data/adat";

interface TablazatContextProps {
    konyvek: KonyvTipus[];
    torles: (id: number) => void;
}

export const TablazatContext = createContext<TablazatContextProps | undefined>(undefined);

export default function TablazatContextProvider({ children }: { children: React.ReactNode }) {
    const [konyvek, setKonyvek] = useState<KonyvTipus[]>(KONYVEK);

    function torles(id: number) {
        setKonyvek((aktualisKonyvek) => aktualisKonyvek.filter((konyv) => konyv.id !== id));
    }

    return (
        <TablazatContext.Provider value={{ konyvek, torles }}>
            {children}
        </TablazatContext.Provider>
    );
}