import styles from './DetailPanel.module.scss'

const DetailPanel = ({ countryData, bookData }) => {
    return countryData ? (
        <div className={styles.detailPanel}>
            { 
                <>
                    <h2>{countryData.name}</h2>
                    {bookData.map((book) => (
                        <h4>{book.title}</h4>

                    ))}
                   
                </>
            }
        </div>
    ) :
    (<div></div>);
};


export default DetailPanel;