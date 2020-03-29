const invalidProvinces = [
	'',
	'Recovered',
	'Diamond Princess',
	'Grand Princess'
];

const isNotValidProvince = province => invalidProvinces.includes(province);

module.exports = { isNotValidProvince };