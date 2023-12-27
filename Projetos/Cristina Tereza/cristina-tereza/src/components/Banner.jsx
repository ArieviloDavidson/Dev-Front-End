import './Banner.css';
import Logo from '../images/CTLOGOBRANCO.png';

function Banner() {
  return (
    <div className='Banner'>
        <img src={Logo}/>
        <div className='AreaSelecao'>
          <h1>Busca de Imóveis</h1>
          <select name="select" id="tipo">
            <option value="ImóveisVendas" selected>Tipo</option>
            <option value="ImóveisVendas">Imóveis Vendas</option>
            <option value="ImóveisVendas">Imóveis Aluguel</option>
          </select>
          <select name="select2" id="local">
            <option value="Saquarema" selected>Local</option>
            <option value="Jaconé">Jaconé</option>
            <option value="Itaúna">Itaúna</option>
            <option value="Bacaxa">Bacaxá</option>
          </select>
        </div>
    </div>
  );
}

export default Banner;