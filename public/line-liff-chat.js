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

eval("\ndocument.addEventListener('DOMContentLoaded', function () {\n    const chatTestCol = firebase.firestore().collection('chat-test');\n    const chatBoard = document.querySelector('#board');\n\n    const songs = [\"a\", \"b\"];\n    const fragment = document.createDocumentFragment();\n    for (let i = 0, len = songs.length; i < len; i++) {\n        const li = document.createElement('li');\n        const nyou = document.createElement('li');\n        const song = document.createTextNode(songs[i]);\n        li.appendChild(song);\n        nyou.appendChild(document.createTextNode('name:minddrop'));\n        fragment.appendChild(li); // fragmentの追加する\n        fragment.appendChild(nyou);\n    }\n    chatBoard.appendChild(fragment);\n\n    // chatTestCol.onSnapShot(snapshot => {\n    //     snapshot.get().forEach(element => {\n\n    //     });\n    // })\n    // chatTestCol.get().forEach(snapshot => {\n    //     for (let i = 0, len = songs.length; i < len; i++) {\n    //         const songs = [\"a\", \"b\"];\n    //         let fragment = document.createDocumentFragment();\n    //         const li = document.createElement('li');\n    //         const nyou = document.createElement('li');\n    //         const song = document.createTextNode(songs[i]);\n    //         li.appendChild(song);\n    //         nyou.appendChild(document.createTextNode('name:minddrop'));\n    //         fragment.appendChild(li); // fragmentの追加する\n    //         fragment.appendChild(nyou);\n    //     }\n    //     chatBoard.appendChild(fragment);\n    // })\n    document.querySelector('#submit').addEventListener('click', (event) => {\n        const chatBody = document.querySelector('#body');\n        const chatName = document.querySelector('#name');\n        if (!chatBody.value) alert('Enter your message');\n        else {\n            chatTestCol.add(\n                {\n                    body: chatBody.value,\n                    date: Date.now(),\n                    name: chatName.value,\n                }\n            ).then(\n                () => {\n                    chatBody.value = \"\";\n                    chatName.value = \"\";\n                }\n            ).catch(e => alert(e))\n        }\n    })\n})\n\n// window.onload = function (e) {\n//     liff.init(function (data) {\n//         initializeApp(data);\n//     });\n// };\n\n// function initializeApp(data) {\n//     document.getElementById('languagefield').textContent = data.language;\n//     document.getElementById('viewtypefield').textContent = data.context.viewType;\n//     document.getElementById('useridfield').textContent = data.context.userId;\n//     document.getElementById('utouidfield').textContent = data.context.utouId;\n//     document.getElementById('roomidfield').textContent = data.context.roomId;\n//     document.getElementById('groupidfield').textContent = data.context.groupId;\n\n//     // openWindow call\n//     document.getElementById('openwindowbutton').addEventListener('click', function () {\n//         liff.openWindow({\n//             url: 'https://line.me'\n//         });\n//     });\n\n//     // closeWindow call\n//     document.getElementById('closewindowbutton').addEventListener('click', function () {\n//         liff.closeWindow();\n//     });\n\n//     // sendMessages call\n//     document.getElementById('sendmessagebutton').addEventListener('click', function () {\n//         liff.sendMessages([{\n//             type: 'text',\n//             text: \"You've successfully sent a message! Hooray!\"\n//         }, {\n//             type: 'sticker',\n//             packageId: '2',\n//             stickerId: '144'\n//         }]).then(function () {\n//             window.alert(\"Message sent\");\n//         }).catch(function (error) {\n//             window.alert(\"Error sending message: \" + error);\n//             window.alert('a');\n//         });\n//     });\n\n//     //get profile call\n//     document.getElementById('getprofilebutton').addEventListener('click', function () {\n//         liff.getProfile().then(function (profile) {\n//             document.getElementById('useridprofilefield').textContent = profile.userId;\n//             document.getElementById('displaynamefield').textContent = profile.displayName;\n\n//             var profilePictureDiv = document.getElementById('profilepicturediv');\n//             if (profilePictureDiv.firstElementChild) {\n//                 profilePictureDiv.removeChild(profilePictureDiv.firstElementChild);\n//             }\n//             var img = document.createElement('img');\n//             img.src = profile.pictureUrl;\n//             img.alt = \"Profile Picture\";\n//             profilePictureDiv.appendChild(img);\n\n//             document.getElementById('statusmessagefield').textContent = profile.statusMessage;\n//             toggleProfileData();\n//         }).catch(function (error) {\n//             window.alert(\"Error getting profile: \" + error);\n//         });\n//     });\n// }\n\n// function toggleProfileData() {\n//     var elem = document.getElementById('profileinfo');\n//     if (elem.offsetWidth > 0 && elem.offsetHeight > 0) {\n//         elem.style.display = \"none\";\n//     } else {\n//         elem.style.display = \"block\";\n//     }\n// }\n\n\n//# sourceURL=webpack:///./src/liff-starter.js?");

/***/ }),

/***/ 0:
/*!***********************************!*\
  !*** multi ./src/liff-starter.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /home/ryu/src/line-liff-starter/src/liff-starter.js */\"./src/liff-starter.js\");\n\n\n//# sourceURL=webpack:///multi_./src/liff-starter.js?");

/***/ })

/******/ });