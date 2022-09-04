import { Level } from "../../helpers/imc";
import S from "./GridItem.module.css";
import upImg from './../../assets/up.png';
import downImg from './../../assets/down.png';

type Props = {
    item:Level
};

export const GridItem = ({item}:Props) => {

    return (
        <div className={S.main} style={ {backgroundColor:item.color} }>
            <div className={S.gridIcon}>
                <img src={item.inco === 'up'?upImg:downImg} alt="ops." width={30} />
            </div>
            <div className={S.gridTitle}> {item.tittle} </div>

            {
              item.yourImc && 
                <div className={S.yourImc}>
                    Seu IMC é de: <span>{item.yourImc.toFixed(2)} kg/m²</span>
                </div>
            }

            <div className={S.gridInfo}>
               IMC está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
            </div>
        </div>
    );
}

