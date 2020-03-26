const prod = process.env.NODE_ENV === 'production';

module.exports = {
  'process.env.NODE_ENV' : prod ? 'production' : 'development',
  'process.env.PROVINCE_COUNT_API_KEY': '00d0bf270cmsh463fd292fde4756p171705jsnbffc04b65774',
  'process.env.COUNTRY_COUNT_API_KEY': '00d0bf270cmsh463fd292fde4756p171705jsnbffc04b65774'
}