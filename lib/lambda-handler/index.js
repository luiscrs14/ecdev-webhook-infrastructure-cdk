var http = require('https');

exports.handler = function (event, context) {
    event.Records.forEach(record => {
        const params = {
            host: "6566-2001-818-e7eb-2d00-5c74-d1f4-436a-b4c.eu.ngrok.io",
            body: record.body,
            method: "POST"
        }
        var post_req = http.request(params);

        post_req.write(record.body);
        post_req.end()
    })
}