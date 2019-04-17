const messageList = require('./list')
const messageCreate = require('./create')
const messageDelete = require('./delete')
const messageQuery = require('./query')
const messageLeaveComment = require('./leaveComment')

module.exports = {
  messageList,
  messageCreate,
  messageDelete,
  messageQuery,
  messageLeaveComment
}