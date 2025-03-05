import styles from './DetailPanel.module.scss'
import { Button, Tile } from '@carbon/react';
import { Close } from '@carbon/icons-react';
import { useState } from 'react';


const DetailPanel = ({ countryData, bookData }) => {
    const [view, setView] = useState("country");

    const renderPanelBody = () => {
        if(view === 'country'){
            return (
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
            )
        }
        else if(view === 'book'){
            return(
                <div className={styles.panelBody}>
                    <p>Book details</p>
                </div>
            )
        }
        else {
            return(
                <div className={styles.panelBody}>
                </div> 
            )
        }
    }

    return countryData ? (
        <div className={styles.detailPanel}>
            <div className={styles.panelTitle}>
                <h2 className={styles.countryTitle}>{countryData.name}</h2>
                <Button renderIcon={Close} className={styles.closeButton} iconDescription="Close" hasIconOnly />
            </div>


            {renderPanelBody()}

            <div className={styles.panelFooter}>
            <Button className={styles.detailButton} size='sm' onClick={() => setView(view === "country" ? "book" : "country")}>
                    {view === "country" ? "View Details" : "Back to Country"}
                </Button>
            </div>
                   
        </div>
    ) :
    (<div></div>);
};


export default DetailPanel;