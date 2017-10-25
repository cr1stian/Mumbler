'use strict';
module.exports = (sequelize, DataTypes) => {
  var user = sequelize.define('user', {
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});

  user.associate = (models) => {
    user.hasMany(models.post,{as: 'post', foreignKey: 'userId'})
  }
  return user;
};
