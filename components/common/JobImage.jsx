import { Image } from "react-native";
import { useState } from "react";

const DUMMY_IMAGE = "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg";

const JobImage = ({uri, style}) => {
  const [image, setImage] = useState(uri ? uri : DUMMY_IMAGE);
  return (
    <Image source={{ uri: image }} style={style} resizeMode="contain" onError={() => setImage(DUMMY_IMAGE)}/>
  );
}

export default JobImage
