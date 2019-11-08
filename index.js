// niims base script
const fs = require("fs");
knownAddons = ["linear", "parabolic", "reflective", "sawtooth", "sine", "square", "hermite"];
niims = [];

niims.rebase = function(float, min, max){
	var tmp = float*(Math.abs(max)+(min*-1))
	return (tmp)+min;
}

niims.debase = function(float, min, max){
	tempMax = max-min;
	tempFloat = float-min;
	return (Math.abs(tempFloat)/tempMax);
}

niims.load = function(mod){
	if (typeof mod == "string"){
		tmpfunc = require("./modules/" + mod.toLowerCase() + ".js");
		function opfunc(current, min, max, properties){
			var flt = niims.debase(current, (min || 0), (max || 1));
			var res = tmpfunc(flt, properties);
			return niims.rebase(res, (min || 0), (max || 1));
		}
		this[mod.toLowerCase()] = opfunc;
		return this
	} else {
		knownAddons.forEach(ad => {
			niims.load(ad)
		})
		return this
	}
}

niims.require = function(req){
	if (typeof req == "string"){
		this.concat(require(req).load())
	} else if (typeof req == "object") {
		this.concat(req)
	}
}

module.exports = niims;
