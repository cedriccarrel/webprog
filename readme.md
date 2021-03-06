# Projekt: NBA-Stats

## Projektidee / Ausgangslage

Wir sind vier sportbegeisterte Personen und unsere Idee besteht darin, eine Webseite zu erstellen auf der wir Daten der National Basketball Association (NBA) visualisieren. Wir werden auf Daten von einzelnen Spielern und Teams der letzten fünf Seasons zurückgreifen. Dadurch bleibt die zu bearbeitende Datenmenge überschaubar. Um die Darstellung der Daten interessant zu gestalten, werden wir verschiedene Ansichten und Filter einbauen, damit eine Interaktion zwischen dem Benutzer und den Daten entstehen kann.

## Aufbau der Seite
Die Webseite umfasst eine Page, auf welcher interaktiv unterschiedliche Diagrammtypen erzeugt werden können.
Die Art des Diagramms ist jeweils abhängig vom gewünschten Content - Änderungen sind hier vorbehalten.

![Mockup](./Mockup.jpeg)

## Daten
Entweder wird eine API-Schnittstelle gebaut, welche die aktuellen Daten von der Homepage www.nba.com
Wir werden gem. folgender Doku vorgehen: "nba_api is an API Client for www.nba.com. This package is meant to make the API Endpoints more accessible and to provide extensive documentation. The APIs on www.nba.com are largely undocumented and change frequently. Please feel free to contribute and have an open discussion regarding improvements and additional APIs to be mapped." ("https://pypi.org/project/nba-api/")

Oder es wird über diese Datenbasis gearbeitet:
- https://www.kaggle.com/nathanlauga/nba-games?select=games.csv 
- https://www.kaggle.com/nathanlauga/nba-games?select=games.csv
- https://www.kaggle.com/nathanlauga/nba-games?select=games_details.csv
- https://www.kaggle.com/nathanlauga/nba-games?select=games_details.csv
- https://www.kaggle.com/nathanlauga/nba-games?select=players.csv
- https://www.kaggle.com/nathanlauga/nba-games?select=players.csv
- https://www.kaggle.com/nathanlauga/nba-games?select=ranking.csv
- https://www.kaggle.com/nathanlauga/nba-games?select=ranking.csv

Da die Datenmenge 10 MB überschritten würde, werden nur die letzten 5 Seasons ausgewertet.</p>

## Funktionen / Sichten
Dem Benutzer werden durch verschiedene Filterfunktionen die jeweils relevante Datenansicht präsentiert. Der Benutzer hat folgende Möglichkeiten:

Seasons

- Eine spezifische Season
- Alle letzten fünf Seasons (Alltime)

Gruppierung

- Teams
- Players

Datenpunkt

- Points
- Rebounds
- Assissts
- Blocks Steals
- Turnovers
- Three Pointers

Zudem kann der Benutzer einen Vergleich (spezifische Season oder Alltime) zwischen Players auswählen.

## Phase II - Doku

![Phase_II](./Phase_II.docx)