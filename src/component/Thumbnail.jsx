function Thumbnail(props) {
    return (
        <div class="thumbnail">
            <img src={props.img} alt=""/>
            <label>{props.title}</label>
        </div>
    );
}

export default Thumbnail;