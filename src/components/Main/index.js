// Styles
import Styles from './styles.module.scss';
import Header from "../Header";
import Banner from "../Banner";
// Components

const Main = () => {
    return (
        <div className = { Styles.container }>
            <Header />
            <Banner />
        </div>
    );
};

export default Main;
