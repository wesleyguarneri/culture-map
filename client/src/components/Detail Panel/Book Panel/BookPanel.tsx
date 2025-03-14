
const BookPanel = ({ bookData }) => {
    console.log(bookData)

    return (
        <div>
            {bookData?.title}
        </div>
      );
}


export default BookPanel;