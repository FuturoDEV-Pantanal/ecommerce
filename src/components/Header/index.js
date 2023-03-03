import './styles.css';

export default function Header( { usuario } ) {
  return (
    <header>
        <div className='logotipo'>
            FutureCommerce
        </div>
        <div className='nome-usuario'>
            Bemvindo, {usuario}
        </div>
    </header>
  )
}
