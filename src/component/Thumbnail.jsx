const baseImg = "https://wimg.rule34.xxx/thumbnails/2209/thumbnail_8e7e5de1da0091a986e2e8347521e91e.jpg?11724122";
function Thumbnail(props) {
    return (
        <div className="thumbnail">
            <img src={ props.img || baseImg } alt=""/>
            <label>{ props.title || ";-;" }</label>
        </div>
    );
}

export default Thumbnail;