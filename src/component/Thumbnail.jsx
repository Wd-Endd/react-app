function Thumbnail(props) {
    return (
        <div class="thumbnail">
            <img src={props.pic}"/>
            <div>
                <label>Title</label>
            </div>
        </div>
    );
}

export default Thumbnail;