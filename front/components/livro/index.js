import React, { forwardRef } from 'react';
import { dados } from "../../assistents/Popular_1";
import PropTypes from 'prop-types';

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
    idLivroInfo: PropTypes.shape({
        idLivro: PropTypes.string
    })
};
  
Livro.defaultProps = {
    idLivro: "0",
};

export default Livro;