var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");

var button = buttons.ActionButton({
  id: "Headliner-Home",
  label: "Headline Highlighter",
  icon: {
    "16": "./icon-16.png",
    "32": "./icon-32.png",
    "64": "./icon-64.png"
  },
  onClick: handleClick
});

function handleClick(state) {
  tabs.open("http://www.headline-highlighter.dickens-webdesign.de/index.html");
}

/* after install add on ->d irect to welcome page */
exports.main = function (install) {
	tabs.open("http://www.headline-highlighter.dickens-webdesign.de/install_complete.html");
};

/* uninstall add on we call export.onUnload(reason) { to do } */

exports.onUnload = function (uninstall) {
	tabs.open("http://www.headline-highlighter.dickens-webdesign.de/uninstall_complete.html");
};


