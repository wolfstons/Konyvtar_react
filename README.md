# Könyvmoly

Egyszerű React + TypeScript könyvtárkezelő alkalmazás Vite környezetben.

## Működés

Az alkalmazás induláskor a `src/data/adat.tsx` fájlban található könyvlistát jeleníti meg táblázatban. Minden sorban látható:

- a könyv azonosítója;
- címe és szerzője;
- ára;
- raktáron lévő darabszáma.

A sor végén található X gomb törli az adott könyvet a listából. A törlés az `App` komponens állapotát frissíti, ezért a felület azonnal újrarenderelődik.

## Futtatás

```bash
npm install
npm run dev
```

Ezután a Vite által kiírt helyi címen megnyitható az alkalmazás.

## Ellenőrző parancsok

```bash
npm run build
npm run lint
```

## Projekt felépítése

- `src/App.tsx`: a könyvlista állapota és a törlés kezelése;
- `src/component/Tablazat.tsx`: a táblázat és a fejlécek;
- `src/component/Sor.tsx`: egy könyv sorának megjelenítése és törlőgombja;
- `src/data/adat.tsx`: a kezdő könyvadatok;
- `src/App.css`: az alkalmazás megjelenése és reszponzív táblázatstílusai.