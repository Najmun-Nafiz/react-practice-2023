

function Props(props) {
    return (
        <div className="card">
            <h3 className='cardTitle'>{props.cardTitleText}</h3>
            <p className='bottomText'>{props.cardDescText}</p>
        </div>
    );
}

export default Props;