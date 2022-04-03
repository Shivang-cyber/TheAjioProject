const { Client } = require('../routes/client.model')
const { Product } = require('../routes/Product.model')

const findClient = async (req,reply) =>{
  const client = await Client.find({ mail: req.query.mail }).lean().exec()
  if(client.length!=0){
    reply.send(true)
  }else{
    reply.send(false)
  }
}

const getClient = async (req, reply) => {
  const client = await Client.find({ mail: req.user.user.mail })
    .populate('in_cart.item liked.item purchased.item.item')
    .lean()
    .exec()

  reply.send({ client })
}
const getAllClient = async (req, reply) => {
  const client = await Client.find().populate('in_cart.item').lean().exec()
  reply.send({ client })
}
const addClient = async (req, reply) => {
  let a = await Client.find({ mail: req.body.mail }).lean().exec()
  if (a.length != 0) {
    reply.send('Already Exist')
    return
  }
  const client = await Client.create(req.body)
  reply.send({ client })
}
const updateOneClient = async (req, reply) => {
  const client = await Client.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })
    .lean()
    .exec()
  reply.send({ client })
}
const addToCart = async (req, reply) => {
  const product = await Product.find({_id:req.params.id}).lean().exec()
  const client = await Client.find({ mail: req.user.user.mail }).lean().exec()
  let arr = client[0].in_cart,t = true
  for(let i=0;i<arr.length;i++) {if(arr[i].item.toString()==product[0]._id.toString()){
      t= false
      break
    }
  }
  if(t)  arr.push({item:product[0]._id,count: 1})
  client[0].in_cart = arr
  const clien = await Client.findByIdAndUpdate(client[0]._id,client[0], {new: true})
          .populate('in_cart.item liked.item purchased.item.item')
          .lean()
          .exec()
  reply.send({ clien })  
}

const addToLiked = async (req, reply) => {
  const product = await Product.find({_id:req.params.id}).lean().exec()
  const client = await Client.find({ mail: req.user.user.mail }).lean().exec()
  let arr = client[0].liked,t = true
  for(let i=0;i<arr.length;i++) {if(arr[i].item.toString()==product[0]._id.toString()){
      t= false
      break
    }
  }
  if(t)  arr.push({item:product[0]._id})
  client[0].liked = arr
  const clien = await Client.findByIdAndUpdate(client[0]._id,client[0], {new: true})
          .populate('in_cart.item liked.item purchased.item.item')
          .lean()
          .exec()
  reply.send({ clien })  
}

const purchaseAll = async (req, reply) => {
  const client = await Client.find({ mail: req.user.user.mail })
    .populate('in_cart.item liked.item purchased.item.item')
    .lean()
    .exec()
  if (client[0].in_cart == 0) {
    reply.send('Cart Empty')
    return
  }
  const pr = await Product.find().lean().exec()
  //order & delivery date
  let date = new Date()
  let Cd = new Date().toString().split(' ')
  date.setDate(date.getDate() + 3)
  date = date.toString().split(' ')
  //done
  let Price = 0
  client[0].in_cart.map((a) => { Price += a.item.price * a.count })
  let T = true
  let O = {
    item: client[0].in_cart,
    price: Price,
    deliveryDate: `${date[1]} ${date[2]} ${date[3]}`,
    orderTime: `${Cd[1]} ${Cd[2]} ${Cd[3]} ${Cd[4]}`,
  }
  client[0].purchased.push(O)
  client[0].in_cart = []

  let i = client[0]._id
  i = i.toString()
  const cl = await Client.findByIdAndUpdate(i,client[0],{new:true}).lean().exec()

  if (T == true) {
    reply.send({ cl })
  } else {
    reply.send('please review your cart')
  }
}

module.exports = {
  findClient,
  getClient,
  addClient,
  getAllClient,
  updateOneClient,
  addToCart,
  purchaseAll,
  addToLiked
}
