const  express = require('express')
const app = express();
const porta = 3000;
const {api} = require('./src/services/index')

app.set('view engine', 'ejs');
app.set('views', './src/view');

app.use(express.static('public'));


app.use(express.urlencoded({
    extended: true
}))

app.use(express.json());

app.get('/', (req,res) => {

        res.render('home', {dados: []})

})


app.post('/', async(req,res) => {
    const {data} = await api.get(`/?name=${req.body.nome}`)
    console.log(req.body)
    console.log(data)

    res.render('home', {dados: [data]})

})


app.listen(porta, () => console.log(`Ouvindo na porta ${porta}`) );
