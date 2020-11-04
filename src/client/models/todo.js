const mongoose = require('mongoose')
const {
  Schema,
  model
} = mongoose

const TodoSchema = new Schema({

  content: {
    type: String,
    required: true
  },
  description: {
    type: String,
  },
  date: {
    type:Date,
    default:Date.now
  },
  state: {
    type: Boolean,
    default:false
  },
  category:{
    type: String,
  },
  tags:[
    {
      tag:{
        type:String
      },
      color:{
        type:String
      }
    }
  ],
  notice:{
    type:Boolean,
    default:false
  },
  noticeInfo:{
    noticeType:{
      type:Number,
      default:0 //0 单个时间 和 1 时间段 
    },
    datetime:{
      type:Date
    },
    startTime:{
      type:Date
    },
    endTime:{
      type:String
    },
    repeat:{
      type:Boolean,
      default:false
    },
    repeatType:{
      type:String
    }
  }
})

module.exports = model('Todo', TodoSchema)