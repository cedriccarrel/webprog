**Diskutieren Sie als Team Ideen und mögliche Datenquellen und entwickeln Sie eine Idee für Ihr Semesterprojekt. Beschreiben Sie Ihre Idee mit einer halben Seite Text. Gerne dürfen Sie zusätzlich Bilder und Diagramme anfügen, um Ihre Idee zu verdeutlichen.**


# Projekt: NBA Stats 
## Projektidee / Ausgangslage

Ihre Beschreibung sollte auch die Links auf die Datenquelle beinhalten, die Sie verwenden möchten. 

Wir möchten eine Webseite bauen, welche akutelle NBA-Daten visualisiert.



## Aufbau der Seite



## Daten
Entweder wird eine API-Schnittstelle gebaut, welche die aktuellen Daten von der Homepage www.nba.com holt.

Wir werden gem. folgender Doku vorgehen: "nba_api is an API Client for www.nba.com. This package is meant to make the API Endpoints more accessible and to provide extensive documentation. The APIs on www.nba.com are largely undocumented and change frequently. Please feel free to contribute and have an open discussion regarding improvements and additional APIs to be mapped." (https://pypi.org/project/nba-api/)

Oder es wird über diese Datenbasis gearbeitet: 
- https://www.kaggle.com/nathanlauga/nba-games?select=games.csv
- https://www.kaggle.com/nathanlauga/nba-games?select=games_details.csv
- https://www.kaggle.com/nathanlauga/nba-games?select=players.csv
- https://www.kaggle.com/nathanlauga/nba-games?select=ranking.csv

Da die Datenmenge 10 MB überschritten würde, werden nur die letzten 5 Seasons ausgewertet.

## Funktionen / Sichten
- Overall Season Stats Players (Top 5: Points, Rebounds, Assists, Blocks Steals, Turnovers, Three Pointers)
- Overall Season Stats Teams (Top 5: Points, Rebounds, Assists, Blocks Steals, Turnovers, Three Pointers)
- Alltime Stats (Top 5: Points, Rebounds, Assists, Blocks Steals, Turnovers, Three Pointers)
- Spieler Vergleich
