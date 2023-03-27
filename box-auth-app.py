from flask import Flask, request, jsonify, render_template, flash, redirect, url_for
import dotenv
from boxsdk import Client, OAuth2
import os
import pandas as pd
import io

app = Flask(__name__)


@app.route('/', methods=['GET', 'POST'])
def loginBox():

    oauth = OAuth2(
        client_id=os.environ.get('BOX_CLIENT_ID'),
        client_secret=os.environ.get('BOX_SECRET'),
        store_tokens=store_tokens,
    )

    auth_url, csrf_token = oauth.get_authorization_url('http://localhost:8000/oauth/callback')
    return render_template('loginBox.html', auth_url=auth_url, csrf_token=csrf_token)


def store_tokens(access_token: str, refresh_token: str) -> bool:
    """
    Store the access and refresh tokens for the current user
    """

    global accessTok
    accessTok = access_token
    global refreshTok
    refreshTok = refresh_token

    return True


@app.route('/oauth/callback')
def oauth_callback():
    code = request.args.get('code')
    state = request.args.get('state')
    error = request.args.get('error')
    error_description = request.args.get('error_description')

    oauth = OAuth2(
        client_id=os.environ.get('BOX_CLIENT_ID'),
        client_secret=os.environ.get('BOX_SECRET'),
        store_tokens=store_tokens
    )

    # TODO: verify csrf
    # assert state == csrf_token

    access_token, refresh_token = oauth.authenticate(code)

    client = Client(oauth)
    me = client.user().get()
    print(f'My user info is {me}')

    if error == 'access_denied':
        msg = 'You denied access to this application'
    else:
        msg = error_description

    if msg != None:
        return render_template('loginBox.html', msg=msg)

    return redirect(url_for('landing', content=me.id))


@app.route('/landing', methods=['GET', 'POST'])
def landing():
    # GET
    if request.method == 'GET':
        return render_template('landing.html', box_smth=request.args.get('content'))

    if request.method == 'POST':
        fileId = request.form['id']

        auth = OAuth2(
            client_id=os.environ.get('BOX_CLIENT_ID'),
            client_secret=os.environ.get('BOX_SECRET'),
            access_token=accessTok,
            refresh_token=refreshTok
        )
        client = Client(auth)

        file_info = client.file(fileId)
        some_bytes = file_info.get().content()
        toread = io.BytesIO()
        toread.write(some_bytes)  # pass your `decrypted` string as the argument here
        toread.seek(0)  # reset the pointer

        boxData = pd.read_csv(toread)

        return redirect(url_for('landing', content=boxData))

    return render_template('landing.html', box_smth=request.args.get('content'))


if __name__ == '__main__':
    app.run(port=8000, debug=True, host="localhost")

    dotenv.load_dotenv(dotenv.find_dotenv())
