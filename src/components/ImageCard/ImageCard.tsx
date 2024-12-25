import { ImageCardProps } from "../App/App.types";
import GridItem from "../GridItem/GridItem";

const ImageCard: React.FC<ImageCardProps> = ({
  color,
  alt,
  urls,
  openModal,
}) => {
  return (
    <GridItem>
      <div style={{ backgroundColor: color, borderColor: color }}>
        <img
          src={urls.small}
          alt={alt || "No description available"}
          onClick={() =>
            openModal(urls.regular, alt || "No description available")
          }
        />
      </div>
    </GridItem>
  );
};

export default ImageCard;
