import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import Navigation from "./components/Navigation";
import Detail from "./routes/Detail";

function App() {
  return (
    // browser - Link To 이동하 경로 기술
    // hash : 주소에 # 붙음 / 검색엔진으로 못읽는 단점때문에 사용 잘 안함
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/movie-detail" component={Detail} />
    </HashRouter>
  );
}

export default App;
