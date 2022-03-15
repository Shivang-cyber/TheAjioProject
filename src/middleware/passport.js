const passport = require('passport')
require('dotenv').config()
const GoogleStrategy = require('passport-google-oauth2').Strategy
const {Client} = require("../routes/client.model")
const {v4:uuid} = require("uuid")
const {newTokens} = require("../middleware/auth")

passport.use(new GoogleStrategy({
    clientID : process.env.GOOGLE_CLIENT_ID,
    clientSecret : process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: 'http://localhost:3005/auth/goofle/callback',
    passReqToCallback:true, 
},
async function (request, accessToken, refreshToken,profile,done) {
    console.log(55555555555555555555555555555);
    const mail = profile?.json?.email
    const name = profile?.json?.name
    let client
    try {
        client = await Client.findOne({mail}).lean().exec()
        if(!client) client = await Client.create({name:name,mail:mail,password:uuid()})
        const token = newTokens(client)
        return done(null,{client,token})
    } catch (err) {
        console.log(err);
    }
}
))

module.exports = passport