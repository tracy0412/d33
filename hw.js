function linetest() { 
var width = 1024;
var height = 768;
var ctrl = d3.select(".content").append("svg").attr("width", width).attr("height", height);
d3.csv("https://pollyhsia.github.io/D3_class2/flower.csv", 
  function(data)
  {
    var ln = data.length;
    console.log(data);
    var maxy = d3.max(data, function(d){ return d.Y; });
    var lines = d3.line().x(function(d,i){return i*(width/ln);}).y(function(d){return height-d.Y*(height/maxy)*0.7;});
    ctrl.append("path").data([data]).attr("d", lines).attr("stroke", "red").attr("fill", "none");
  }

);
}