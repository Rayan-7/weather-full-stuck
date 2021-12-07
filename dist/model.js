class City {
    constructor(){
     
         this.cityDataArray=[];
    
    }

    getDataFromDB = async function(){
            this.cityDataArray= await $.get(`/cities`)
       
    }

    getCityData= async function(cityName){
        let newCity = await $.get(`/city/${cityName}`);

        this.cityDataArray.push(newCity)
    }
    getData(){
        return this.cityDataArray;
    }

    addData(cityData){
        $.post('/city',cityData, function (req, res) {
            alert("add success")
        })
    }
    removeCity(cityName){
        $.ajax({
            url: `/city/${cityName}`,
            type: 'DELETE',
            success: function(result) {
                // Do something with the result
            }
        });
    }
}



