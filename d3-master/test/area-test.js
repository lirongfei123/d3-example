// 设置面积生成器 包含 x 坐标， x坐标对应的顶部值和底部值，面积可以是一条的嘛
// 设置x，顶部值
var area = d3.area()
    .x(function (d) { return x(d.date); })
    .y1(function (d) { return y(d.close); });
// 设置底部值
var y = d3.scaleLinear()
    .rangeRound([height, 0]);
y.domain([0, d3.max(data, function (d) { return d.close; })]);
area.y0(y(0));
// 根据每个点，点成面，画出面积图
g.append("path")
    .datum(data)
    .attr("fill", "steelblue")
    .attr("d", area);