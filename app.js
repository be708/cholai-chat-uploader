import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
 const firebaseConfig = {
      apiKey: "AIzaSyB...",
      authDomain: "cholai-chat-png.firebaseapp.com",
      projectId: "cholai-chat-png",
      storageBucket: "cholai-chat-png.appspot.com",
      messagingSenderId: "384...",
      appId: "1:384..."
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

document.getElementById('uploadBtn').addEventListener('click', async () => {
  const output = document.getElementById('output');
  output.innerText = "Starting upload...\n";
  
  for(let i = 1; i <= 70; i++){
    const imgPath = /questions/q${i}.png;
    try {
      await addDoc(collection(db, "questions"), {
        id: i,
        image: imgPath,
        createdAt: new Date()
      });
      output.innerText += Uploaded ${i}/70\n;
    } catch(e){
      output.innerText += Error on ${i}: ${e}\n;
    }
  }
  output.innerText += "\nDONE! All 70 uploaded.";
});
