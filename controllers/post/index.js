const postCreate = require('./create')
const postList = require('./list')
const postDelete = require('./delete')
const postUpdate = require('./update')
const postQuery = require('./query')
const postLeaveComment = require('./leaveComment')

module.exports = {
  postCreate,
  postList,
  postDelete,
  postUpdate,
  postQuery,
  postLeaveComment
}