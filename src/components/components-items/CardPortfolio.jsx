export default function Card(props) {
    return(
        <>   
            <img src={props.src} className="card-img-top" alt={props.alt} />
                <div className="card-body">
                    <h2 className="card-title">{props.title}</h2>
                    <p className="card-text">{props.text}</p>
                    <a href="#" className="btn btn-outline-primary">Voir</a>
                </div>
            <span className="p-3" style={{backgroundColor:'#EEE'}}>{props.span}</span>
        </>
    )
}  