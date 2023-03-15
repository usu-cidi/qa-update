from pyngrok import ngrok
from flask import Flask, request, jsonify
import dotenv

app = Flask(__name__)


def connect(port, protocol="http") -> str:
    """
    Create a new ngrok tunnel
    :param port: the tunnel local port
    :param protocol: the protocol to use
    :return: the ngrok url
    """
    return ngrok.connect(port, protocol)


@app.route('/', methods=['GET', 'POST'])
def helloWorld():
    # GET
    if request.method == 'GET':
        return "<p>This is USU's QA update application. I don't do much here, try me out on monday.com!</p>"

    # POST
    data = request.get_json()
    # print(data)

    if 'challenge' in data:
        print("The challenge is here!!")
        challenge = data['challenge']
        return jsonify({'challenge': challenge}), 200

    if 'event' in data:
        print(f"Board id to update: {data['event']['boardId']}")
    return "Thank you!", 200


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)
    connect(8080)

    dotenv.load_dotenv(dotenv.find_dotenv())
