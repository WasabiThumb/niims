module.exports = function(input, opts){
	var exp = (((opts || {frequency: 2}).frequency) || 2)
	var out = input*exp
	while (out > 1){
		out = out - 1
	}
	return out
}