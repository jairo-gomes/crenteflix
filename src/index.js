import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import CadastroVideo from  './pages/Cadastro/Video'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroCategoria from './pages/Cadastro/Categoria';


ReactDOM.render(
  <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/cadastro/video" component={CadastroVideo} />
        <Route path="/cadastro/categoria" component={CadastroCategoria}/>
        <Route component={() => (<div>Pagina 404</div>)} />
      </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

