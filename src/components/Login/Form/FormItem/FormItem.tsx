import React, {FC} from 'react';
import s from './FormItem.module.scss'

const FormItem:FC<MyProps> = React.memo(({value, handleChange, type, handleKeyUp, text, placeholder}) => {
    return (
        <div className={s.item}>
            <div className={s.label}>
                {text}
            </div>
            <input type={type} value={value} onKeyUp={handleKeyUp} className={s.input} placeholder={placeholder}
                   onChange={(e) => handleChange(e.target.value)}/>
        </div>
    );
});

export default FormItem;

type MyProps = {
    value: string,
    handleChange: (value: string) => void,
    type: string,
    handleKeyUp: (e:any) => void,
    text: string,
    placeholder: string,
}