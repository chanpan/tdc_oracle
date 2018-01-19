<div>
 <h2>Install sqlite3 with nodejs or electron</h2>
 <pre>
   - install electron-rebuild   >>>  npm install electron-rebuild --save
   - install electron-prebuilt  >>>  npm install electron-prebuilt --save
   - install sqlite3            >>>  npm install sqlite3
   <b>config file package.json</b>
        - "scripts": {"start":"npm start",<b>"rebuild:sqlite": "electron-rebuild -f -w ./node_modules/sqlite3"</b>}
        - run  rebuild               >>> npm run rebuild:sqlite 
 </pre>
</div>
<hr>
<div>
 <h2>Install  oracledb with nodejs or electron</h2>
 <pre>
   - Download and install python and set path
   - Download and install nodejs and set path
   - Download Oracle Instant Client for <a href='http://www.oracle.com/technetwork/topics/winx64soft-089540.html' target='_blank'>Instant</a> or <a href='https://drive.google.com/file/d/1ywHql3hjqdVQHT_FmKAfBhEmLktrzMlI/view?usp=sharing'>google drive</a>
        - instantclient-basic-windows.x64-12.2.0.1.0.zip
        - unzip instantclient-basic-windows.x64-12.2.0.1.0.zip  to C://instantclient
        - or <b>npm install --save-dev instantclient</b>  and set path
        - Control Panel->System->Advanced System Settings->Advanced->Environment Variables->System variables->PATH <b>C://instantclient</b>
    <b>Open terminal or cmd mode admin.</b>
        - set OCI_LIB_DIR=C:\oracle\instantclient\sdk\lib\msvc 
        - set OCI_INC_DIR=C:\oracle\instantclient\sdk\include
        - install build-tools        >>>  npm install --global --production windows-build-tools
        - install electron-rebuild   >>>  npm install electron-rebuild --save
        - install electron-prebuilt  >>>  npm install electron-prebuilt --save
        - install oracledb           >>>  npm install oracledb
        - install nan                >>>  npm install nan 
     <b>config file package.json</b>
        - "scripts": {"start":"npm start",<b>"rebuild": "electron-rebuild -f -w ./node_modules/oracledb"</b>}
        - run  rebuild               >>> npm run rebuild
 </pre>
</div>
