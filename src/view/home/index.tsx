/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';

import { Container, Footer } from './style';

import api from '../../services/api';
import NavBar from '../../components/navbar';

interface IProduct {
  id: number;
  image: string;
  title: string;
  category: string;
  price: number;
}

const home: React.FC = () => {

  const [ data, setData ] = useState<IProduct[]>([]);

  useEffect(() =>{
    api.get('').then(
      response => {
        setData(response.data)
      }
    )
  }, [])

  const handleCart = (index: number) => {
    const productStore = JSON.stringify(data[index]);

    localStorage.setItem(`@Produto-${index}`, productStore)
  }

  return (
    <>
    <NavBar />
    <Container>
      <h1>Ofertas incríveis no site. Olha só!</h1>
      <section>
        {
           data.map( (prod, index) => (
            <div className="product-content" key={prod.id}>
              <img src={prod.image} alt={prod.title} width="200" height="170" />
              <div className="product-info">
                <h4>{prod.title}</h4>
                <span>{prod.category}</span>
                <hr />
                <h6>R$ {prod.price}</h6>
              </div>
              <button onClick={() => handleCart(index)}>
                Comprar
              </button>
            </div>
           ))
        }
      </section>
    </Container>
    <Footer>
            <footer>
          <p>Todos os direitos reservados</p>
          <p>Dev<a href="https://github.com/pesdesigner"> pesdesigner</a></p>

          <div className="logos">
              <img className="logo-hc" src="https://graficoeweb.com.br/landing-page/assets/logo-hc.png" alt="Logotipo"/>
              <img width="200px" src="https://graficoeweb.com.br/landing-page/assets/logo-gama.png" alt="Logotipo"/>
          </div>
      </footer>
    </Footer>
    </>
  );
}

export default home;