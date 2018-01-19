import fo from './Files';
import Token from './Token';
const DEFAULT_FOLDER = "tdcs";
const DEFAULT_SQLITEDB = "tdcs.db";
const TARGET_FOLDER = `${fo.get_userhome()}\\${DEFAULT_FOLDER}`;

class Urls{
    static target_sqlite_name(){
        return TARGET_FOLDER+"\\"+DEFAULT_SQLITEDB;
    }
    static tdc_service(){
        return "https://tdcservice.thaicarecloud.org/";
    }
    static tdc_service_new_his_type(){
        return Urls.tdc_service()+"buffe-constants/new-his-type?token="+Token.get_access_token('access_token');
    }
    static tdc_service_save_his_type(his_name){
        return Urls.tdc_service()+"buffe-config/?token="+Token.get_access_token('access_token')+"&his_type="+his_name;
    }

    static db_home_dir(){
        return DEFAULT_FOLDER;
    } 
    static db_sqlite_name(){
        return DEFAULT_SQLITEDB;
    }
    static db_sqlite_target(){
        return TARGET_FOLDER;
    }
    static db_sqlite_target_filename(){
        return TARGET_FOLDER+"\\"+DEFAULT_SQLITEDB;
    } 
}
export default Urls;