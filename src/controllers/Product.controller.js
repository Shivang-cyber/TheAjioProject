const { Product } = require('../routes/Product.model')

const getProdz = async (req, reply) => {
  if(req.query.type=="MJACKET") {req.query.type = 'M JACKET'}
  const product = await Product.find({type:{$all:req.query.type}}).lean().exec()
  reply.view('/src/view/cat.ejs', { text: product,sr:req.query.type })
}

const getCart = async(req,reply)=>{
  reply.view('/src/view/check.ejs')
}

const getCloset = async(req,reply)=>{
  reply.view('/src/view/closet.ejs')
}

const getChecked = async(req,reply)=>{
  reply.view('/src/view/deli.ejs')
}

const getPayed = async(req,reply)=>{
  reply.view('/src/view/pay.ejs')
}
const getProducts = async (req, reply) => {
  const product = await Product.findById(req.query.id).lean().exec()
  const aproduct = await Product.find({type:{$all:product.type}}).lean().exec()
  reply.view('/src/view/pro.ejs', { text: product,sr:req.query.type,addpn:aproduct })
}

const addProducts = async (req, reply) => {
  const product = await Product.create(req.body)
  reply.send({ product })
}

module.exports = { getProducts, addProducts, getProdz,getCart,getCloset,getChecked,getPayed }
