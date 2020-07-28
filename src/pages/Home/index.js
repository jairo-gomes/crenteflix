import React from 'react';
import Menu from '../../components/Menu';
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carusel from '../../components/Carousel';
import Footer from '../../components/Footer';

function Home() {
  return (
    <div style={{ background: '#141414' }}>
      <Menu />
      
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[1].url}
        
      />

      <Carusel 
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      
      />

      <Carusel 
        category={dadosIniciais.categorias[1]}
      />

      <Carusel 
        category={dadosIniciais.categorias[2]}
      />

      <Carusel 
        category={dadosIniciais.categorias[3]}
      />


      <Carusel 
        category={dadosIniciais.categorias[5]}
      />

      <Footer />
    </div>  
  );
}

export default Home;
