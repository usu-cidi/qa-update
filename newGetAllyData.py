import requests
import json
import dotenv
import os

dotenv.load_dotenv(dotenv.find_dotenv())

JWT = os.environ.get('JWT')
CLIENT_ID = os.environ.get('CLIENT_ID')

headers = {
    'Authorization': f'Bearer {JWT}',
}

params = {
    'groupBy': 'term',
}

baseURL = f'https://performance.ally.ac/api/v1/{CLIENT_ID}/'

response = requests.get(f'{baseURL}reports/institution', params=params, headers=headers)
dataJson = response.json()
print(json.dumps(dataJson, indent=2))

