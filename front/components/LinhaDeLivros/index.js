import React, { useState } from "react";
import LivroImg from "../livroImg";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import style from '../../styles/components/listaLivros/style.module.scss';

export default function LinhaDeLivros({ titulo }) {

  return (
    <div className={style.linhaDeFilmes}>
      <h2>{titulo}</h2>
      <div className={style.linhaDeFilmesEsquerda} >
        <NavigateBeforeIcon style={{ fontSize: 50 }} />
      </div>
      <div className={style.linhaDeFilmesDireita} >
        <NavigateNextIcon style={{ fontSize: 50 }} />
      </div>
      <div className={style.linhaDeFilmesareaDaLista}>
        <div
          className={style.linhaDeFilmeslista}
        >
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
    </div>
  );
}

//esquerda
//-direita
//--areaDaLista
