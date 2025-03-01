import styles from './DetailPanel.module.scss'
import { Button } from '@carbon/react';

const DetailPanel = ({ countryData, bookData }) => {
    return countryData ? (
        <div className={styles.detailPanel}>
            { 
                <>
                    <h2>{countryData.name}</h2>
                    {bookData.map((book) => (
                        <div className='styles.bookCard'>
                            
                            <h4>{book.title}</h4>
                        </div>

                    ))}
                   
                </>
            }
        </div>
    ) :
    (<div></div>);
};


export default DetailPanel;