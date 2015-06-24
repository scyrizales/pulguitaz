/**
 * Created by scastillo on 6/24/15.
 */
module.exports = function (mongoose) {
    var schema = {
        Subscription: mongoose.schema({
            email: String,
            key: String
        })
    };
    return {
        Subscription: mongoose.model('Subscription', schema.Subscription)
    }
};