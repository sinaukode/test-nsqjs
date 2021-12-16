const nsq = require('nsqjs')

const w = new nsq.Writer('127.0.0.1', 4150)

w.connect()

w.on('ready', () => {
    w.publish('sample_topic', 'Haloo coba')
    w.deferPublish('sample_topic', ['Coba 10 detik'], 10000)

    w.publish('sample_topic', 'Wu?',  err => {
        if (err) { return console.error(err.message) }
        console.log('Message sent successfully')
        w.close()
    })
})

w.on('closed', () => {
    console.log('Writer closed')
})
