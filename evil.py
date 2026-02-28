from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/collect')
def collect():
    info = request.args.get('info')
    if info:
        print("\n" + "="*30)
        print("[!]new data:")
        print(info)
        print("="*30 + "\n")
    return "Received", 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)