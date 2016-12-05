const winston  = require('winston');
require('winston-loggly-bulk');

winston.add(winston.transports.Loggly, {
  inputToken: process.env.LOGGLY_AUTH_TOKEN,
  subdomain: "Express-Mongo-App",
  tags: ["Docker", "Express", "Mongo", "mrosata"],
  json:true
});

function winstonLog(level, message) {
  return winston.log(level, message);
}
winstonLog.info = function winstonInfo(...logs) {
  return winston.log.call(winston, 'info', ...logs);
};

module.exports = winstonLog;