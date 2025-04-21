import styles from './NewsCards.module.scss'
import {Button} from '@/common/components/Button';
import {IData_SnippetNews} from '@/app/newsAPI.types.ts';
import {Traffic} from '@/common/components/Traffic/Traffic.tsx';


type Props = {
    newItem: IData_SnippetNews
}

export const NewsCards = ({newItem}: Props) => {
    const {DP, TRAFFIC, TI,URL, DOM, CNTR, HIGHLIGHTS} = newItem
    console.log("HIGHLIGHTS", HIGHLIGHTS)

    const dateFormatter = () => {
        const dateObj: Date = new Date(DP);
        const options: Intl.DateTimeFormatOptions = {day: 'numeric', month: 'long', year: 'numeric'};
        return dateObj.toLocaleDateString('en-GB', options);
    }


    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <div className={styles.statistic}>
                    <span className={styles.date}>{dateFormatter()}</span>
                    <span className={styles.reach}>211K Reach</span>
                    <div className={styles.traffic}>Top Traffic:
                        {TRAFFIC.map(traffic => <Traffic key={traffic.count} item={traffic}/>)} </div>
                </div>
                <div className={styles.icons}>
                    <span className={styles.sentiment}>Positive</span>
                </div>
            </div>

            <h3 className={styles.title}>{TI}</h3>

            <div className={styles.meta}>
                <a className={styles.source} href="#">{DOM}</a>
                <span className={styles.country}>{CNTR}</span>
                <span className={styles.authors}>Emily C., Taormina A., et al.</span>
            </div>

            <p className={styles.snippet}>
                {HIGHLIGHTS}
            </p>

            <div className={styles.tags}>
                <span className={styles.tag}>AutoPilot 5000</span>
                <span className={styles.tag}>InnovTech</span>
                <span className={styles.tag}>autonomous driving</span>
                <span className={styles.tag}>key word</span>
                <span className={styles.tag}>key word</span>
                <span className={styles.showAll}>Show All +9</span>
            </div>

            <Button as="a"
                    href={URL}
                    className={styles.originalSourceButton}>Original Source</Button>

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