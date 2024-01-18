// ==UserScript==
// @name         IP2 Network Switch
// @namespace    http://tampermonkey.net/
// @version      2024-01-18
// @description  Quickly switch between IP2.Online and IP2.Network
// @author       splatert
// @match        https://ip2.online/
// @match        https://ip2.network/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=ip2.online
// @grant        none
// ==/UserScript==

(function() {
    'use strict';


    const ctrlArea = document.createElement("div");
    ctrlArea.style.width = "125px";
    ctrlArea.style.height = "25px";
    ctrlArea.style.paddingLeft = "15px"

    const switchControl = document.createElement("div");
    switchControl.style.width = "60px";
    switchControl.style.height = "23px";
    switchControl.style.backgroundColor = "rgb(112, 23, 145)";
    switchControl.style.margin = "13px"
    switchControl.style.marginLeft = "25px"
    switchControl.style.boxShadow = "0px 0px 3px black"
    
    const switchBtn = document.createElement("a")
    switchBtn.style.width = "23px"
    switchBtn.style.height = "23px"
    switchBtn.style.background = "#c012ff"
    switchBtn.style.display = "inline-block"
    switchBtn.style.marginRight = "50px"
    switchBtn.style.boxShadow = "0px 0px 8px #3c1159"
    switchBtn.style.position = "relative"


    const labelSite = document.createElement("p")
    labelSite.textContent = "O"
    labelSite.style.fontWeight = "Bold"
    labelSite.style.color = "white"
    labelSite.style.display = "inline"
    labelSite.style.position = "relative"
    labelSite.style.bottom = "3px"


    if (window.location.href == "https://ip2.online/")
    {
        const area = document.getElementsByClassName("navigation-links")[0];
        area.appendChild(ctrlArea)
        switchBtn.href = "https://ip2.network/"
        labelSite.textContent = "O"
    }
    else if (window.location.href == "https://ip2.network/")
    {
        const area = document.getElementsByClassName("widget-wrapper")[0];
        area.appendChild(ctrlArea)
        switchBtn.style.left = "37px"
        switchBtn.href = "https://ip2.online/"
        labelSite.textContent = "N"
    }


    ctrlArea.appendChild(switchControl);
    switchControl.appendChild(switchBtn)
    switchBtn.appendChild(labelSite)


})();