const Users = require('./Users');
const Bands = require('./Bands');
const Posts = require('./Posts')

Bands.belongsTo(Users, {
    foreignKey: 'user_id',
});

Posts.belongsTo(Bands, {
    foreignKey: 'band_id',
});

module.exports = {Users, Bands, Posts};