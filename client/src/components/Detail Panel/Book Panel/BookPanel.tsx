import styles from './BookPanel.module.scss'

const BookPanel = ({ bookData, bookImage }) => {
    console.log(bookData)

    return (
        <div className={styles.bookPanel}>
            <div className={styles.imageContainer}>
                <img src={bookImage} />
            </div>
            <div className={styles.titleContainer}>
                <b>{bookData?.title}</b>
            </div>
            <div className={styles.detailContainer}>
                <div className={styles.detailEntry}>
                    <div className={styles.detailLabel}>Author</div>
                    <div className={styles.detailValue}>
                        {bookData?.author}
                    </div>
                </div>
                <div className={styles.detailEntry}>
                    <div className={styles.detailLabel}>Year</div>
                    <div className={styles.detailValue}>
                        {bookData?.year}
                    </div>
                </div>
                <div className={styles.detailEntry}>
                    <div className={styles.detailLabel}>Genre</div>
                    <div className={styles.detailValue}>
                        {bookData?.genre}
                    </div>
                </div>
            </div>
            <div className={styles.descriptionContainer}>
                    <div className={styles.descriptionLabel}>Description</div>
                    <div className={styles.descriptionValue}>
                        {bookData?.description}
                    </div>
                </div>
        </div>
      );
}


export default BookPanel;