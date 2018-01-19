const oracles = require("oracledb");
oracles.outFormat = oracles.OBJECT;
class Oracles {
    static Connect(data) {
        let config = {
            user: data.username,//"system",
            password:data.password,//"oracle",
            connectString: data.host+":"+data.port+"/"+data.sid,//"192.168.99.100:49133/xe",//"192.168.99.100:49133/xe",
            externalAuth: false
        };
 
        return new Promise((resolve,reject)=>{
            oracles.getConnection(config, function (err, connection) {
                if (err) {reject(err); return false;}
                connection.execute(`SELECT * FROM dba_users`,(err, result)=>{
                        if (err) { reject(err); return false; }
                        //let values = result.rows.map(r => r.TABLE_NAME);
                        resolve(result.rows);
                });
            });
        });

        

    }
}

export default Oracles;
