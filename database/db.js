const mongoose = require('mongoose');

const connectToDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DATABASE_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
        console.log('MongoDb Connected...');
    } catch (err) {
        console.error(err.message);
        // Exist process with failure
        process.exit(1);
    }
};

module.exports = connectToDB;
