import React, { useState, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./Users";
import Posts from "./Posts";
import Header from "../mains/Header";
import DarkMode from "../helpers/DarkMode";
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
          </Routes>
        </BrowserRouter>
      </DarkMode.Provider>
    </>
  );
}
