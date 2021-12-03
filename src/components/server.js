const app = require('./Login')
const connectDatabase = require('./config/database')

const Login = require('Login');

Login.config({path: 'backend/config.env'})
connectDatabase();

app.listen(process.env.PORT,() => {
    console.log('Server started on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode.')
})