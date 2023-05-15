# Webprogramozás 2022-2023-2 ZH 2

Az eredményeket küldjétek a babuafi@inf.elte.hu e-mail címre.

## A feladat

Adott két fájl könyvek adataival:
`books.json` és `books.csv`

A fájlok könyvek adatait tartalmazzák, minden könyvről a következőket:
- **title**: A könyv címe.
- **author**: A könyv szerzője.
- **release**: A könyv megjelenésének éve.

1.1 **Olvasd be a `books.json` fájl tartalmát, egy asszociatív tömbbe a `BooksFromJSON` osztály `getBooks` függvényében.** (2 pont)

1.2 **Implementáld a `BooksFromWhatever` absztrakt osztály `getBooksReleasedAfter` függvényét.** (2 pont)
A függvény célja, hogy azokkal a könyvekkel térjen vissza, melyek egy megadott évben (`$year` paraméter) vagy az után jelentek meg (`relese` mező).

1.3 **Az oldalon találhatsz egy űrlapot egyetlen mezővel (év/year). Az űrlap beküldésekor ellenőrizz két dolgot:** (2 pont)
- A felhasználó adott meg értéket (nem üresen küldte be az űrlapot).
- A felhasználó 1979 és 2023 közötti évet adott meg.

1.4 **Hiba esetén jeleníts meg egy releváns hibaüzenetet az év input mezője alatt.** (1 pont)
Fontos: Hiba csak akkor jelenjen meg ha történt POST esemény, az oldal első megnyitása esetén ne!

1.5 **Megfelelő év beküldése esetén válogasd ki azokat a könyveket, melyek a beküldött évben vagy az után jelentek meg.** (1 pont)
Az eredményt tárold el egy változóban.
Használd az 1.2-ben implementált `getBooksReleasedAfter` függvényt!

1.6 **Az 1.5-ben leszűrt könyvek listáját írasd ki egy új fájlba (CSV formátumban): `books_after_${year}.csv`.** (2 pont)
A `${year}` helyén a fájlnév tartalmazza a megadott évet!
A CSV fájlnak legyen fejléce, tehát első sora ez legyen: `title,author,release`.

+1 **Implementáld a `BooksFromCSV` osztály `getBooks` függvényét.** (2 pont)
A függvény olvassa be a books.csv fájl tartalmát.
Ezt követően keresd meg azokat a könyveket, amelyek a CSV és a JSON fájlban is megtalálhatóak.
Két könyv akkor tekinthető egyenlőnek, ha minden adatuk megegyezik.
A közös könyvek listáját írasd ki a felületre táblázatos (`<table>`) formátumban.

---

Összesen elérhető pontszám: 10 + 2



