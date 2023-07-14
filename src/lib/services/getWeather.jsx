import axios from "axios";
import apiKey from './../assets/apikey';

const getWeather = axios.create({
  baseURL: 'http://api.weatherapi.com/v1/current.json',
  params: {
    key: apiKey,
    q: 'London',
    aqi: 'no',
  }
})

export default getWeather;