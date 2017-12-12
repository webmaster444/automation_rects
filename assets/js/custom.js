var borderRadius = '3px';
//Append svg
var svg = d3.select("#svg_wrapper").append("svg")
    .attr('viewBox', '0 0 1000 500')
    .append("g")
    .attr("transform", "translate(30,10)");

var width = 960, height = 480;

var tenthW = width / 10;
var fifthW = width / 5;
var tenthH = height / 10;
var fifthH = height / 5;
//Wrapper Rect
var rect = svg.append("rect")    
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", width)
    .attr("height", height)
    .attr('stroke', '#000');


    svg.append('rect').attr('x',3).attr('y',3).attr('width',tenthW).attr('height',tenthH).attr('stroke','#000');