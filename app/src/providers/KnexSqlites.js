import url from './Urls';
var knex = require("knex")({
    client:'sqlite3',
    connection:{
         filename: url.db_sqlite_target_filename()
    },
    useNullAsDefault: true
}); 

class KnexSqlite{
    static Connect(){
        return knex;
    }
    static findAll(tables, where=""){
        /** 
         * tables : string  example  'tb_users'
        */
        return new Promise((resolve, reject) => {
            knex.select('*').from(tables).where(where).then(res => resolve(res)).catch(err => reject(err));
        });
    }
    static findOne(params = '', tables, wheres){
        /** 
          * params : string example 'fname, lname'
          * tables  : string example 'users'
          * wheres :  object example {id:1}
        */
        let p = params || "*";
        return new Promise((resolve, reject) => {
            knex.select(p).from(tables).where(wheres)
                .map(res => resolve(res))
                .catch(err => reject(err));
        });
    }
    static getCount(tables, wheres){
        /** 
          * 
          * tables  : string example 'users'
          * wheres :  object example {id:1}
        */
 
        return new Promise((resolve, reject) => {
            knex.count('* as count').from(tables).where(wheres).map(res => resolve(res))
            .catch(err => reject(err));
                
        });
    }

    static Create(tables,data) {
        /** 
          * data : object example {fname:'nuttaphon' , lname:'chanpan'}
          * table : string
        */
        return new Promise((resolve, reject) => {
            knex.insert(data).into(tables)
                .then(res => resolve({status:'Success', message:`Insert ${tables} success.`}))
                .catch(err => reject(err));
        });
    }
    static Update(tables, data, wheres) {
        /**
         * tables : string
         * data : object example {username:'user',password:'user'} 
         * wheres : object example {id:1}
         */
        return new Promise((resolve, reject) => {
            knex.update(data).from(tables).where(wheres)
                .then(res => resolve({status:'Update', message:`Update ${tables} success.`}))
                .catch(err => reject(err));
        });
    }

    static Delete(tables, wheres){
        /**
         * tables : string example 'tb_users'
         * wheres : object example  {id:1}
         */
        return new Promise((resolve, reject) => {
            knex.from(tables).where(wheres).del()
            .then(res => resolve({status:'Delete', message:`Delete ${tables} success.`}))
                .catch(err=>reject(err));
        });
    }
}
 
export default KnexSqlite;
 