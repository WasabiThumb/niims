module.exports = function(input, opts){
	var exp = (((opts || {frequency: 0.5}).frequency) || 0.5)
	return Math.sin(input*Math.PI*exp)
}