module.exports = {
    HOST: '100.0.99.175',
    PORT: '3306',
    USER: 'root',
    PASSWORD: 'HF@608608',
    DB: 'NFT_Store',
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
};