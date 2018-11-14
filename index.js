const AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event, context, callback) => {

  for(const item of event.Records) {

    var result = await saveItem(item.body)

    callback(null, result);
  }
};

function saveItem(body) {
  return new Promise(resolve => {

    var object = JSON.parse(body);

    var params = {
            TableName: 'table-name',
            Item: {
                //Mapping of object properties to dynamo db structure table.
            }
        };

        ddb.put(params, function(err, data) {

            if (err) {
                console.log(err);
                return err;
            }
            else {
               return data;
            }
        });
  });
}
