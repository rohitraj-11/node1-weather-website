const request = require('request')

const forecast = (latitude,longitude,callback) =>{
    const url = 'http://api.weatherstack.com/current?access_key=b6b28850ca33294714acdc25dc1b3998&query=' + latitude + ',' + longitude + '&units=f'
    
    request({ url, json: true }, (error, {body} = {}) => {
        if (error) {
            callback('Unable to connect to weather service!',undefined) 
        } else if (body.error) {
            callback('Unable to find location',undefined)
        } else {
            callback(undefined,`${body.current.weather_descriptions[0]}. The temperature is ${body.current.temperature} fahrenheit and the humidity is ${body.current.humidity}.`)   
        }
    })
}

module.exports = forecast