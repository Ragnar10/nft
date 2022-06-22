// Localization
import { useTranslation } from 'react-i18next';
// Styles
import Styles from './styles.module.scss';

const CompanyInfo = () => {
    const { t } = useTranslation();

    return (
        <section className = { Styles.company_info }>
            <div className = { Styles.container }>
                <div className = { Styles.info_wrapper }>
                    <h3>{ t('company_info_legal_title') }</h3>
                    <p>
                        <span>{ t('company_info_legal_descr') }</span>
                        <span className = { Styles.info_url }>{ 'www.tornadocard.io' }</span>
                    </p>
                </div>
                <div className = { Styles.info_wrapper }>
                    <h3>{ t('company_info_director_title') }</h3>
                    <p>
                        <span>{ 'Holger Vopel' }</span>
                        <span>{ 'tornadocard.io@gmail.com' }</span>
                    </p>
                </div>
                <div className = { Styles.info_wrapper }>
                    <p>
                        <span>{ 'Tornado Entertainment Ltd.' }</span>
                        <span>{ 'Charles Court' }</span>
                    </p>
                </div>
                <div className = { Styles.info_wrapper }>
                    <p>
                        <span>{ '1st Floor, 189 Main Street. PO Box 4406' }</span>
                        <span>{ 'Tortola VG1110 British Virgin Islands ' }</span>
                    </p>
                </div>
                <div className = { Styles.info_wrapper }>
                    <p>
                        <span>{ t('company_info_number_descr') }</span>
                        <span>{ '2101074' }</span>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default CompanyInfo;
