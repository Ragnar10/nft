// Core
import { useState } from 'react';
// Styles
import Styles from './styles.module.scss';

const PopupMint = (props) => {
    const [amount, setAmount] = useState('0');

    const total = (amount * 0.077).toFixed(3);

    const onChange = (event) => {
        const { value } = event.target;

        if (value > 10) return null;

        setAmount(event.target.value);
    };

    return (
        <section className = { Styles.popup }>
            <div className = { Styles.container }>
                <div className = { Styles.description }>
                    <h2 className = { Styles.description_caption }>
                        <span>{ 'MINT YOUR' }</span>
                        <span>{ 'TORNADO EXPRESS CARD' }</span>
                    </h2>
                    <p className = { Styles.description_info }>
                        <span>{ 'select amount' }</span>
                        <span>{ 'MAX 10' }</span>
                    </p>
                </div>
                <div className = { Styles.calculate }>
                    <input
                        type = 'text'
                        name = 'amount'
                        value = { amount }
                        maxLength = { 2 }
                        onChange = { onChange }
                        className = { Styles.calculate_field } />
                    <div className = { Styles.calculate_sum }>
                        <span>{ 'Price ----- 0.077 ETH' }</span>
                        <span>{ `Total ----- ${total} ETH` }</span>
                    </div>
                    <button
                        onClick = { () => props.onSetToggle(false) }
                        className = { Styles.btn }>{ 'Mint' }</button>
                </div>
            </div>
        </section>
    );
};

export default PopupMint;
