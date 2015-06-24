/**
 * Created by scastillo on 4/23/15.
 */
module.exports = function (app, models) {
    app.post('/api/subscribe', function(req, res) {

        // create a todo, information comes from AJAX request from Angular
        models.Subscription.findOne({ email: req.data("email") }, function (err, s) {
            if (err) {
                res.send(err);
            }
            if (s) {
                res.json(s);
            } else {
                models.Subscription.create({
                    email: req.data("email"),
                    key: (new Date()).getTime()
                }, function (err, todo) {
                    if (err) {
                        res.send(err);
                    }
                    res.json(todo);
                })
            }
        });

    });
};