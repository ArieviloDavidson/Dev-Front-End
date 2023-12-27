import './Header.css';

function Header() {
  return (
    <div className='corpo'>
        <div className='itens'>
            <span className='item'><a href="#">Cristina Tereza</a></span>
            <span className='item'><a href="#">Quem somos</a></span>
            <span className='item'><a href="#">Serviços</a></span>
            <span className='item'><a href="#">Fale Conosco</a></span>
            <span className='item'><a href="#">Admin</a></span>
        </div>
    </div>
  );
}

export default Header;