import './styles.css';

export default function Produto( { codigo, descricao, marca, preco, imagem } ) {
  return (
    <div className='cartao-produto'>
        <img src={imagem} alt='foto do produto' className= 'produto-img' />
        <div>
            Código: {codigo}
        </div>
        <div className='produto-descricao'>
            {descricao}
        </div>
        <div>
            Marca: {marca}
        </div>
        <div>
            R$ {preco}
        </div>
        <button>Detalhar</button>
    </div>
  )
}
