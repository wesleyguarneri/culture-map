import styles from './BookPanel.module.scss'

const BookPanel = ({ bookData, bookImage }) => {
    console.log(bookData)

    return (
        <div className={styles.bookPanel}>
            {bookData?.title}
        </div>
      );
}


export default BookPanel;