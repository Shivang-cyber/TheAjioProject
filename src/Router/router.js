const fp = require('fastify-plugin')
const path = require('path')
const {
  getProducts,
  getCart,
  addProducts,
  getProdz,
  getCloset,
  getPayed,
  getChecked
} = require('../controllers/Product.controller')
const {
  getClient,
  findClient,
  updateOneClient,
  addToCart,
  addToLiked,
  purchaseAll,
} = require('../controllers/client.controller')

const {register,login} = require("../controllers/auth.controller")
const authenticate = require('../middleware/auth')
//RED


module.exports = fp(function productRoutes(fastify, options, done) {

  fastify.get('/', (req, reply) => {
    if(req.user?.provider==="google"){
      // console.log("->",req.user);
    }
    reply.view('/src/view/index.ejs', { text: 'texdat',req:req })})

  fastify.get('/catologue',getProdz)
  fastify.get('/cart',getCart)
  fastify.get('/one',findClient)
  fastify.get('/closet',getCloset)
  fastify.get('/deli',getChecked)
  fastify.get('/pay',getPayed)

  fastify.get('/prod',getProducts)
  fastify.post('/pr', addProducts)
  //red zone
fastify.post("/register",register)
fastify.post("/log",login)
  //red zone
  fastify.patch('/cl/:id', updateOneClient)
  fastify.get('/cla/:id',{preHandler:[authenticate]}, addToCart)
  fastify.get('/cll/:id',{preHandler:[authenticate]}, addToLiked)

  fastify.get('/cl',{preHandler:[authenticate]}, getClient)
  fastify.get('/pur',{preHandler:[authenticate]}, purchaseAll)
  done() 
})
