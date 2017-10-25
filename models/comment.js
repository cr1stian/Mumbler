'use strict';
module.exports = (sequelize, DataTypes) => {
  var comment = sequelize.define('comment', {
    body: DataTypes.STRING
  }, {});

  comment.associate = function(models) {
    comment.belongsTo(models.post, {as: 'post', foreignKey: 'postId'})
  }

  return comment;
};
