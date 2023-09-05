import { initializeApp } from "firebase/app";
import {
  collection,
  getFirestore,
  getDocs,
  addDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyDYfNOUrNRYL54saMHsTIhyVWubkmR9i_s",
  authDomain: "ecoweather-d0887.firebaseapp.com",
  projectId: "ecoweather-d0887",
});

export const Auth = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([]);

  const db = getFirestore(firebaseApp);
  const userCollectionRef = collection(db, "users");

  async function criaUser() {
    const user = await addDoc(userCollectionRef, {
      name,
      email,
    });
    console.log(user);
  }

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, [userCollectionRef]);

  async function deleteUser(id) {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
  }

  return (
    <div>
      <form id="formulario">
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
      </form>
      <button onClick={criaUser}>Criar Usuário</button>
      <ul>
        {users.map((user) => {
          return (
            <div>
              <li>{user.name}</li>
              <li>{user.email}</li>
              <button onClick={() => deleteUser(user.id)}>Deletar</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Auth;