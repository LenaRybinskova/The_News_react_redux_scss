import styles from './NewsCards.module.scss'
import {Button} from '@/common/components/Button';

export const NewsCards = () => {
    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <div className={styles.statistic}>
                    <span className={styles.date}>18 Jun 2024</span>
                    <span className={styles.reach}>211K Reach</span>
                    <span className={styles.traffic}>Top Traffic: Austria 38% USA 12% Italian 8%</span>
                </div>
                <div className={styles.icons}>
                    <span className={styles.sentiment}>Positive</span>
                    <div className={styles.iconBox}>i</div>
                    <div className={styles.iconBox}></div>
                </div>
            </div>

            <h3 className={styles.title}>
                Antivirus leggero: i migliori e più efficaci (free e a pagamento) 2024
            </h3>

            <div className={styles.meta}>
                <a className={styles.source} href="#">Punto-info.it</a>
                <span className={styles.country}>🇦🇹 Austria</span>
                <span className={styles.authors}>Emily C., Taormina A., et al.</span>
            </div>

            <p className={styles.snippet}>
               filtered text
            </p>

            <div className={styles.tags}>
                <span className={styles.tag}>AutoPilot 5000</span>
                <span className={styles.tag}>InnovTech</span>
                <span className={styles.tag}>autonomous driving</span>
                <span className={styles.tag}>key word</span>
                <span className={styles.tag}>key word</span>
                <span className={styles.showAll}>Show All +9</span>
            </div>

            <Button as="a" href="https://www.globalsecuritymag.com/Mobile-bankers-left-vulnerable-47,20200819,101944.html" className={styles.originalSourceButton} >Original Source</Button>

            <div className={styles.duplicates}>
                <span>Duplicates: <strong>192</strong></span>
                <div className={styles.duplicateCard}>
                    <span>18 Jun 2024 • 211K Top Reach</span>
                    <p>
                        Antivirus leggero: i migliori e più efficaci (free e a pagamento) 2024
                    </p>
                    <span>🇦🇹 ria.ru • Emily C., Taormina A., et al.</span>
                </div>
            </div>

            <button className={styles.viewDuplicates}>View Duplicates</button>
        </div>
    )
}