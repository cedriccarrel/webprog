var data ={
    "data": [
        {
            "games_played": 67,
            "player_id": 81,
            "season": 2020,
            "min": "28:23",
            "fgm": 3.25,
            "fga": 7.52,
            "fg3m": 1.79,
            "fg3a": 4.37,
            "ftm": 1.45,
            "fta": 1.67,
            "oreb": 0.4,
            "dreb": 2.27,
            "reb": 2.67,
            "ast": 1.9,
            "stl": 0.93,
            "blk": 0.39,
            "turnover": 1.01,
            "pf": 1.7,
            "pts": 9.75,
            "fg_pct": 0.433,
            "fg3_pct": 0.41,
            "ft_pct": 0.866
        }
    ]
}

const labels = [
    'games_played',
    'min',
    'fgm',
    "fga",
    "fg3m",
    "fg3a",
    "ftm",
    "fta",
    "oreb",
    "dreb",
    "reb",
    "ast",
    "stl",
    "blk",
    "turnover",
    "pf",
    "pts",
    "fg_pct",
    "fg3_pct",
    "ft_pct"
  ]

Object.filter = (obj, predicate) => 
Object.fromEntries(Object.entries(obj).filter(predicate))

var filtered = Object.filter(data.data[0], ([name, ]) => labels.includes(name))
console.log(filtered)