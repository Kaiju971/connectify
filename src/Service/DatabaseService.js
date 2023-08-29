import { db } from "./firebase";
import { ref, get, set, update, remove } from "firebase/database";

class DatabaseService {
  // returns list of records as an array of javascript objects
  getAll = async () => {
    const snapshot = await get(ref(db, this.collectionName));
    return Object.values(snapshot.val());
  };

  getUserCheck = async (email, password) => {
    const usersRef = ref(db, this.collectionName);

    const snapshot = await get(usersRef);

    const users = [];
    snapshot.forEach((userSnapshot) => {
      userSnapshot.forEach((secondLevelSnapshot) => {
        const user = secondLevelSnapshot.val();
        if (user && user.email === email && user.password === password) {
          users.push(user);
        }
      });
    });

    return users;
  };

  // save a new document in the database
  create = async (data) => {
    const newRef = ref(db, this.collectionName).push();
    await set(newRef, data);
    return newRef.key;
  };

  // update an existing document with new data
  update = async (id, values) => {
    const docRef = ref(db, `${this.collectionName}/${id}`);
    await update(docRef, values);
  };

  // delete an existing document from the collection
  remove = async (id) => {
    const docRef = ref(db, `${this.collectionName}/${id}`);
    await remove(docRef);
  };
}

// Create services for each entity type
export const UsersService = new DatabaseService("users");
