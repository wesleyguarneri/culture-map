import styles from './DetailPanel.module.scss'
import { Button, Tile } from '@carbon/react';

const DetailPanel = ({ countryData, bookData }) => {
    return countryData ? (
        <div className={styles.detailPanel}>
            { 
                <>
                    <div className={styles.panelTitle}>
                        <h2 className={styles.countryTitle}>{countryData.name}</h2>
                    </div>
                    <div className={styles.panelBody}>
                        {bookData.map((book) => (
                            <Tile className={styles.bookTile}>
                                <div className={styles.imageContainer}>

                                </div>
                                <div className={styles.detailContainer}>
                                    <h4 className={styles.tileTitle}>{book.title}</h4>
                                    <div className={styles.descriptionContainer}>
                                        <p className={styles.description}>{book.description}</p>
                                    </div>

                                </div>
                            </Tile>

                        ))}
                    </div>
                    <div className={styles.panelFooter}>
                        <Button className={styles.detailButton} size='sm'>
                            View Details
                        </Button>
                    </div>
                   
                </>
            }
        </div>
    ) :
    (<div></div>);
};


export default DetailPanel;