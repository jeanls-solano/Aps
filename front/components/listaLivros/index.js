import React, { forwardRef } from "react";
import LivroImg from "../livroImg";
import style from '../../styles/components/listaLivros/style.module.scss';

export default function ListaLivros({ titulo }) {

  return (
    <div>
      <h1>{titulo}</h1>
      <div className={style.foto}>
        <LivroImg idLivro="0" />
        <LivroImg idLivro="3" />
        <LivroImg idLivro="5" />
        <LivroImg idLivro="9" />
        <LivroImg idLivro="13" />
        <LivroImg idLivro="16" />
        <LivroImg idLivro="17" />
        <LivroImg idLivro="26" />
      </div>
    </div>
  );
}
