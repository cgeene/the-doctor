'use strict';

const {curry} = require('ramda');
const rp = require('request-promise');
const authHeader = require('./authHeader');
const baseUrl = require('./baseUrl');

module.exports = curry(async (path, env, body) => {
  let options = {
    json: true,
    headers: {
        Authorization: authHeader(env),
    },
    url: baseUrl(path, env),
    method: "POST",
    body: body
  };
  try {
    return (await rp(options));
  } catch (err) {
    console.log(err);
  }
});