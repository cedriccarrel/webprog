from flask import Flask, render_template
import json

app = Flask(__name__)


@app.route('/')
#json laden für Ausgaben, Userdata
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

def index():
	return render_template('/index.html')



if __name__ == "__main__":
	app.run(debug=True, port=5000)