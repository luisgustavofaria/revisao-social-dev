import styles from './title.module.scss'

export default function Title(props) {
  return <h1 className={styles.title}>{props.children}</h1>
}
