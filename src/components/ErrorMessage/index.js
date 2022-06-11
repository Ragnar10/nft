import Styles from './styles.module.scss';

const ErrorMessage = ({ text }) => {
    if (!text) return null;

    return (
        <div className = { Styles.error }>
            <div />
            <span>{ text }</span>
        </div>
    );
};

export default ErrorMessage;

