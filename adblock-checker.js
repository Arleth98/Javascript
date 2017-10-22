/*! AdBlock Checker v1.0.0 | (c) 2015 Juno_okyo */
function adb_checker(config) {
    // Detect AdBlock
    if (typeof adblock === 'undefined') {
        if (typeof config === 'object') {
            var url = config.url;
            if (typeof url !== 'undefined' && url.length > 0) {
                // Check redirect optional
                if (config.redirect) {
                    window.top.location.href = url;
                } else if (typeof(warn = config.warning) === 'object') {
                    // Set default value
                    if (typeof warn.text === 'undefined') {
                        warn.text = 'Please disable AdBlock to continue!';
                    }
                    if (typeof warn.button === 'undefined') {
                        warn.button = 'Help me to disable!';
                    }
                    adb_warning(url, warn.text, warn.button);
                }
            }
        }
        return true;
    } else {
        return false;
    }
}

function adb_warning(url, text, button) {
    var html = '<div class="smoke-base smoke-visible smoke-alert"><div class="smokebg"></div><div class="dialog smoke">';
    html += '<div class="dialog-inner">' + text;
    if ((img = getHelpImg()) != -1) {
        html += '<br /><center><img src="https://3.bp.blogspot.com/-9OVCBsTVlm8/WezcbAw4mJI/AAAAAAAAAK4/qTYEpQHKuCAREaPxQPeN1c7PC8boGsVawCLcBGAs/s1600/BOqY8vc.png" alt="AdBlock Checker by Juno_okyo" style="display:block" /></center>';
    } else {
        html += '<div class="dialog-buttons"><a href="' + url + '">' + button + '</a></div>';
    }
    html += '</div></div></div>';
    
    var div = document.createElement('div');
    div.innerHTML = html;
    document.body.appendChild(div);
}
