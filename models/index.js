const Users = require('./Users');
const Bands = require('./Bands');

Bands.belongsTo(Users, {
    foreignKey: 'user_id',
});

module.exports = {Users, Bands};