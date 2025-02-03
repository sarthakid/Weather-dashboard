# Project Title

This is a simple weather dashboard built with React.js. 
It allows users to search for a city and fetch real-time weather data from the OpenWeatherMap API.
The app displays the current weather, temperature, humidity, and wind speed, along with an appropriate weather icon.


## Features

1. 🌍 Search for weather by city name

2. 🏢 Displays current temperature, humidity, and wind speed

3. ☀️ Shows an icon representing the weather condition

4. 🔄 Auto-refreshes weather data every 30 seconds

5. 📌 Saves the last searched city in local storage



## Folder Structure

/weather_2
│── /public            
│── /src              
│   ├── /components    
│   ├── /context       
│   ├── /assets        
│   ├── App.js         
│   ├── index.js
│   ├── index.css
│   ├── App.css
│   ├── styles.css     
│── .gitignore         
│── README.md          
│── package.json       



## How to Run

1️⃣ Prerequisites : Node.js
                  npm or yarn


-Clone the Repository
git clone https://github.com/sarthakid/weather-dashboard.git
cd weather-dashboard
-Install Dependencies
npm install
-Start the Development Server
npm start

2️⃣OpenWeatherMap API Setup

-Sign up at OpenWeatherMap
-Get your free API key
-Create a .env file in the project root and add:
REACT_APP_WEATHER_API_KEY=your_api_key_here

-Restart the development server:
npm start



## Contributing
Contributing

-Fork the repository
-Create a new branch (git checkout -b feature-branch)
-Commit your changes (git commit -m "Added new feature")
-Push the branch (git push origin feature-branch)
-Open a Pull Request

## License
This project is open-source under the MIT License.
