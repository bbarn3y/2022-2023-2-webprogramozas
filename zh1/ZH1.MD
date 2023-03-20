# Webprogramozás 2022-2023-2 ZH 1

Eredményeket küldjétek a babuafi@inf.elte.hu e-mail címre.

## 1. feladat

Adott egy tömb könyvek adataival.

Az egyes könyvekről a következő adatokat tároljuk:
- title: A könyv címe.
- author: A könyv szerzője.
- release: A könyv megjelenésének éve.
- inStock: A könyv van-e raktáron.

Az alábbi alfeladatok eredményét írasd ki a console-re.

1.1 **Keresd meg azt a könyvet, amelyet "Andy Weir" írt.
      Építhetsz arra, hogy csak egy ilyen van a tömbben.** (1 pont)

1.2 **Keresd meg a 2010-ben vagy azután megjelent könyveket.** (1 pont)

1.3 **Keresd meg a legrégebben megjelent könyvet.** (1 pont)

1.4 **Készíts egy egyedi listát a könyvek szerzőiről.
      Tehát az eredményként kiadott tömbben a szerzők nevei szerepeljenek, azonban minden szerző csak egyszer,
      akkor is ha több könyvnek is Ő a szerzője az eredeti tömbben.** (1 pont)

    Segítség:

    Az egyediség eléréhez használhatod a Set típust.

1.5 **Döntsd el, hogy minden könyv 1985 után jelent-e meg.** (1 pont)


## 2. feladat

A felületen találsz egy könyvválasztó mezőt valamint egy "Adatok lekérése" gombot.

A feladat lényege, hogy gombnyomásra jelenjenek meg a kiválasztott könyv adatai táblázatos formátumban.

2.1 **Az "Adatok lekérése" gomb megnyomásakor az előző feladat során is használt "books" tömbből keresd ki a kiválasztott
      könyvet cím alapján és írasd ki konzolra.** (1 pont)

2.2 **A "resultsContainer" azonosítójú elembe generálj egy táblázatot a könyv adataival.** (2 pont)
A táblázatnak legyen fejléce a következő mezőkkel: "Cím", "Szerző", "Megjelenés".
A fejlécen kívül a táblázatnak csak 1 sora legyen, ami a kiválasztott könyv adatai tartalmazza.

2.3 **Találsz egy "openWebshop" azonosítójú rejtett linket a HTML fájlban.
    A link a "display: none" stílusbeállítással került elrejtésre.
    A táblázat megjelenítésekor tedd láthatóvá ezt a linket, a stílusbeállítás megváltoztatásával.
    Például "display: block" stílussal megfelelően fog működni.** (1 pont)

2.4 **Az előző feladatban megjelenített link az egyik nagyobb könyváruház oldalára mutat.** (1 pont)

Amennyiben az éppen kiválasztott könyv nem elérhető a webshopban (az "inStock" mező értéke false),
akkor a linkre kattintva ne nyíljon meg az oldal.

      Segítség:

      **Akadályozd meg** a link **alap** működését.
