const Users = require('./Users');
const Bands = require('./Bands');

Bands.belongsTo(Users, {
    foreignKey: 'band_id',
});

module.exports = {Users, Bands};