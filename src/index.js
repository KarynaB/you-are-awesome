// DO WHATEVER YOU WANT HERE


const createEnumerableProperty = (property)=>property;
const createNotEnumerableProperty = (property) => {
	Object.defineProperty(Object.prototype, property, {
		set: function (value) { property = value },
		get: function() { return property }
	})
	return property;
};
const createProtoMagicObject = () => {
    magicObj=()=> {};
	magicObj.__proto__ = new Function();
	magicObj.prototype = magicObj.__proto__;
	return magicObj;
};
var inc = 0;
Function.__proto__.valueOf = () => {
	return inc;
}
const incrementor = () => {
	inc++;
	return incrementor;
};
const asyncIncrementor = () => {};
const createIncrementer = () => {};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = () => {};
const getDeepPropertiesCount = () => {};
const createSerializedObject = () => {
	return new String(JSON.stringify({}));
};
const toBuffer = () => {};
const sortByProto = (mas) => {
	sort=(a, b) =>  a - b;
	mas.sort();
	return mas;
};


exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;
