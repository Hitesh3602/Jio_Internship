import requests

BASE_URL = "https://api.openweathermap.org/data/2.5/weather?"
API_KEY = "b7d1822c056f0fbe44157688e8605aa7"
CITY = "Mumbai"

url = f"{BASE_URL}q={CITY}&appid={API_KEY}"

response = requests.get(url)

if response.status_code == 200:
    weather_data = response.json()
    
    temperature = weather_data['main']['temp']
    humidity = weather_data['main']['humidity']
    wind_speed = weather_data['wind']['speed']
    
    print(f"City: {CITY}")
    print(f"Temperature: {temperature}K")
    print(f"Humidity: {humidity}%")
    print(f"Wind Speed: {wind_speed} m/s")
else:
    print(f"request fail please {response.status_code}")
    print(response.text)
