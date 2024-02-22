const app = require('./app');
const config = require('./config/config')

const port =config.app.port;
app.listen(port, (req, res)=>{
    console.log(`Server is running successfully at http://localhost:${port}`);
})