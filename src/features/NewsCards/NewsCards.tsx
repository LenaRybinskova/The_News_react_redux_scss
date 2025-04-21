import styles from './NewsCards.module.scss'
import {Button} from '@/common/components/Button';
import {IData_SnippetNews} from '@/app/newsAPI.types.ts';
import {Traffic} from '@/common/components/Traffic/Traffic.tsx';
import {TextHighLight} from '@/common/components/TextHighLight/TextHighLight.tsx';
import {useSelector} from 'react-redux';
import {AppRootStateType} from '@/app/store.ts';
import {KeyWord} from '@/common/components/KeyWord/KeyWord.tsx';


type Props = {
    newItem: IData_SnippetNews
}

export const NewsCards = ({newItem}: Props) => {
    const {DP, TRAFFIC, TI, URL, DOM, CNTR, HIGHLIGHTS, SENT} = newItem

    const keyWords = useSelector<AppRootStateType, string[]>(state => state.app.keyWords);
    const keyWordsCount = useSelector<AppRootStateType, Record<string, number>>(state => state.app.keyWordsCount);

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
                    <span className={styles.sentiment}>{SENT}</span>
                </div>
            </div>

            <h3 className={styles.title}>{TI}</h3>

            <div className={styles.authorInfo}>
                <Button as="a" href={URL} className={styles.source}>{DOM}</Button>
                <span className={styles.country}>{CNTR}</span>
                <span className={styles.authors}>Emily C., Taormina A., et al.</span>
            </div>

            <p className={styles.snippet}>
                {HIGHLIGHTS.map(hl => <TextHighLight key={hl.length} hightLight={hl}/>)}
            </p>

            <div className={styles.tags}>
                {keyWords.map(kw => <KeyWord key={kw} kw={kw} count={keyWordsCount[kw.toLowerCase()] || 0}/>)}
            </div>

            <Button as="a" href={URL} className={styles.originalSourceButton}>OriginalSource</Button>

            <div className={styles.duplicates}>
                <span>Duplicates: <strong>192</strong></span>
                <div className={styles.duplicateCard}>
                </div>
            </div>

        </div>
    )
}