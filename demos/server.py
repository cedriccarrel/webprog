from flask import Flask
from flask import render_template
from flask import request
from flask import jsonify
from flask import json 
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

@app.route('/teams')
def teams():
	teams = lade_teams()
	return teams

@app.route('/players/<int:team_id>')
def players(team_id):
	print(team_id)
	players = lade_players()
	result = {
		"players": []
	}
	for player in players["data"]:
		print(player)
		print(team_id)
		if int(player["team"]["id"]) == team_id:
			result["players"].append(player)
	result["players"] = result["players"][:15]
	return result

@app.route('/teams2')
def teams2():
	teams2 = lade_teams()
	return teams2

@app.route('/players2/<int:team_id>')
def players2(team_id):
	print(team_id)
	players2 = lade_players()
	result = {
		"players": []
	}
	for player in players2["data"]:
		print(player)
		print(team_id)
		if int(player["team"]["id"]) == team_id:
			result["players"].append(player)
	result["players"] = result["players"][:15]
	return result

if __name__ == "__main__":
	app.run(debug=True)