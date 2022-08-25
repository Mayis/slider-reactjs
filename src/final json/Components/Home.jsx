import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./Users";
import Posts from "./Posts";
import Header from "../mains/Header";
import DarkMode from "../helpers/DarkMode";
import Albums from "./Albums";
import Photos from "./Photos";
export default function Home() {
  const [dark, setDark] = useState(false);
  const toDark = () => {
    setDark(!dark);
  };
  return (
    <>
      <DarkMode.Provider value={dark}>
        <BrowserRouter>
          <Header toDark={toDark} />
          <Routes>
            <Route path="/" element={<Users />} />
            <Route path="/posts">
              <Route path=":userId" element={<Posts />} />
            </Route>
            <Route path="/albums">
              <Route path=":userId" element={<Albums />} />
            </Route>
            <Route path="/albums/photos">
              <Route path=":albumId" element={<Photos />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </DarkMode.Provider>
    </>
  );
}
