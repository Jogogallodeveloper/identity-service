const express = require('express');
const persons = require('./person.routes.js');

module.exports = app => {
    app.use(
        express.json(),
        persons,
    );
}