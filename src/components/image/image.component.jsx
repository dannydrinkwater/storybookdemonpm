import "./image.styles.css";

const Image = ({ src, alt, ...rest }) => {
    return (
        <img src={src} alt={alt} {...rest} />
    )
}

export default Image;