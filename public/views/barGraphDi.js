 angular.module('crudModule')
     .controller('graphContlr', function($scope) {

     });
 angular.module('crudModule')
     .directive('barGraph', function() {

         function linkFunction(scope, element, attrs) {

             var margin = {
                     top: 20,
                     right: 20,
                     bottom: 30,
                     left: 70
                 },
                 width = 500 - margin.left - margin.right,
                 height = 300 - margin.top - margin.bottom;
             var x = d3.scale.ordinal()
                 .rangeRoundBands([0, width], .1);
             var y = d3.scale.linear()
                 .range([height, 0]);
             var xAxis = d3.svg.axis()
                 .scale(x)
                 .orient("bottom");
             var yAxis = d3.svg.axis()
                 .scale(y)
                 .orient("left");
             // .ticks(10, "%");
             var svg = d3.select(element[0]).append("svg")
                 .attr("width", width + margin.left + margin.right)
                 .attr("height", height + margin.top + margin.bottom)
                 .append("g")
                 .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
             scope.flag = true;
             d3.json("json/graphData.json", function(error, data) {
                 console.log(data);
                 if (error) throw error;
                 console.log(data);
                 x.domain(data.map(function(d) {
                     return d.name;
                 }));
                 y.domain([0, d3.max(data, function(d) {
                     return d.age;
                 })]);
                 svg.append("g")
                     .attr("class", "x axis")
                     .attr("transform", "translate(0," + height + ")")
                     .call(xAxis)
                 svg.append("g")
                     .attr("class", "y axis")
                     .call(yAxis)
                     .append("text")
                     .attr("transform", "rotate(-90)")
                     .attr("y", 6)
                     .attr("dy", ".71em")
                     .style("text-anchor", "end")
                     .text("age");
                 svg.selectAll(".bar")
                     .data(data)
                     .enter().append("rect")
                     .attr("class", "bar")
                     .attr("x", function(d) {
                         return x(d.name);
                     })
                     .attr("width", x.rangeBand())
                     .attr("y", function(d) {
                         return y(d.age);
                     })
                     .attr("height", function(d) {
                         return height - y(d.age);
                     });
             });




         }
         return {
             restrict: 'AE',
             bindToController: 'true',
             link: linkFunction
         }

     });
