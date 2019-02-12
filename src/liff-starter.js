console.log(
  firebase
    .storage()
    .ref()
    .child('a.txt').fullPath
)
document.addEventListener('DOMContentLoaded', function() {
  const chatTestCol = firebase.firestore().collection('chat-test')
  const chatBoard = document.querySelector('#board')

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
    const fragment = document.createDocumentFragment()
    chatTestCol.get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        data = doc.data()
        const name = document.createElement('li')
        const message = document.createElement('li')
        const date = document.createElement('li')
        name.appendChild(document.createTextNode('name: ' + data.name))
        date.appendChild(
          document.createTextNode('date: ' + new Date(data.date))
        )
        message.appendChild(document.createTextNode(data.body))
        fragment.appendChild(date)
        fragment.appendChild(name)
        fragment.appendChild(message)
      })
      chatBoard.appendChild(fragment)
    })
  })
  document.querySelector('#submit').addEventListener('click', event => {
    const chatBody = document.querySelector('#body')
    const chatName = document.querySelector('#name')
    if (!chatName.value) alert('Enter your name')
    else if (!chatBody.value) alert('Enter your message')
    else {
      chatTestCol
        .add({
          body: chatBody.value,
          date: Date.now(),
          name: chatName.value
        })
        .then(() => {
          chatBody.value = ''
          chatName.value = ''
        })
        .catch(e => {
          alert(e)
        })
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
