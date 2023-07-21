import React from "react";
import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import "./App.scss";

import KullanıcıEkle from "./pages/Kullanıcı/KullanıcıEkle/KullanıcıEkle";
import KullanıcıDüzenle from "./pages/Kullanıcı/KullanıcıDüzenle/KullanıcıDüzenle";
import KullanıcıSil from "./pages/Kullanıcı/KullanıcıSil/KullanıcıSil";

import VideoEkle from "./pages/Video/VideoEkle/VideoEkle";
import VideoSil from "./pages/Video/VideoSil/VideoSil";
import VideoDüzenle from "./pages/Video/VideoDüzenle/VideoDüzenle";

import AnketEkle from "./pages/Anket/AnketEkle/AnketEkle";
import AnketDüzenle from "./pages/Anket/AnketDüzenle/AnketDüzenle";
import AnketSil from "./pages/Anket/AnketSil/AnketSil";

import EtkinlikEkle from "./pages/Etkinlik/EtkinlikEkle/EtkinlikEkle";
import EtkinlikDüzenle from "./pages/Etkinlik/EtkinlikDüzenle/EtkinlikDüzenle";
import EtkinlikSil from "./pages/Etkinlik/EtkinlikSil/EtkinlikSil";
import { Router } from "react-router-dom/dist";

const App = () => {
  return (
    <div className="app">
      <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="kullanici-islemleri/add" element={<KullanıcıEkle />} />
          <Route path="kullanici-islemleri/edit" element={<KullanıcıDüzenle />} />
          <Route path="kullanici-islemleri/delete" element={<KullanıcıSil />} />
          

          <Route path="/video">
            <Route path="add" element={<VideoEkle />} />
            <Route path="edit" element={<VideoDüzenle />} />
            <Route path="delete" element={<VideoSil />} />
          </Route>

          <Route path="/anket">
            <Route path="add" element={<AnketEkle />} />
            <Route path="edit" element={<AnketDüzenle />} />
            <Route path="delete" element={<AnketSil />} />
          </Route>

          <Route path="/etkinlik">
            <Route path="add" element={<EtkinlikEkle />} />
            <Route path="edit" element={<EtkinlikDüzenle />} />
            <Route path="delete" element={<EtkinlikSil />} />
          </Route>
      </Routes>
    </div>
  );
};

export default App;
