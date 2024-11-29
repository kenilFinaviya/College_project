const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://kenil:Kenil*1@cluster0.srwvasz.mongodb.net/crm?retryWrites=true&w=majority'
    , {
        useNewUrlParser: true,
        // useFindAndModify: false,
        useUnifiedTopology: true
    }
).then(() => console.log('Connected!'))
    .catch(() => console.log("not connected"));
