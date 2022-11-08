from flask import Flask
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)

@app.route("/")
def index():
    return("<p>Hello, World!</p>")

@app.route("/query_github/<string>")
def query_github(string):
    res = requests.get("https://api.github.com/search/repositories?q={}".format(string))
    data = res.json()['items'][:5]
    data = [ { "name": i['name'], "url": i['html_url'] } for i in data ]
    return data

if __name__=="__main__":
    app.run(host='0.0.0.0',debug=True)