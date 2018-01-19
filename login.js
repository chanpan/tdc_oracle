const electron = require("electron");
        const remote = electron.remote;
        const app = electron.remote.app;
        const BrowserWindow = electron.remote.BrowserWindow;
        let win = remote.getCurrentWindow();
        $(() => {

            if (localStorage.getItem("access_token")) {
                console.warn(localStorage.getItem("access_token"));
                $("#loading-wait").html(`
                <div class="text-center" style='margin-top:200px;'>
                    <i class='fa fa-spinner fa-spin fa-5x fa-fw'></i>
                    <h2>กำลังตรวจสอบข้อมูล Login...</h2>
                </div>`);
                setTimeout(() => {
                    $("#loading-wait").html(`
                    <div class="text-center" style='margin-top:250px;'>
                        <h2>Login Successfully.</h2>
                    </div>`);
                }, 2000);
                setTimeout(() => {
                    //win.hide();//auto login 
                }, 3000);
            }
        });
        $('#username').val("chanpan.nuttaphon1993@gmail.com");
        $('#password').val("Chanpan!((#");
        goHome = () => {
            let mainWindow = new BrowserWindow({ width: 1000, height: 800 })
            mainWindow.loadURL(`file://${__dirname}/index.html`)
            mainWindow.webContents.openDevTools();

            mainWindow.on('closed', function () {
                mainWindow = null
                childWindow = null
                app.quit(0);
            });
        }
        Close = () => {
            let win = remote.getCurrentWindow();
            app.quit(0);
        }
        $('.close-alert').click(function(){
            $("#error-message").html('');
        });
        Login = () => {
            let username = $('#username').val();
            let password = $('#password').val();
            let remember = $("#remember").is(':checked') ? 1 : 0;
            
            if(username == ""){
                $("#error-message").html(`<div class='alert alert-danger'><a href="#" class="close close-alert" data-dismiss="alert" aria-label="close">&times;</a><strong>กรุณากรอก Username</strong></div>`);return false;
            }
            if(password == ""){
                $("#error-message").html(`<div class='alert alert-danger'><a href="#" class="close close-alert" data-dismiss="alert" aria-label="close">&times;</a><strong>กรุณากรอก Password</strong></div>`);return false;
            }
            var settings = {
                "async": true,
                "crossDomain": true,
                "url": "https://tdcservice.thaicarecloud.org/user",
                "method": "GET",
                "headers": {
                    "Authorization": "Basic " + btoa(username + ":" + password),
                }
            }
            $.ajax(settings).done(function (response) {
                if (remember == 1) {
                    localStorage.setItem("remember", remember);
                }
                localStorage.setItem("access_token", response.access_token);
                localStorage.setItem("sitecode", response.sitecode);
                win.hide();
                goHome();
            });
        } 