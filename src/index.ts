import axios from 'axios';

// Définir une interface pour le type de réponse attendu
interface WeatherResponse {
    weather: { description: string }[];
    main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        humidity: number;
    };
    name: string;
}

const apiKey: string = ;
const city: string = 'Goma';
const url: string = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

axios.get<WeatherResponse>(url)
    .then(response => {
        const data = response.data;
        console.log(`City: ${data.name}`);
        console.log(`Temperature: ${data.main.temp}°C`);
        console.log(`Weather: ${data.weather[0].description}`);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
