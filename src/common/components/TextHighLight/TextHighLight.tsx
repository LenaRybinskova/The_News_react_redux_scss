import {useSelector} from 'react-redux';
import {AppRootStateType} from '@/app/store.ts';
import styles from './TextHighLight.module.scss'

type Props = {
    hightLight: string
}


export const TextHighLight = ({hightLight}: Props) => {
    const keyWords = useSelector<AppRootStateType, string[]>(state => state.app.keyWords);

    const renderHighlightedText = () => {
        const regex = new RegExp(`\\b(${keyWords.join('|')})\\b`, 'gi');
        const parts = hightLight.split(regex);

        return parts.map((part, index) =>
            keyWords.some(kw => kw.toLowerCase() === part.toLowerCase())
                ? (<span key={index} className={styles.highlight}>{part}</span>)
                : (<span key={index}>{part}</span>)
        );
    };

    return <span>{renderHighlightedText()}</span>;
}
