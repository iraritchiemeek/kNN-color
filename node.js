function Node (object) {
	for (var key in object)
    {
        this[key] = object[key];
    }
}

Node.prototype.measureDistances = function(area_range_obj, rooms_range_obj) {
	var rooms_range = rooms_range_obj.max - rooms_range_obj.min
	var area_range = area_range_obj.max - area_range_obj.min

	$.each(this.neighbors, function(index, neighbor) {
		var delta_rooms = neighbor.rooms - this.rooms
		delta_rooms = (delta_rooms) / rooms_range

		var delta_area = neighbor.area - this.area
		delta_area = (delta_rooms) / area_range

		neighbor.distance = Math.sqrt(delta_rooms * delta_rooms + delta_area * delta_area)
	})
};