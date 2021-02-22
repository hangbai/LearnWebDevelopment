const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/MallData', {useNewUrlParser: true, useUnifiedTopology: true});

const testSchema = new mongoose.Schema({
  name: { type: String},
  password: { type: String},
})

let Test = mongoose.model('Test',testSchema,'test')

setTimeout(()=>{
  console.time('Start')
  Test.findOne({},(err, docs) => {
    let temp = docs
    console.log(docs)
    console.timeEnd('Start')
  })
},10)
