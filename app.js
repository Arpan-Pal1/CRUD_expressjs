import express from 'express';
import {addUser, getAllUser, deleteUser, updateUser, populateUpdateTable} from './src/controls/user.controler.js'
import { User } from './src/models/user.model.js';
import  path  from 'path';
import bodyParser from 'body-parser'

const app = express()
app.use(express.json({extended : true}))
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs')

const __dirname = path.resolve()

app.get('/', getAllUser)

app.get('/adduser', (req, res)=>{
    res.render('adduser', {link : 'adduser', user : null})
})
.post('/adduser', addUser)

// app.get('/update/:id', (req, res)=>{
//     const id = req.params.id
//     res.render('adduser', {link : `update/${id}`})
// })
app.get('/update/:id', populateUpdateTable)
.post('/update/:id', updateUser)

app.get('/delete/:id', deleteUser)


export {app}