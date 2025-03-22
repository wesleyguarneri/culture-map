import styles from './DetailPanel.module.scss'
import { Button, Tile } from '@carbon/react';
import { Close } from '@carbon/icons-react';
import { useEffect, useState } from 'react';
import BookPanel from './Book Panel';

const API_URL = "http://localhost:5000/api"


const DetailPanel = ({ countryData, bookData }) => {
    const [view, setView] = useState("country");
    const [selectedBook, setSelectedBook] = useState(null);
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
    }, [bookData])

    const renderPanelBody = () => {
        if(view === 'country'){
            return (
                <div className={styles.panelBody}>
                    {bookData.map((book) => (
                        <Tile className={styles.bookTile} onClick={() => {setView("book"); setSelectedBook(book);}}>
                            <div className={styles.imageContainer}>
                            <img 
  src="https://bookimage-bucket.s3.us-west-1.amazonaws.com/images/9780143039433?X-Amz-Expires=3600&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQESE3G77ERLTYYPO/20250322/us-west-1/s3/aws4_request&X-Amz-Date=20250322T155730Z&X-Amz-SignedHeaders=host&X-Amz-Signature=87e6102bd6aa73cb5b0d974b523cc276cb7b7ab3a330e0973dd2a3d175e8b3ab" 
  alt="Book Cover" 
  style={{ width: "200px", height: "auto" }}
/>
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
                    <BookPanel bookData={selectedBook}/>
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
            const response = await fetch(API_URL+`/GenPresignedUrl/images/`+isbn,{
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*"
                }
            })
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const data = await response.json();
            console.log('data',data)
            return data.url
        }
        catch(error){
            console.error(error)
            return ""
        }
    };

    return countryData ? (
        <div className={styles.detailPanel}>
            <div className={styles.panelTitle}>
                <h2 className={styles.countryTitle}>{countryData.name}</h2>
                <Button renderIcon={Close}  className={styles.closeButton} iconDescription="Close" hasIconOnly/>
            </div>


            {renderPanelBody()}

            <div className={styles.panelFooter}>
                <Button className={styles.detailButton} size='sm' onClick={() => {setView(view === "country" ? "book" : "country")}}>
                    {view === "country" ? "View Details" : "Back to Country"}
                </Button>
            </div>
                   
        </div>
    ) : <div></div>;
};


export default DetailPanel;