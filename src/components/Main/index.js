// Styles
import Styles from './styles.module.scss';
// Components
import Header from '../Header';
import Banner from '../Banner';
import Footer from '../Footer';

const Main = () => {
    return (
        <div className = { Styles.container }>
            <Header />
            <main className = { Styles.main }>
                <Banner />
            </main>
            <Footer />
        </div>
    );
};

export default Main;
