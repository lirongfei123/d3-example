var d3 = require("../");
var x = d3.scaleTime().rangeRound([0, 1000]);
x.domain([1, 10]);
console.log(x(3)); // 222

var x = d3.scaleTime().range([0, 1000]);
x.domain([1, 10]);
console.log(x(3)); // 222.2222222222222