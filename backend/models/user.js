//TODO add the fiels base on part 3
const mongoose =equire('mongoose');

const userSchema = mongoose.Schema ({
email: {type: String, required: true, required: true},
password: {type: String, required: true, required : true}
});

userSchema,plugin (uniqueValidator);
module.exports = mongoose.model('user', userSchema);