import "./ImageList.css"
import ImageShow from "./ImageShow";

function ImageList({ images }) {
    const renderedImage = images.map((image) => {
        return <ImageShow key={ image.id } image={ image } />
    }   
    )

    return(
        <div className="image-list">
            { renderedImage }
        </div>  
    )
}

export default ImageList;