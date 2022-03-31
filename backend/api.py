import time
from flask import Flask
from flask_cors import *

app = Flask(__name__)
CORS(app, supports_credentials= True)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/time/', methods=['GET'])
@cross_origin(supports_credentials=True)
def get_current_time():
    return {'time': time.time()}

if __name__=="__main__":
    app.run(host='0.0.0.0', port=5000)