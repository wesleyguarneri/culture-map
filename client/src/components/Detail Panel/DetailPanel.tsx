import styles from './DetailPanel.module.scss'
import { Button, Tile } from '@carbon/react';

const DetailPanel = ({ countryData, bookData }) => {
    return countryData ? (
        <div className={styles.detailPanel}>
            { 
                <>
                    <h2>{countryData.name}</h2>
                    {bookData.map((book) => (
                        <Tile className={styles.bookTile}>
                            <div className={styles.imageContainer}>

                            </div>
                            <div className={styles.detailContainer}>
                                <h4>{book.title}</h4>
                                <div className={styles.descriptionContainer}>
                                    <p className={styles.description}>{book.description}</p>
                                </div>

                            </div>
                        </Tile>

                    ))}
                   
                </>
            }
        </div>
    ) :
    (<div></div>);
};


export default DetailPanel;