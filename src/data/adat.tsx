export type KonyvTipus = {
    id: number,
    cim: string,
    szerzo: string,
    ar: number,
    darabszam: number
}

export const KONYVEK: KonyvTipus[] = [
    {
        id: 1,
        cim: "Harry Potter és a bölcsek köve",
        szerzo: "J. K. Rowling",
        ar: 4990,
        darabszam: 10
    },
    {
        id: 2,
        cim: "A Gyűrűk Ura",
        szerzo: "J. R. R. Tolkien",
        ar: 6990,
        darabszam: 5
    },
    {
        id: 3,
        cim: "A kis herceg",
        szerzo: "Antoine de Saint-Exupéry",
        ar: 2990,
        darabszam: 15
    },
    {
        id: 4,
        cim: "Egri csillagok",
        szerzo: "Gárdonyi Géza",
        ar: 3500,
        darabszam: 8
    },
    {
        id: 5,
        cim: "Pál utcai fiúk",
        szerzo: "Molnár Ferenc",
        ar: 2800,
        darabszam: 12
    },
    {
        id: 6,
        cim: "1984",
        szerzo: "George Orwell",
        ar: 3990,
        darabszam: 7
    },
    {
        id: 7,
        cim: "A Da Vinci-kód",
        szerzo: "Dan Brown",
        ar: 4500,
        darabszam: 4
    },
    {
        id: 8,
        cim: "Tüskevár",
        szerzo: "Fekete István",
        ar: 3200,
        darabszam: 0
    },
    {
        id: 9,
        cim: "A hobbit",
        szerzo: "J. R. R. Tolkien",
        ar: 5500,
        darabszam: 6
    },
    {
        id: 10,
        cim: "Abigél",
        szerzo: "Szabó Magda",
        ar: 3800,
        darabszam: 3
    }
];