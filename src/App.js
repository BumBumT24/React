import React, { useState, useEffect, useContext, useRef } from 'react';
import Card from './card';
import './App.css';

function countReducer(state, action){
  switch(action.type){
    case 'increment':
      return state+1;
    case 'decrement':
      return state-1;
  }
}

const UserContext = React.createContext();

function App(){
  const [count, dispatch] = React.useReducer(countReducer, 0);
  const [user, setUser] = useState({ name: 'Kacper', surname: 'Zawiszewski', year: 2022});
  useEffect(() => {
    console.log('Komponent załadowany');
    return () => {
      console.log('Komponent zdemontowany');
    };
  }, []);

  const nameRef = useRef(null);
  const surnameRef = useRef(null);
  const yearRef = useRef(null);

  const changeName = () => {
    setUser((prevUser) => ({
      ...prevUser,
      name: nameRef.current.value,
    }));
  };

  const changeSurName = () => {
    setUser((prevUser) => ({
      ...prevUser,
      surname: surnameRef.current.value,
    }));
  };

  const changeYear = () => {
    setUser((prevUser) => ({
      ...prevUser,
      year: yearRef.current.value,
    }));
  };

  return (
    <div>
      <UserContext.Provider value={user}>
        <main>
          {}
          <Card Imie={user.name} Nazwisko={user.surname} Rok_rozpoczecia={user.year} />
          <div>
            Licznik: {count}
            <button onClick={() => dispatch({ type: 'increment' })}>+</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
          </div>
          <div>
            <input ref={nameRef} type="text" placeholder="Wpisz nowe imię" />
            <button onClick={changeName}>Zmień imię</button>
            <input ref={surnameRef} type="text" placeholder="Wpisz nowe nazwisko" />
            <button onClick={changeSurName}>Zmień nazwisko</button>
            <input ref={yearRef} type="number" placeholder="Wpisz nowe rok_rozpoczecia" />
            <button onClick={changeYear}>Zmień rok</button>
          </div>
        </main>
      </UserContext.Provider>
    </div>
  );
};

export default App;