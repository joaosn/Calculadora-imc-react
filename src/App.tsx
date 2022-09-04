import S from './App.module.css';
import powerImg from './assets/powered.png';
import leftArrowImg from './assets/leftarrow.png';
import { useState } from 'react';

import { levels,calculateImc, Level } from './helpers/imc';
import { GridItem } from './components/gridItem';

const App = () => {
  const [height, setheight] = useState<Number>(0);
  const [weight, setweight] = useState<Number>(0);
  const [toShow, setToShow] = useState<Level | null>(null);

  function calculate(){
    if(!height || !weight){
      alert("Digite os valores para calcular");
      return;
    }
    setToShow( calculateImc(+weight,+height) );
  }

  function exit(){
    setToShow(null);
    setheight(0);
    setweight(0);
  }

  return (
    <div className={S.main}>
       <header>
          <div className={S.headerContainer}>
              <img src={powerImg} alt="ops.." width={150} /><a href="https://github.com/joaosn"> with JoaoSN💙</a>
          </div>
          <div className={S.container}>
              <div className={S.colLeft}>
                 <h1>Calcule seu IMC</h1>
                 <p>
                 O índice de massa corporal (IMC) é uma medida internacional usada para calcular se uma pessoa está no peso ideal. Desenvolvido pelo polímata Lambert Quételet no fim do século XIX, trata-se de um método fácil e rápido para a avaliação do nível de gordura de cada pessoa, sendo, por isso, um preditor internacional de obesidade adotado pela Organização Mundial da Saúde (OMS)
                 </p>

                 <input 
                      type="number" 
                      placeholder="Digite a sua Altura. Em metros (ex: 1.75)" 
                      value={ height > 0  ? +height :'' }
                      onChange={e=> setheight(+e.target.value)}
                      disabled={(toShow)?true:false}
                  />

                  <input 
                      type="number" 
                      placeholder="Digite a seu Peso. Em KG (ex: 71.75)" 
                      value={ weight > 0  ? +weight :'' }
                      onChange={e=> setweight(+e.target.value)}
                      disabled={(toShow)?true:false}
                  />

                  <button onClick={calculate}  disabled={(toShow)?true:false} >Calcular</button>
              </div>

              <div className={S.colRight}>
                 {!toShow && 
                    <div className={S.grid}>
                        {
                          levels.map((item, index) => (
                            <GridItem key={index} item={item} />
                          ))
                        }
                    </div>
                 }
                 {toShow &&
                    <div className={S.itemBig}>
                        <div className={S.itemBigArrow} onClick={exit}>
                            <img src={leftArrowImg} alt="ops.." width={50} />
                        </div>
                        <GridItem item={toShow} />
                    </div>
                 }
              </div>
          </div>
       </header>
    </div>
  );
}

export default App;
