import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import AuthPage from './AuthReg/AuthPage';
import RegistrationPage from './AuthReg/RegistrationPage';
import HomePage from './HomePage';
import MyNavBar from './MyNavBar';

// const darkTheme = createTheme({
//   palette: {
//     mode: 'dark',
//   },
// });

export default function App({ user, fish }) {
  const [currUser, setCurrUser] = useState(user || {});
  const [currFish, setCurrFish] = useState(fish || []);

  // console.log(currFish);
  const logOutHandler = () => {
    fetch('/auth/logout')
      .then(() => setCurrUser({}));
  };

  const addHendler = () => {
    fetch('https://www.fishwatch.gov/api/species')
      .then((res) => res.json())
      .then((data) => setCurrFish(data.filter((el) => !!el['Image Gallery'])));
  };

  // useEffect(() => {
  //   fetch('https://www.fishwatch.gov/api/species')
  //     .then((res) => res.json())
  //     .then((data) => setCurrFish(data.filter((el) => !!el['Image Gallery'])));
  // }, []);
  return (

    <Container className="content">
      <MyNavBar
        currUser={currUser}
        logOutHandler={logOutHandler}
        addHendler={addHendler}
      />
      <Routes>
        <Route path="/" element={<HomePage currFish={currFish} />} />
        <Route path="/auth/registration" element={<RegistrationPage setCurrUser={setCurrUser} />} />
        <Route path="/auth/authorization" element={<AuthPage setCurrUser={setCurrUser} />} />
      </Routes>
    </Container>

  );
}
