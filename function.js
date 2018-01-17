numberFilter();

function numberFilter() {

	var arr = [];

	for(i = 0; i <= 99; i++) {

		arr[i] = i + 1;

		if((arr[i] % 5 == 0) && (arr[i] % 3 == 0)) {
			arr[i] = arr[i] + "-FizzBuzz";
		} else if((arr[i] % 5 == 0) && (arr[i] % 3 != 0)) {
			arr[i] = arr[i] + "-Buzz";
		} else if(arr[i] % 3 == 0) {
			arr[i] = arr[i] + "-Fizz";
		}

	}
	console.log(arr);
}