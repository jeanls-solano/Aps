import LinhaDeLivros from "../components/LinhaDeLivros/index";
import style from '../styles/components/modal/style.module.scss';


export default function Home() {

  return (
    <div>
      <div>
        Titulo
      </div>
      <section className={style.listas}>  
        <div>
          <LinhaDeLivros titulo="romance"/>
        </div>
      </section>

    </div>

  )
}

//<Book bookId="56597884" />
