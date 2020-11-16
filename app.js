const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

app.use(express.static('public'));
app.use(express.json());

const ratingRouter = require('./routers/rating');

app.use('/rating', cors(), ratingRouter);

app.get('/', cors(), function (req, res) {
  res.send('<h1>No way.</h1>\
  <h5>Let\'s play to <a href="https://archylex.github.io/gem-puzzle/gem-puzzle/">gem puzzle</a>.</h5>')
})

app.listen(process.env.PORT || 3000, 
	() => console.log('Server is running...'));
