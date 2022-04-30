import React, {Suspense} from "react";
import {Routes, Route} from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
import './i18n'
import {collection} from "firebase/firestore";
import {db} from "./firebase/firebase";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";

function App() {
    const userCollectionRef = collection(db,'users')
  return (
      <Suspense fallback={'Loading...'}>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route path='' element={<Home/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Route>
        </Routes>
      </Suspense>
  );
}

export default App;
