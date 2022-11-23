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
    legend_one.onAdd = function (map_c8bfb8545f8726bb666cc5079e490204) {

    var div = L.DomUtil.create('div', 'info legend'),
        grades = [0, 21.6, 27.9, 32.5, 42.8, 50.5],
        labels = ['<h4> <b>Share of Population<br>With Delinquent Debt</b> </h4>'],
        from, to;

    for (var i = 0; i < grades.length; i++) {
        from = grades [i];
        to = grades[i+1]-1;

    labels.push(
        '<i style="background:' + getColor1(from + 1) + '"></i> ' +
        from + (to ? ' &ndash; ' + to + '%' : '%+'));
        }
        div.innerHTML = labels.join('<br>');
        return div;
        };

legend_one.addTo(map_c8bfb8545f8726bb666cc5079e490204);


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
    legend_two.onAdd = function (map_c8bfb8545f8726bb666cc5079e490204) {

    var div = L.DomUtil.create('div', 'info legend'),
        grades = [0, 40.4, 55.0, 63.5, 71.2, 79.9],
        labels = ['<h4> <b>Share of Population<br>With > $2,000 in Savings</b> </h4>'],
        from, to;

    for (var i = 0; i < grades.length; i++) {
        from = grades [i];
        to = grades[i+1]-1;

    labels.push(
        '<i style="background:' + getColor2(from + 1) + '"></i> ' +
        from + (to ? ' &ndash; ' + to + '%' : '%+'));
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
    legend3.onAdd = function (map_c8bfb8545f8726bb666cc5079e490204) {

    var div = L.DomUtil.create('div', 'info legend'),
        grades = [0, 618, 649, 679, 704, 725],
        labels = ['<h4> <b>Median Credit Score</b> </h4>'],
        from, to;

    for (var i = 0; i < grades.length; i++) {
        from = grades [i];
        to = grades[i+1]-1;

    labels.push(
        '<i style="background:' + getColor3(from + 1) + '"></i> ' +
        from + (to ? ' &ndash; ' + to : '+'));
        }
        div.innerHTML = labels.join('<br>');
        return div;
        };



// Add and remove layers
map_c8bfb8545f8726bb666cc5079e490204.on('baselayerchange', function (eventLayer) {
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