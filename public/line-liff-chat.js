/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/liff-starter.js":
/*!*****************************!*\
  !*** ./src/liff-starter.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {


document.addEventListener("DOMContentLoaded", function () {
    const chatTestCol = firebase.firestore().collection("chat-test");
    const chatBoard = document.querySelector("#board");

    // const songs = ["a", "b"];
    // const fragment = document.createDocumentFragment();
    // for (let i = 0, len = songs.length; i < len; i++) {
    //     const li = document.createElement("li");
    //     const nyou = document.createElement("li");
    //     const song = document.createTextNode(songs[i]);
    //     li.appendChild(song);
    //     nyou.appendChild(document.createTextNode("name:minddrop"));
    //     fragment.appendChild(li); // fragmentの追加する
    //     fragment.appendChild(nyou);
    // }
    // chatBoard.appendChild(fragment);

    chatTestCol.onSnapshot(querySnapshot => {
        const fragment = document.createDocumentFragment();
        chatTestCol.get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                data = doc.data();
                const name = document.createElement("li");
                const message = document.createElement("li");
                const date = document.createElement("li");
                name.appendChild(document.createTextNode("name: " + data.name));
                date.appendChild(document.createTextNode("date: " + new Date(data.date)));
                message.appendChild(document.createTextNode(data.body));
                fragment.appendChild(date);
                fragment.appendChild(name);
                fragment.appendChild(message);
            });
        });
        console.log(fragment);
        chatBoard.appendChild(fragment);
        console.log("fin");
    })
    document.querySelector("#submit").addEventListener("click", (event) => {
        const chatBody = document.querySelector("#body");
        const chatName = document.querySelector("#name");
        if (!chatName.value) alert("Enter your name")
        else if (!chatBody.value) alert("Enter your message");
        else {
            chatTestCol.add(
                {
                    body: chatBody.value,
                    date: Date.now(),
                    name: chatName.value,
                }
            ).then(
                () => {
                    chatBody.value = "";
                    chatName.value = "";
                }
            ).catch(e => { alert(e); });
        }
    })
})

// window.onload = function (e) {
//     liff.init(function (data) {
//         initializeApp(data);
//     });
// };

// function initializeApp(data) {
//     document.getElementById("languagefield").textContent = data.language;
//     document.getElementById("viewtypefield").textContent = data.context.viewType;
//     document.getElementById("useridfield").textContent = data.context.userId;
//     document.getElementById("utouidfield").textContent = data.context.utouId;
//     document.getElementById("roomidfield").textContent = data.context.roomId;
//     document.getElementById("groupidfield").textContent = data.context.groupId;

//     // openWindow call
//     document.getElementById("openwindowbutton").addEventListener("click", function () {
//         liff.openWindow({
//             url: "https://line.me"
//         });
//     });

//     // closeWindow call
//     document.getElementById("closewindowbutton").addEventListener("click", function () {
//         liff.closeWindow();
//     });

//     // sendMessages call
//     document.getElementById("sendmessagebutton").addEventListener("click", function () {
//         liff.sendMessages([{
//             type: "text",
//             text: "You"ve successfully sent a message! Hooray!"
//         }, {
//             type: "sticker",
//             packageId: "2",
//             stickerId: "144"
//         }]).then(function () {
//             window.alert("Message sent");
//         }).catch(function (error) {
//             window.alert("Error sending message: " + error);
//             window.alert("a");
//         });
//     });

//     //get profile call
//     document.getElementById("getprofilebutton").addEventListener("click", function () {
//         liff.getProfile().then(function (profile) {
//             document.getElementById("useridprofilefield").textContent = profile.userId;
//             document.getElementById("displaynamefield").textContent = profile.displayName;

//             var profilePictureDiv = document.getElementById("profilepicturediv");
//             if (profilePictureDiv.firstElementChild) {
//                 profilePictureDiv.removeChild(profilePictureDiv.firstElementChild);
//             }
//             var img = document.createElement("img");
//             img.src = profile.pictureUrl;
//             img.alt = "Profile Picture";
//             profilePictureDiv.appendChild(img);

//             document.getElementById("statusmessagefield").textContent = profile.statusMessage;
//             toggleProfileData();
//         }).catch(function (error) {
//             window.alert("Error getting profile: " + error);
//         });
//     });
// }

// function toggleProfileData() {
//     var elem = document.getElementById("profileinfo");
//     if (elem.offsetWidth > 0 && elem.offsetHeight > 0) {
//         elem.style.display = "none";
//     } else {
//         elem.style.display = "block";
//     }
// }


/***/ }),

/***/ 0:
/*!***********************************!*\
  !*** multi ./src/liff-starter.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ryu/src/line-liff-starter/src/liff-starter.js */"./src/liff-starter.js");


/***/ })

/******/ });
//# sourceMappingURL=line-liff-chat.js.map