var myObject = {
	count: 0,
	decrease: function() {
		console.log(this.count--);
	},
	increase: function() {
		console.log(this.count++);
	}
}

myObject.decrease();
