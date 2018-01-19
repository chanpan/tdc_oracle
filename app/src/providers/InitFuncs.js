import fo from "./Files";
import url from "./Urls";

export default class InitFunc{
    static create_database(){
      // let result_folder = fo.create_new_folder('',url.db_home_dir());
       //console.log(result_folder);
       InitFunc.copy_file();
        fo.create_new_folder('',url.db_home_dir()).then(res=>{
            InitFunc.copy_file();
        }).catch(err=>{
            InitFunc.copy_file();
        });
    }
    static copy_file(){
        let target = url.db_sqlite_target_filename();
        let src = "./app/src/assets/tdc_default.db";
        fo.copy_file(target,src).then(res=>console.info(res)).catch(err=>console.warn(err));
    }
}