const notValidProvinces = [
	'Recovered',
	'Diamond Princess',
	''
];

const isNotValidProvince = province => notValidProvinces.includes(province);

module.exports = { isNotValidProvince };