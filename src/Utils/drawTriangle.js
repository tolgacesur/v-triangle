const d3 = require("d3")

const newTriangle = (points,color,id) => {

    const scale = 100/points.by;

    /**
     *  Drawing polygon for triangle with the points
     */

    d3
    .select(id)
    .selectAll("svg")
    .remove(); // remove old svg triangle data

   d3
    .select(id)
    .append("svg")
    .append("polygon")
    .attr("class", function(d) {
      return "d3triangle";
    })
    .attr(
      "points",
      `${points.ax} ${points.ay}, ${points.bx} ${points.by}, ${points.cx} ${points.cy}`
    )
    .style("fill", `${color}`)
    .transition()
    .attrTween("transform", function(d, i, a) {
      return d3.interpolateString(a, `scale(${scale})`);
    });

}

export default {newTriangle}