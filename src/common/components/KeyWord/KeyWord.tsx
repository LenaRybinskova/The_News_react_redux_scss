import styles from './KeyWord.module.scss'

type Props = {
    kw: string
    count: number
}

export const KeyWord = (props: Props) => {
    const {kw, count} = props

    return (
        <div className={styles.tag}>{kw} {count}</div>
    )
}