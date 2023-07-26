
import StyledImage from "../StyledImage";

import { styled } from "@phntms/css-components";
import css from "./styles.module.css";


interface ImageViewerProps {
  url: string;
  loading: boolean;
}

const Container = styled('div', {
  css: css.container
});

const ImageViewer = ({url, loading}: ImageViewerProps) => {
  return (
    <Container>
      <StyledImage src={url} alt="Generated Image" blur={loading} width={640} height={640}/>
    </Container>
  )
}

export default ImageViewer;