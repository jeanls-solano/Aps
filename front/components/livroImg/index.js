import React, { forwardRef } from 'react';
import { dados } from "../../assistents/Popular";
import PropTypes from 'prop-types';
import style from '../../styles/components/livroImg/style.module.scss';


const LivroImg = forwardRef(({idLivro }, ref) => (

    <div className={style.linhaDeFilmesfilmes}>
        <img src={dados["Image-URL-M"][idLivro]}></img>       
    </div>
));

LivroImg.propTypes = {
    idLivroInfo: PropTypes.shape({
        idLivro: PropTypes.string
    })
};
  
LivroImg.defaultProps = {
    idLivro: "0",
};

export default LivroImg;