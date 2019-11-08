module.exports = function(input, opts){
	var exp = (((opts || {power: 2}).power) || 2)
	return (Math.pow(input, exp))
}