export default function CardBlog(props) {
    return(
        <>   
            <img src={props.src} className="card-img-top" alt={props.alt} />
                <div className="card-body">
                    <h3 className="card-title">{props.title}</h3>
                    <p className="card-text">{props.text}</p>
                    <a href="#" className="btn btn-primary">Voir</a>
                </div>
            <span className="p-3" style={{backgroundColor:'#EEE'}}>Publié le <time dateTime={props.date}>{props.span}</time></span>
        </>
    )
}  