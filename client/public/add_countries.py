import requests
import json

API_URL = "http://localhost:5000/api/country"

def load_data():
    with open("all.json", "r", encoding="utf-8") as file:
        data = json.load(file)
        # print(json.dumps(data[0], indent=2))

        for d in data:
            add_country(d)



def add_country(countryData):
    try:
        country = {
            'IsoA2': countryData['alpha-2'],
            'IsoA3': countryData['alpha-3'],
            'Numeric': countryData['country-code'],
            'Name': countryData['name'],
            'Region': countryData['region'],
            'Subregion': countryData['sub-region']
        }
        response = requests.post(API_URL, json = country)

        if response.status_code == 201:
            print("Country added successfully:", response.json())
        else:
            print(f"Error: {response.status_code}, {response.json()}")
    except requests.exceptions.RequestException as e:
        print("Request failed:", e)

load_data()