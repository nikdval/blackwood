from flask import Flask, render_template
from flask_socketio import SocketIO

app = Flask(__name__,static_url_path = "", static_folder = "static")
app.config['SECRET_KEY'] = 'cloudsolariscool!'
socketio = SocketIO(app)

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    socketio.run(app,host='localhost',port=8080,debug=True)
