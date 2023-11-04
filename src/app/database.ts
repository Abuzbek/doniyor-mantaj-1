import { firebaseDatabase } from "../../initFirebase";
import { onValue, ref, set, get, child } from "firebase/database";

function generateUUID() {
  // Public Domain/MIT
  var d = new Date().getTime(); //Timestamp
  var d2 =
    (typeof performance !== "undefined" &&
      performance.now &&
      performance.now() * 1000) ||
    0; //Time in microseconds since page-load or 0 if unsupported
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = Math.random() * 16; //random number between 0 and 16
    if (d > 0) {
      //Use timestamp until depleted
      r = (d + r) % 16 | 0;
      d = Math.floor(d / 16);
    } else {
      //Use microseconds since page-load if supported
      r = (d2 + r) % 16 | 0;
      d2 = Math.floor(d2 / 16);
    }
    return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
}

export async function writeUserData({
  name,
  phone,
}: {
  name: string;
  phone: string;
}) {
  const db = firebaseDatabase;
  const uuid = generateUUID();
  const data = await set(ref(db, "users/" + uuid), {
    name: name,
    phone,
  });
  console.log(data);
}

export async function getUserData() {
  const db = firebaseDatabase;
  const starCountRef = ref(db);
  console.log(starCountRef);
  return await get(child(starCountRef, "users/"));
}
