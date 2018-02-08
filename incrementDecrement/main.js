var myObject = {
	count: 0,
	decrease: function() {
		return console.log(this.count--);
	},
	increase: function() {
		return console.log(this.count++);
	}
}

myObject.decrease();
