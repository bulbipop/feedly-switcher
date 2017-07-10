// ==UserScript==
// @name         Feedly-Switcher
// @namespace    https://github.com/bulbipop/feedly-switcher
// @version      0.2
// @match        https://feedly.com/*
// @run-at       document-idle
// ==/UserScript==

unsafeWindow.switcher = function() {
    let target = document.querySelector('#myButton')
    if (target.innerText == 'SAVED') {
        document.querySelector('#savedtab_label').click();
        target.innerText = 'LATEST'
    } else {
        document.querySelector('#latesttab_label').click();
        target.innerText = 'SAVED'
    }
}

function main() {
    let button = '<button id="myButton" class="pro primary small" '
    if (document.URL.substr(document.URL.lastIndexOf('/') + 1) == 'latest') {
        button += 'onclick="switcher();">SAVED</button>'

    } else {
        button += 'onclick="switcher();">LATEST</button>'
    }

    let upgradeButton = document.querySelector('.pro.primary.small')
    upgradeButton.insertAdjacentHTML('afterend', button)

    document.addEventListener("dragend", function(ev) {
          ev.target.nextSibling.click()
      })
}

setTimeout(main, 4000)
