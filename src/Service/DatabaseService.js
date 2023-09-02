import { db } from "./firebase";
import { ref, get, set, update, remove, push } from "firebase/database";

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

  lastNom = async () => {
    const usersRef = ref(db, this.collectionName);
    const snapshot = await get(usersRef);
    let lastUserNumber = 1;
    snapshot.forEach((userSnapshot) => {
      const userData = userSnapshot.val();
      const arrData = Object.values(userData);
      lastUserNumber = Number(arrData.length);
    });
    return lastUserNumber;
  };

  // save a new document in the database
  createUser = async (data) => {
    const usersRefParent = ref(db, this.collectionName);
    const lastUserNumber = (await this.lastNom()).valueOf();
    const userKey = "user" + (lastUserNumber + 1); // Utilisez une méthode pour créer une clé unique basée sur l'email
    const userRef = ref(db, `${this.collectionName}/${userKey}`);

    try {
      const snapshot = await get(userRef);

      if (snapshot.exists()) {
        // L'utilisateur existe déjà, mettez à jour les informations si nécessaire
        const existingUserData = snapshot.val();
        if (existingUserData.email === data.email) {
          // Mettez à jour les informations de l'utilisateur
          await update(userRef, {
            nom: data.nom,
            prenom: data.prenom,
            // ... autres champs à mettre à jour
          });
        }
        return userKey;
      } else {
        // L'utilisateur n'existe pas encore, ajoutez-le
        await set(userRef, data);
        return userKey;
      }
    } catch (error) {
      console.error(
        "Erreur lors de la création/mise à jour de l'utilisateur :",
        error
      );
      throw error;
    }
  };

  updateSubscription = async (email) => {
    const usersRef = ref(db, this.collectionName);
    const snapshot = await get(usersRef);
    let data = "";
    snapshot.forEach((userSnapshot) => {
      const userData = userSnapshot.val();

      const arrData = Object.values(userData);
      arrData.map((item, index) => {
        if (item.email === email) {
          const userKey = "user" + (index + 1);
          const dataRefLevel2 = "users/" + userKey;
          const dataRef = ref(db, dataRefLevel2);

          // // Utilisez la fonction update pour mettre à jour le champ d'abonnement de l'utilisateur
          update(dataRef, {
            abonnement: true, // Utilisez un champ pour indiquer l'abonnement
          });
          data = userKey;
        }
      });
    });
    return this.collectionName;
  };

  // // Utilisation de la fonction pour mettre à jour l'abonnement d'un utilisateur spécifique par e-mail
  // updateSubscription('ei@gmail.com'); // Remplacez par l'e-mail approprié

  // delete an existing document from the collection
  remove = async (id) => {
    const docRef = ref(db, `${this.collectionName}/${id}`);
    await remove(docRef);
  };
}

// Create services for each entity type
export const UsersService = new DatabaseService("users");
