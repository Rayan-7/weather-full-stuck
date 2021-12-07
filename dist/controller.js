
const city=new City()
const renderer=Renderer()

$("#searchCity").on("click", async function () {

   await city.getCityData($("#cityId").val())
   let cityData=city.getData();

   renderer.loadData(cityData)

})

$("#cities").on("click",".addCity",function () {
    city.addData(getCityDatafromDOM($(this)))
})

$("#cities").on("click",".removeCity",function () {
    city.removeCity($(this).closest(".row").find("h1").text())
    load();
})



function getCityDatafromDOM(cityDOM) {
    let name = cityDOM.closest(".row").find("h1").text();
    let temperature = cityDOM.closest(".row").find("h2").text();
    let condition = cityDOM.closest(".row").find("h3").text();
    let conditionPic = cityDOM.closest(".row").find("img").attr("src");
    temperature = temperature.slice(0, -1);
    let cityDat = {
      name: name,
      temperature: temperature,
      condition: condition,
      conditionPic: conditionPic,
    };
    return cityDat;
  }

async function load(){
    await city.getDataFromDB()
    let cityData=city.getData();
    renderer.loadData(cityData)
}
load();


