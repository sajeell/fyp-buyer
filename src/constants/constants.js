const environment = process.env.NODE_ENV || 'development'

let URL
if (environment === 'production') {
  URL = 'https://barganttic.herokuapp.com/'
} else if (environment === 'development') {
  URL = 'http://localhost:3000'
}

export default URL
