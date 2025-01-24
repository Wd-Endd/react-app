function Thumbnail(props) {
    return (
        <div class="thumbnail">
            <img src={props.img}/>
            <div>
                <label>{props.title}</label>
            </div>
        </div>
    );
}

export default Thumbnail;