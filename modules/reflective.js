module.exports = function(input, opts){
	var exp = (((opts || {frequency: 2}).frequency) || 2)
	var out = input*exp
	var direction = 1
	var step = 1/exp;
	for (i=step;i <= 1;i = i + step){
		if (input <= i){
			while (out > 1){
				out = out - 1;
			}
			var tmp = (out*direction)
			if (direction < 0){
				tmp = tmp + 1
			}
			return tmp;
		}
		direction = (-direction);
	}
	return 0
}