from flask import Flask, render_template
from flask_socketio import SocketIO
import os

app = Flask(__name__,static_url_path = "", static_folder = "static")
app.config['SECRET_KEY'] = 'cloudsolariscool!'
socketio = SocketIO(app)

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    socketio.run(app,host='0.0.0.0', port=port, debug=False)
