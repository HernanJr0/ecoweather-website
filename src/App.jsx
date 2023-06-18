import { initializeApp } from "firebase/app";
import { collection, getFirestore, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import "./App.css";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyDYfNOUrNRYL54saMHsTIhyVWubkmR9i_s",
  authDomain: "ecoweather-d0887.firebaseapp.com",
  projectId: "ecoweather-d0887",
});

export const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([]);

  const db = getFirestore(firebaseApp);
  const userCollectionRef = collection(db, "users");

  function criaUser() {
    console.log({name, email})
  }

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);

  return (
    <div>
      <ul>
        {users.map((user) => {
          return (
            <div>
              <li>{user.name}</li>
              <li>{user.email}</li>
              <li>{user.adriano}</li>
            </div>
          );
        })}
      </ul>
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
    </div>
  );
};
