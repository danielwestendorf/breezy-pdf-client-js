const assert          = require('assert')
const BreezyPDFClient = require('../index')

module.exports = {
  render() {
    let client = new BreezyPDFClient()

    assert(client.render())
  },

  upload() {
    let client = new BreezyPDFClient()

    assert(client.upload())
  }
}
