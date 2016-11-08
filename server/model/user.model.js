/**
 * Created by esc08andbott on 05/11/2016.
 */

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const UserSchema = new Schema(
    {
        firstName: String,
        lastName: String,
        email: String,
        username: String,
        password: String
    }
);

mongoose.model('User', UserSchema);

