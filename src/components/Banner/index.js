// Styles
import Styles from './styles.module.scss';


const Banner = () => {
    return (
        <section className = { Styles.banner }>
            <div className = { Styles.container }>
                <div className = { Styles.banner_wrap }>
                    <h2>TORNADO</h2>
                    <p>EXPRESS CARD</p>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <div className = { Styles.btn_wrap }>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
