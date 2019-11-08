module.exports = function(input, opts){
	var exp = (((opts || {frequency: 2}).frequency) || 2)
	var firstState = (((opts || {polarity: 0}).polarity) || 0)
	var derivedFrq = 1/exp
	for (i=derivedFrq;i<=1;i = i + derivedFrq){
		if (firstState > 1){
			firstState = 0
		}
		if (input < i){
			return firstState
		}
		firstState++;
	}
}