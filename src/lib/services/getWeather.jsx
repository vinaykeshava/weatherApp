import axios from "axios";

const getWeather = axios.create({
    baseURL: `http://api.weatherapi.com/v1/current.json`
})