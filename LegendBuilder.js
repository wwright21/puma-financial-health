// LEGEND BUILDER STARTS HERE------------------------------------------------
// CSS - CUT / PASTE TO HEAD AFTER THE FOLIUM TOOLTIPS
<style>

    .legend {
        color: #434343;
        padding: 6px 8px;
        font: 16px/18px Arial, Helvetica, sans-serif;
        background: rgba(255, 255, 255, 0.7);
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
        border-radius: 6px;
        border:2px solid grey; 
        bottom:5px; 
        left:5px; 
    }

    .legend h4 {
        margin-top: 2px;
        margin-bottom: -10px;
        color: #434343;
        font-size: 16px;
        }

    .legend i {
        width: 18px;
        height: 18px;
        float: left;
        margin-right: 8px;
        opacity: 0.8;
    }

</style>

// ADD TO BOTTOM OF SCRIPT FILE

// add legend for choropleth layer 1-----------------------------------------
function getColor1(d) {
    return d > 50.5  ? '#bd0026' :
           d > 42.8  ? '#f03b20' :
           d > 32.5  ? '#fd8d3c' :
           d > 27.9  ? '#feb24c' :
           d > 21.6  ? '#fed976' :
           '#ffffb2';
}

var legend_one = L.control({position: 'bottomleft'});  
    legend_one.onAdd = function (map_bfb4429249f531667da13bf8ebb52d3c) {

    var div = L.DomUtil.create('div', 'info legend'),
        grades = [0, 21.6, 27.9, 32.5, 42.8, 50.5],
        labels = ['<h4> <b>Share of Population<br>With Delinquent Debt</b> </h4>'],
        from, to;

    for (var i = 0; i < grades.length; i++) {
        from = grades [i];
        to = grades[i+1]-1;

    labels.push(
        '<i style="background:' + getColor1(from + 1) + '"></i> ' +
        from + (to ? '&ndash;' + to + '%' : '%+'));
        }
        div.innerHTML = labels.join('<br>');
        return div;
        };

legend_one.addTo(map_bfb4429249f531667da13bf8ebb52d3c);


// add legend for choropleth layer 2-----------------------------------------
function getColor2(d) {
    return d > 79.9  ? '#006d2c' :
           d > 71.2  ? '#31a354' :
           d > 63.5  ? '#74c476' :
           d > 55.0  ? '#a1d99b' :
           d > 40.4  ? '#c7e9c0' :
           '#edf8e9';
}

var legend_two = L.control({position: 'bottomleft'});  
    legend_two.onAdd = function (map_08268fcfdee5f3cc16dd4cb04e306110) {

    var div = L.DomUtil.create('div', 'info legend'),
        grades = [0, 40.4, 55.0, 63.5, 71.2, 79.9],
        labels = ['<h4> <b>Share of Population<br>With > $2,000 in Savings</b> </h4>'],
        from, to;

    for (var i = 0; i < grades.length; i++) {
        from = grades [i];
        to = grades[i+1]-1;

    labels.push(
        '<i style="background:' + getColor2(from + 1) + '"></i> ' +
        from + (to ? '&ndash;' + to + '%' : '%+'));
        }
        div.innerHTML = labels.join('<br>');
        return div;
        };

// add legend for choropleth layer 3-----------------------------------------
function getColor3(d) {
    return d > 725  ? '#54278f' :
           d > 704  ? '#756bb1' :
           d > 679  ? '#9e9ac8' :
           d > 649  ? '#bcbddc' :
           d > 618  ? '#dadaeb' :
           '#f2f0f7';
}

var legend3 = L.control({position: 'bottomleft'});  
    legend3.onAdd = function (map_08268fcfdee5f3cc16dd4cb04e306110) {

    var div = L.DomUtil.create('div', 'info legend'),
        grades = [0, 618, 649, 679, 704, 725],
        labels = ['<h4> <b>Median Credit Score</b> </h4>'],
        from, to;

    for (var i = 0; i < grades.length; i++) {
        from = grades [i];
        to = grades[i+1]-1;

    labels.push(
        '<i style="background:' + getColor3(from + 1) + '"></i> ' +
        from + (to ? '&ndash;' + to : '+'));
        }
        div.innerHTML = labels.join('<br>');
        return div;
        };



// Add and remove layers
map_08268fcfdee5f3cc16dd4cb04e306110.on('baselayerchange', function (eventLayer) {
    // adding first legend
    if (eventLayer.name === 'Share of Residents with Delinquent Debt') {
        this.removeControl(legend_two);
        this.removeControl(legend3);
        legend_one.addTo(this);
    } else if (eventLayer.name === 'Share of Households with Over $2,000 in Savings') {
        this.removeControl(legend_one);
        this.removeControl(legend3);
        legend_two.addTo(this);
    } else { 
        this.removeControl(legend_one);
        this.removeControl(legend_two)
        legend3.addTo(this);
        }
    });