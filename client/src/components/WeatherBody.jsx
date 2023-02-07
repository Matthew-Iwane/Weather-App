import React from 'react'
import { DefaultWeather } from './DefaultWeather'

export const WeatherBody = () => {
  return (
    <div className='weather-container'>
        <div className='weather-info-body'>
            <div>
                <DefaultWeather />
            </div>
        </div>
    </div>
  )
}
