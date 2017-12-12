function draw_neuralnet(data, svg, width, height){

	var color = {'in': 'rgb(151, 149, 149)', 'h1': 'rgb(106, 101, 198)', 'h2': 'rgb(85, 46, 119)', 'out':'rgb(179, 147, 69)' }
	var sankey = d3.sankey()
	    .nodeWidth(10)
	    .nodePadding(50)
	    .extent([[1, 1], [width - 1, height - 6]]);

	var link = svg.append("g")
	    .attr("class", "links")
	    .attr("fill", "none")
	    .attr("stroke", "#000")
	    .attr("stroke-opacity", 0.2)
	  .selectAll("path");

	var node = svg.append("g")
	    .attr("class", "nodes")
	    .attr("font-family", "sans-serif")
	    .attr("font-size", 10)
	  .selectAll("g");


	sankey(data);


    // console.log(data.nodes[0]);

	link = link
	    .data(data.links)
	    .enter().append("path")
	      .attr("d", d3.sankeyLinkHorizontal())
	      .attr("stroke-width", 3);
	       // function(d) { return Math.max(1, d.width); });


	node = node
	    .data(data.nodes)
	    .enter().append("g");

	node.append("rect")
	      .attr("x", function(d) { return d.x0; })
	      .attr("y", function(d) { return d.y0; })
	      // .attr('r', 20)
	      .attr("height", function(d) { return d.y1 - d.y0; })
	      .attr("width", function(d) { return d.x1 - d.x0; })
	      .attr("fill", function(d) { return color[d.type]; })
	      .attr("stroke", "#000");
}