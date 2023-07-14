import React from 'react';
import propTypes from 'prop-types'
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import useStyles from './weatherInfo-styles'

export default function WeatherCard({ weather }) {
    const {
        location,
        current: {
            temp_c,
            condition: { icon, text },
            wind_kph,
            humidity,
            precip_mm,
        },
    } = weather;

    const { classes } = useStyles();

    return (
        <Card className={classes.root}>
            <CardMedia
                component="img"
                alt="Weather Icon"
                height="140"
                image={`http:${icon}`}
            />
            <CardContent>
                <Typography variant="h6" component="div">
                    {location.name}, {location.country}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {text}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Temperature: {temp_c}°C
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Wind Speed: {wind_kph} km/h
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Humidity: {humidity}%
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Precipitation: {precip_mm} mm
                </Typography>
            </CardContent>
        </Card>
    );
};

WeatherCard.prototype = {
    weather: propTypes.object,
}