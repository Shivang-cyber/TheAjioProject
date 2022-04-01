const fp = require('fastify-plugin')
const path = require('path')
const {
  getProducts,
  getCart,
  addProducts,
  getAllProduct,getProdz,
  updateProducts,
} = require('../controllers/Product.controller')
const {
  getClient,
  addClient,
  getAllClient,
  updateOneClient,
  addToCart,
  purchaseAll,
} = require('../controllers/client.controller')
const {
  getAllComment,
  addComment,
  updateOneComment,
  deleteOneComment,
} = require('../controllers/comment.controller')
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

  fastify.get('/prod',getProducts)
  // fastify.get('/pr/:id', getProducts)
  fastify.post('/pr', addProducts)
  fastify.get('/pr/A',{preHandler:[authenticate]}, getAllProduct)
  fastify.patch('/pr/:id', updateProducts)
  //red zone
fastify.post("/register",register)
fastify.post("/login",login)
  //red zone
  fastify.get('/cl/A', getAllClient)
  // fastify.post('/cl', addClient)
  fastify.patch('/cl/:id', updateOneClient)
  fastify.get('/cla/:id',{preHandler:[authenticate]}, addToCart)
  fastify.get('/cl',{preHandler:[authenticate]}, getClient)
  fastify.get('/pur',{preHandler:[authenticate]}, purchaseAll)
  fastify.get('/co', getAllComment)
  fastify.post('/co', addComment)
  fastify.patch('/co/:id', updateOneComment)
  fastify.delete('/co/:id', deleteOneComment)
  done() 
})
