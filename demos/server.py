from flask import Flask, render_template
import json
import re
from nba_api.stats.library.data import players
from nba_api.stats.library.data import player_index_id, player_index_full_name, player_index_first_name, player_index_last_name, player_index_is_active
import requests


app = Flask(__name__)


""" #API-Teams
url = "https://api-basketball.p.rapidapi.com/teams"

querystring = {"league":"12","season":"2020-2021"}

headers = {
    'x-rapidapi-key': "46e198f942msh1ed866ffdc3d91cp177a3bjsn1ebc54ccb8a4",
    'x-rapidapi-host': "api-basketball.p.rapidapi.com"
    }

response = requests.request("GET", url, headers=headers, params=querystring)

print(response.text)

"""


def _find_players(regex_pattern, row_id):
    players_found = []
    for player in players:
        if re.search(regex_pattern, str(player[row_id]), flags=re.I):
            players_found.append(_get_player_dict(player))
    return players_found


def _get_player_dict(player_row):
    return {
        'id': player_row[player_index_id],
        'full_name': player_row[player_index_full_name],
        'first_name': player_row[player_index_first_name],
        'last_name': player_row[player_index_last_name],
        'is_active': player_row[player_index_is_active]
    }


def find_players_by_full_name(regex_pattern):
    return _find_players(regex_pattern, player_index_full_name)


def find_players_by_first_name(regex_pattern):
    return _find_players(regex_pattern, player_index_first_name)


def find_players_by_last_name(regex_pattern):
    return _find_players(regex_pattern, player_index_last_name)


def find_player_by_id(player_id):
    regex_pattern = '^{}$'.format(player_id)
    players_list = _find_players(regex_pattern, player_index_id)
    if len(players_list) > 1:
        raise Exception('Found more than 1 id')
    elif not players_list:
        return None
    else:
        return players_list[0]


def get_players():
    players_list = []
    for player in players:
        players_list.append(_get_player_dict(player))
    return players_list


def get_active_players():
    players_list = []
    for player in players:
        if player[player_index_is_active]:
            players_list.append(_get_player_dict(player))
    return players_list


def get_inactive_players():
    players_list = []
    for player in players:
        if not player[player_index_is_active]:
            players_list.append(_get_player_dict(player))
    return players_list

#json laden für Ausgaben, Userdata
"""
def lade_daten_aus_json (pfad, standard_wert = []):
    try:
        with open(pfad, 'r') as datei:
            return json.load(datei)
    except Exception:
        return standard_wert

#ins json schreiben
def schreibe_daten_in_json(pfad, daten):
    with open(pfad, 'w') as datei:
        json.dump(daten, datei, indent = 4)
"""
@app.route('/',  methods=['GET', 'POST'])
def index():
    test_player_id1 = find_player_by_id(76006)
    test_player_id = test_player_id1['full_name']
    print(test_player_id)
    return render_template("/index.html", test_player_id = test_player_id)



if __name__ == "__main__":
	app.run(debug=True, port=5000)