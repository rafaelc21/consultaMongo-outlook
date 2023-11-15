const mongoose =  require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/correos_king',{
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex:true,
    useFindAndModify:false
})
.then(db=> console.log('La base de datos Mongo está conectada'))
.catch(err => {
    console.log(err);
});

