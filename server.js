const nsq = require('nsqjs')

const reader = new nsq.Reader('sample_topic', 'test', {
    lookupdHTTPAddresses: '127.0.0.1:4161'
})

reader.connect()

reader.on('message', msg => {
    console.log('Received message [%s]: %s', msg.id, msg.body.toString())
    msg.finish()
})
