import React, { forwardRef } from 'react';
import { dados } from "../../assistents/Popular_1";

const Livro = forwardRef(({idLivro }, ref) => (

    <div>
        <h1>Livro</h1>
        {dados["Book-Title"][idLivro]}
        <p></p>
        {dados["Book-Author"][idLivro]}
        <p></p>
        <img src={dados["Image-URL-M"][idLivro]}></img>       
        <p></p>
        {dados["num_ratings"][idLivro]}
        <p></p>
        {dados["avg_rating"][idLivro]}
        <p></p>
        {dados["ISBN"][idLivro]}
    </div>
));

Livro.propTypes = {
    idLivro: String,
    
  };
  
Livro.defaultProps = {
    idLivro: "0",
  };

export default Livro;