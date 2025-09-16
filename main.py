from flask import render_template, jsonify, Flask

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("main.html")