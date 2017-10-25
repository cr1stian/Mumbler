'use strict';
module.exports = (sequelize, DataTypes) => {
  var post = sequelize.define('post', {
    title: DataTypes.STRING,
    body: DataTypes.STRING
  }, {});

  post.associate = function(models) {

    post.hasMany(models.comment,{as: 'comment', foreignKey: 'postId'})

    post.belongsTo(models.user,{as: 'user', foreignKey: 'userId'})

  }

  return post;
};
