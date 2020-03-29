const prod = process.env.NODE_ENV === 'production';

module.exports = {
  'process.env.NODE_ENV' : prod ? 'production' : 'development',
  'process.env.BASE_URL' : prod ? 'https://www.covidtracking.org' : 'http://localhost:3000'
}