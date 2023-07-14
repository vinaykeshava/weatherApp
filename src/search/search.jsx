import React, { useEffect, useState } from 'react'
import { TextField, Grid, Button, Box, CircularProgress } from '@mui/material';
import MapView from '../lib/components/mapView'
import getWeather from '../lib/services/getWeather'
import WeatherCard from '../lib/components/weatherInfo';
import useStyles from './search-styles'

export default function Search() {

    const [query, setQuery] = useState("");
    const [viewMap, setViewMap] = useState(false);
    const [weather, setWeather] = useState({})
    const [loading, setLoading] = useState(false);

    const { classes } = useStyles();

    const handleQueryChange = (event) => {
        setQuery(event.target.value);
    }

    const handleSubmit = () => {
        getWeather.get('', { params: { q: query } })
            .then((response) => {
                console.log(response.data);
                setQuery("");
                setWeather({ ...response.data })
                setViewMap(true);
            })
            .catch(error => alert(error))
    }

    if (loading) {
        return (
            <Grid container>
                <Grid item>
                    <CircularProgress />
                </Grid>
            </Grid>
        )
    } else {
        return (
            <Grid container spacing={2} className={classes.root}>
                <Grid item>
                    <Box className={classes.box}>
                        <TextField
                            value={query}
                            label="Search"
                            placeholder='Eg: London'
                            onChange={handleQueryChange}
                            className={classes.textField}
                        />
                        <Button variant='contained' type='submit' onClick={handleSubmit}>Search</Button>
                    </Box>
                </Grid>
                {viewMap &&
                    <Grid item>
                        <Box className={classes.mapBox}>
                            <MapView position={[weather.location.lat, weather.location.lon]} />
                            <WeatherCard weather={weather} />
                        </Box>
                    </Grid>
                }
            </Grid>
        )
    }
}
