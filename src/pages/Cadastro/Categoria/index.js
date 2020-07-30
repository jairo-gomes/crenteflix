import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handleChange(event) {
    // const { getAttribute, value } = event.target;
    setValue(
      event.target.getAttribute('name'),
      event.target.value,
    );
  }


  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
    ? 'http://localhost:8080/categorias'
    : 'https://crenteflix.herokuapp.com/categorias'
    fetch(URL).then(async (response) => {
       const resposta = await response.json()
        setCategorias([
          ...resposta
        ])
    })
    // setTimeout(() => {
    //     setCategorias([
    //       ...categorias,
    //       {
    //         "id": 1,
    //         "nome": "Front-End",
    //         "descricao": "uma coisa qualquer",
    //         "cor": "#cbd1ff"
    //       },
    //       {
    //         "id": 2,
    //         "nome": "Back-End",
    //         "descricao": "uma coisa qualquer",
    //         "cor": "#cbd1ff"
    //       },
    //       {
    //         "id": 3,
    //         "nome": "Front-End",
    //         "descricao": "uma coisa qualquer",
    //         "cor": "#cbd1ff"
    //       },
    //     ])
    // }, 2000);
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de categoria
        {values.nome}
      </h1>

      <form onSubmit={function handleSubmit(event) {
        event.preventDefault();

        setCategorias([
          ...categorias,
          values,
        ]);

        setValues(valoresIniciais);
      }}
      >

        <FormField
          label="Nome da categoria"
          name="nome"
          type="text"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          name="descricao"
          type="textarea"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="cor"
          name="cor"
          type="color"
          value={values.cor}
          onChange={handleChange}
        />

        <button>
          Cadastrar
        </button>

      </form>

      {categorias.length === 0 && (
        <div>
        Loading...
      </div>
      )}
      

      <ul>
        {categorias.map((categoria, index) => (
          <li key={`${categorias}${index}`}>
            {categoria.nome}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para Home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
