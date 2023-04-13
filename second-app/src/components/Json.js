

function Json(props) {
    const { cardTitleText, cardDescText } = props;
    return (
        <div className="card">
            <h3 className='cardTitle'>{cardTitleText}</h3>
            <p className='bottomText'>{cardDescText}</p>
        </div>
    );
}

export default Json;