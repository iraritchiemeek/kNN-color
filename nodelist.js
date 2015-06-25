function NodeList (k) {
	this.nodes = {]
	this.k = k
}

NodeList.prototype.add = function(node) {
	this.nodes.push(node)
};

NodeList.prototype.determineUnkown = function() {
	
	this.calculateRanges()

	$.each(this.nodes, function(index, current_node){
		if (!current_node.type){
			current_node.neighbors = []
			$.each(this.current_nodes, function(index, current_node){
				if(!current_node.type)
					continue
				current_node.neighbors.push(new Node(current_node))
			})
			current_node.measureDistances(this.areas, this.rooms)
			current_node.sortByDistance()
			console.log(current_node.guessType(this.k))
		}
	})
};

NodeList.prototype.calculateRanges = function() {
	this.areas = {min: 1000000, max: 0}
	this.rooms = {min: 1000000, max: 0}

	$.each(this.nodes, function(node, index){

	})
};