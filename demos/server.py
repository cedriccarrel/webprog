from flask import Flask
from flask import render_template
from flask import request
from flask import jsonify
from flask import json 
from flask.helpers import send_from_directory
import os



app = Flask(__name__)
def lade_teams():
	teams_path = os.path.join(
		app.static_folder, 'json', 'teams.json')
	with open(teams_path, encoding='utf-8') as json_file:
		json_data = json.load(json_file)
	return json_data  

def lade_players():
	players_path = os.path.join(
		app.static_folder, 'json', 'players.json')
	with open(players_path, encoding='utf-8') as json_file:
		json_data = json.load(json_file)
	return json_data  

@app.route('/')
def index():
	return render_template('index.html')

@app.route('/favicon.ico')
def favicon():
    return send_from_directory(os.path.join(app.root_path, 'static'),
                               'favicon.ico')

@app.route('/teams')
def teams():
	teams = lade_teams()
	return teams

@app.route('/players/<int:team_id>')
def players(team_id):
	players = lade_players()
	result = {
		"players": []
	}
	for player in players["data"]:
		if int(player["team"]["id"]) == team_id:
			result["players"].append(player)
	result["players"] = result["players"][100:120] # was result["players"][45:60]
	return result

if __name__ == "__main__":
	app.run(debug=True)