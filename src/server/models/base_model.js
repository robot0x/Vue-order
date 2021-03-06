/**
 * 基表，给所有的 Model 扩展功能
 * 详细见：http://mongoosejs.com/docs/plugins.html
 */
var tools=require('../common/tools');
module.exports = function (schema) {
  schema.methods.create_at_ago = function () {
    return tools.formatDate(this.create_at, true);
  };

  schema.methods.updated_at_ago = function () {
    return tools.formatDate(this.create_at, true);
  };
};