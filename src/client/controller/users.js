const jsonwebtoken = require('jsonwebtoken')
const User = require('../models/users')
const secret = require('../config').secret
const currentUser = require('../models/mock/user')

class UsersCtl {
  async find(ctx) {
    ctx.body = await User.find()
  }
  async findById(ctx) {
    const {fields=''} = ctx.query
    const selectFields = fields.split(';').filter(f => f).map(f => ' +' + f).join('')
    const user = await User.findById(ctx.params.id).select(selectFields)
    if (!user) {ctx.throw(404, '用户不存在')}
    ctx.body = user
  }
  async create(ctx) {
    ctx.status = 200
    console.log(ctx.request.body)
    ctx.verifyParams({
      name: {type: 'string', required: true},
      password: {type: 'string', required: true}
    })
    const {name} = ctx.request.body
    const repeatUser = await User.findOne({name})
    if (repeatUser) { ctx.throw(409, '用户已被占用') }
    const user = await User(ctx.request.body).save()
    ctx.body = user
  }
  async update(ctx) {
    ctx.verifyParams({
      name: {type: 'string', required: false},
      password: {type: 'string', required: false},
      avatar_url: {type: 'string', required: false},
      gender: {type: 'string', required: false},
      headline: {type: 'string', required: false},
      locations: {type: 'array', itemType: 'string', required: false},
      business: {type: 'string', required: false},
      employments: {type: 'array', itemType: 'object', required: false},
      educations: {type: 'array', itemType: 'object', required: false},
    })
    const user = await User.findByIdAndUpdate(ctx.params.id, ctx.request.body)
    if (!user) {ctx.throw(404, '用户不存在')}
    ctx.body = user
  }
  async del(ctx) {
    const user = await User.findByIdAndRemove(ctx.params.id)
    if (!user) {ctx.throw(404, '用户不存在')}
    ctx.body = user
    ctx.status = 204
  }
  async login(ctx) {
    ctx.verifyParams({
      name: {type: 'string', required: true},
      password: {type: 'string', required: true}
    })
    const user = await User.findOne(ctx.request.body)
    if(!user) {ctx.throw(401, '用户名或者密码不正确')}
    const {_id, name} = user
    const token = await jsonwebtoken.sign({_id, name}, secret, {expiresIn: '1d'})
    ctx.body = {
      token
    }
  }
  async checkOwer(ctx, next) {
    if (ctx.params.id !== ctx.state.user._id) {
      ctx.throw(403, '用户没有权限')
    }
    await next()
  }
 
  async currentUser (ctx) {
    ctx.body = currentUser
  }
}

module.exports = new UsersCtl()