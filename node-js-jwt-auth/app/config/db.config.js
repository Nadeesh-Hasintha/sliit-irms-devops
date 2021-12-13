module.exports = {
    HOST: "irms-db.c3jxacobzvhq.us-east-1.rds.amazonaws.com",
    USER: "root",
    PASSWORD: "Password",
    DB: "irms_db",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };