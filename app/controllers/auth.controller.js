const { db } = require("../models");
const Op = db.Sequelize.Op;
const jwt = require('jsonwebtoken');
const config = require("../config/jwt.config");
const log4js = require ('log4js');

const logger = log4js.getLogger ();
logger.level = 'error';

const nft_store_user = db.nft_store_user;

exports.Login = async (req, res) => {

    try{
        await nft_store_user.findOne({
            where: { 
                UserName: req.body.username,
                Password: req.body.password,
            }
        }).then(data => {

            const payload = {
                ac: data.dataValues.UserName,
                passwd: data.dataValues.password
            }

            const token = jwt.sign(payload, config.jwt.secret, config.jwt.options);

            const reuturn_data = {
                isSuccess: true,
                token: token,
            }

            res.send(reuturn_data);

        }).catch((error)=>{
            logger.error(error.message);
            res.status(500).json({ error: error.message});
        });

    }catch(err){
        logger.error(err.message);
        res.status(500).json({ error: err.message})
    };

}