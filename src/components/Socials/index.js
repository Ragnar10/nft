// Styles
import Styles from './styles.module.scss';

const Socials = (props) => {
    return (
        <div
            className = { `${Styles.socials} ${props.classWrapper}` }
            style = { props.style ? props.style : null }>
            <ul className = { `${Styles.socials_list} ${props.classList}` }>
                <li>
                    <a
                        href = { '' } target = { '_blank' }
                        rel = 'noreferrer'
                        className = { Styles.socials_opensea } />
                </li>
                <li>
                    <a
                        href = { '' } target = { '_blank' }
                        rel = 'noreferrer'
                        className = { Styles.socials_insta } />
                </li>
                <li>
                    <a
                        href = { '' } target = { '_blank' }
                        rel = 'noreferrer'
                        className = { Styles.socials_telegram } />
                </li>
                <li>
                    <a
                        href = { '' } target = { '_blank' }
                        rel = 'noreferrer'
                        className = { Styles.socials_discord } />
                </li>
            </ul>
        </div>
    );
};

export default Socials;
