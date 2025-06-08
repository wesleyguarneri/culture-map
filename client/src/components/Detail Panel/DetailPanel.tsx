import styles from './DetailPanel.module.scss'
import { Button, Tile } from '@carbon/react';
import { Close } from '@carbon/icons-react';
import { useEffect, useState } from 'react';
import BookPanel from './Book Panel';
import config from 'config.json'

const API_URL = config.API_URL


const DetailPanel = ({ countryData, bookData, onClose }) => {
    const [view, setView] = useState("country");
    const [selectedBook, setSelectedBook] = useState<Book | null>(null);
    const [bookImages, setBookImages] = useState({}); 

    useEffect(() => {
        const fetchImages = async() => {
            const imageMap = {};
            for(const book of bookData){
                imageMap[book.isbn] = await getBookImage(book.isbn);
            }
            setBookImages(imageMap)
        }

        if (bookData.length > 0) {
            fetchImages();
        }
    }, [JSON.stringify(bookData)])

    const renderPanelBody = () => {
        if(view === 'country'){
            return (
                <div className={styles.panelBody}>
                    {bookData.map((book) => (
                        <Tile className={styles.bookTile} onClick={() => {setView("book"); setSelectedBook(book);}}>
                            <div className={styles.imageContainer}>
                                <img src={bookImages[book.isbn] || "/placeholder.jpg"} alt={book.title} />
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
        else if(view === 'book' ){
            return(
                <div className={styles.panelBody}>
                    <BookPanel 
                        bookData={selectedBook}
                        bookImage={ selectedBook ? bookImages[selectedBook.isbn] : '/placeholder.jpg'}
                    />
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

    const getBookImage = async (isbn: string) => {
        try {
            // const response = await fetch(`${API_URL}/GenPresignedUrl/images/${isbn}`,{
            //     method: "GET"
            // })
            // if (!response.ok) {
            //     throw new Error(`Response status: ${response.status}`);
            // }

            // const data = await response.json();
            // console.log('data',data)
            // return data.url
        }
        catch(error){
            console.error(error)
            return "/placeholder.jpg"
        }
    };

    return countryData ? (
        <div className={styles.detailPanel}>
            <div className={styles.panelTitle}>
                <h2 className={styles.countryTitle}>{countryData.name}</h2>
                <Button 
                    renderIcon={Close}  
                    className={styles.closeButton} 
                    iconDescription="Close" 
                    hasIconOnly 
                    onClick={onClose} 
                />
           </div>


            {renderPanelBody()}

            <div className={styles.panelFooter}>
                {view === "book" &&(
                    <Button className={styles.detailButton} size='sm' onClick={() => {setView("country")}}>
                        Back to Country
                    </Button>  
                )}
            </div>
                   
        </div>
    ) : <div></div>;
};


export default DetailPanel;