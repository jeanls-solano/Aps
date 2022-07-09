import Livro from '../components/livro';

export default function Home() {

  return (
    <div>
      <div>
        Titulo
      </div>
      <div>
        <Livro idLivro="3"  />
        <Livro idLivro="5"/>
        <Livro />
      </div>

    </div>


  )
}

//<Book bookId="56597884" />
