import { useDispatch, useSelector } from 'react-redux';
import { changeCurrentMemory, changeCurrentSim } from '../../redux/slices/productContentSlice';

export default function ModelSelector({ memory, simTypesArr, header }) {
    const dispatch = useDispatch();
    const currentMemory = useSelector((state) => state.productContent.currentMemory);
    const simType = useSelector((state) => state.productContent.simType);

    console.log(currentMemory, simType);

    return (
        <div className='model__selector'>
            <div className='model__selector__header'>{header}</div>
            {memory?.map((item) => {
                return (
                    <div
                        onClick={() => {
                            dispatch(
                                changeCurrentMemory({
                                    currentMemory: item[0],
                                    currentPrice: item[1],
                                }),
                            );
                            console.log(currentMemory);
                        }}
                        key={item[0]}
                        className={
                            item[0] === currentMemory
                                ? 'model__selector__checkbox model__selector__checkbox_current'
                                : 'model__selector__checkbox'
                        }
                    >
                        {item[0] + ' ГБ'}
                    </div>
                );
            })}
            {simTypesArr?.map((item) => {
                return (
                    <div
                        key={item}
                        className={
                            item === simType
                                ? 'model__selector__checkbox model__selector__checkbox_current'
                                : 'model__selector__checkbox'
                        }
                        onClick={() => dispatch(changeCurrentSim(item))}
                    >
                        {item}
                    </div>
                );
            })}
        </div>
    );
}
