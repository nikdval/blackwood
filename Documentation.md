Grey fleet to green fleet
// similar to https://github.com/bonniee/react-flask
/*Set up virtual environment*/
1. pip install virtualenv (if you don't have it)
2. virtualenv ve_blackwood
3. source [path to ve]/bin/activate
(source /home/scene/Desktop/Scene-PC/ve_blackwood/bin/activate)

/*install packages*/
4. cd (go to the saved folder greewood)
5. pip install -r requirements.txt

/*alternative manually*/
pip install flask-socketio
pip install git+https://github.com/Pithikos/python-websocket-server
pip install websocket-server

/*React instalation*/
6. npm install -g webpack
7. npm install

//open react
9. cd react-flask
10. npm start or npm run dev (developer mode)
11. open http://localhost:8080/ in the browser. an error should occure because the websocket server isn't opened

//open websocket
12. Open new terminal and activate virtual environment
13. cd (to the greenwood folder)
14. python socket_time_test10.py

//open webpack --watch
15. Open new terminal
16. Open vistual eneviroment
17. cd (to the react-flask folder)
18. webpack --watch
