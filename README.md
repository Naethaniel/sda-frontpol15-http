# Zadanie z bloku HTTP

Przy pomocy API dostepnego pod adresem
```https://jsonplaceholder.typicode.com```
Proszę o przygotowanie następujących funkcjonalności:

1. Lista postów (/posts):
    * Implementacja obsługi zapytań:
      * Pobranie listy postów
      * Edycja posta
      * Dodanie posta
      * Usunięcie posta
2. Lista komentarzy (/comments):
    * Implementacja obsługi zapytań:
      * Pobranie listy komentarzy dla konkretnego postu
      * Moliwosc dodania komentarza do konkretnego postu
      * Mozliwosc usuniecia konkretnego komentarza dla konkretnego postu


Wszystko powinno byc zaimplementowane w odpowiedniej klasie i przy uzyciu funkcji `fetch`.

Zadanie dodatkowe:
1. Lista uzytkownikow (/users):
    * Pobieranie listy uzytkownikow
    * Dodanie uzytkownika
    * Usuniecie uzytkownika
    * Edycja uzytkownika
2. Przygotowac obsługę błędów:
   1. Lista postow:
      * Podczas dodawania postu przygotowac kod aby obsluzyl status http 400 (Bad request). Niestety API nie pozwala zwrocic dowolnych statusow takze to zadanie jest "na sucho"
   2. Lista uzytkownikow
      * Podczas edycji uzytkownika przygotowac kod aby obsluzyl status 401 Unauthorized. Niestety API nie pozwala zwrocic dowolnych statusow takze to zadanie jest na "sucho"


**UWAGA**
"na sucho" oznacza tutaj brak mozliwosci uruchomienia kodu poniewaz on sie nigdy nie wykona (z powodu ze ten status nigdy nie zostanie zwrocony w przypadku API w tym zadaniu)