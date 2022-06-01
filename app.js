const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const csurf = require('csurf');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const routes = require('./routes');
const app = express();

app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.json());
app.use(helmet({
    contentSecurityPolicy: false
}));

// Set the _csrf token and create req.csrfToken method
app.use(
    csurf({
        cookie: {
            httpOnly: true,
        },
    })
);

app.use(routes);


app.listen(process.env.PORT || 3000);