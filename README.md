# Zadanie z bloku HTTP

Przy pomocy API dostepnego pod adresem
```https://jsonplaceholder.typicode.com```
Przygotowanie CRUD'a odnośnie postów i komentarzy do tych postów.
Aplikacja powinna być napisana w styl aplikacji SPA. Oznacza to, że strona powinna działać jako jedna strona bez potrzeby pobierania kolejnych plików HTML.
Proszę o przygotowanie następujących funkcjonalności:

1. Lista postów:
    * Pobieranie listy postów za pomocą metody GET dostepnych pod adresem: ```https://jsonplaceholder.typicode.com/posts```
    * Po wejściu na stronę główną posty powinny się załadować i wyświetlić jako lista
    * Możliwość usuwania postów (przy pomocy guzika na liście i odpowiedniego zapytania)
    * Możliwość edycji postów (przy pomocy guzika i modala i odpowiedniego zapytania)
    * Możliwość dodawania postów (przy pomocy guzika i modala i odpowiedniego zapytania)
2. Lista komentarzy:
    * Pobieranie listy komentarzy do danego postu za pomoca metody GET, które dostępne są pod adresem: ```https://jsonplaceholder.typicode.com/comments?postId=XXX``` gdzie XXX oznacza ID posta
    * Komentarze pojawiają się na kliknieciu w danego posta (jako lista poniżej)
    * Możliwość dodania komentarza (przy pomocy guzika na liście i odpowiedniego zapytania)
    * Możliwość usunięcia komentarza (przy pomocy guzika na liście i odpowiedniego zapytania)
3. (Bonusowo) Zaimplementowanie obsługi zalogowanego użytkownika przy pomocy ciasteczka
    * Strona główna dopiero dostepna po zalogowaniu
    * Jeżeli użytkownik nie jest zalogowany to wyświetlamy formularz do nadania nazwy użytkownika
    * Po wpisaniu nazwy użytkownik uzyskuje dostęp do aplikacji.
    * Jeżeli użytkownik ponownie wejdzie na strone nie ma obowiązku podawania znowu nazwy użytkownika (tutaj mechanizm ciasteczek musi zostać obslużony)
    * Dodanie guzika który usunie ciasteczko