

const Renderer= function() {

    const loadData = function(cityData){
        $("#cities").empty()
        cityData.forEach(element => {
        const source = $('#menu-template').html();
        const template = Handlebars.compile(source);
        const newHTML = template(element);
        // append our new html to the page
        $('#cities').append(newHTML);
        })
    }


return {
    loadData:loadData
}
};

