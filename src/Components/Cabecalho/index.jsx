import logo from './logo.png'
import search from './search.png'
import styles from './Cabecalho.module.scss'
export default function Cabecalho(){
   return(
      <header className= {styles.Cabecalho}>
         <img src= {logo} alt="logo do Alura space" />
         <div>
            <input type="text" placeholder="o que você procura"/>
            <img src={search} alt="icone de lupa" />
         </div>
      </header>
   )
}