const request = require('request')
const getJSID = require('./main')
getJSID('学号', '密码')
    .then(JID => {
        request({
            url: 'http://jwgl.csuft.edu.cn/jsxsd/xxwcqk/xxwcqk_byxfqkcx.do',
            method: 'GET',
            headers: {
                'Cookie': JID
            }
        }, (er, res, body) => {
            if (er) {
                console.log(er)
                return
            }
            console.log(body)

        })

    })
    .catch(er => {
        console.log(er)
    })