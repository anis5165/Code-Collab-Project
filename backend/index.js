const express = require('express');
const app = express();
const port = 5165;
const cors = require('cors')



const UserRouter = require('./routers/user')
const ContactRouter = require('./routers/contact')
const projectRouter = require('./routers/project')
const fileuploadRouter = require('./routers/fileupload')

app.use(express.json())
app.use(cors({
    origin: ['http://localhost:3001']
}))
app.use('/contact', ContactRouter)
app.use('/user', UserRouter)
app.use('/project', projectRouter)
app.use('/fileupload', fileuploadRouter)


app.listen(port,() => {
    console.log(`server is running on port ${port}`)
})