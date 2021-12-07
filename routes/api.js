const express = require('express')
const moment = require('moment')
const router = express.Router()
const City = require('../model/city.js')
const urllib  = require('urllib');
router.use(express.json())
router.use(express.urlencoded({
    extended: false
}))



router.get('/city/:cityName', function (request, response) {

    let cityName=request.params.cityName;

    urllib.request(`api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=816e597f221b3442ec7c70f16f3db0c3&units=metric`,
        function (err, cityData, res) {
            if (err) {
                throw err; // you need to handle error
            }

            // data is Buffer instance
            
            cityData=JSON.parse(cityData.toString()) 
            const cityObj = new City({
                name: cityData.name,
                temperature: cityData.main.temp,
                condition : cityData.weather[0].description,
                conditionPic : `http://openweathermap.org/img/wn/${cityData.weather[0].icon}.png`
              });
            //cityObj.save()
            response.send(cityObj)

        });

})


router.get('/cities', function (request, response) {
    
    City.find({}, function (err, reviews) {
        response.send(reviews)
    })
})

router.post('/city', function (request, response) {
    let cityData=request.body
    
    cityData = new City(cityData)
    cityData.save();
    response.end()

})

router.delete('/city/:cityName', function (request, response) {
    City.deleteOne({ name: request.params.cityName }).then(function(){
        response.end()
})})

module.exports = router