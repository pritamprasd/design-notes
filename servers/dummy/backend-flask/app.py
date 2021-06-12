from flask import Flask

app = Flask(__name__)


@app.route("/hello")
def index():
    return {
        'status': 200,
        'message': "Hello Staranger"
    }
