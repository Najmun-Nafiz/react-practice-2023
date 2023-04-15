import '../App.css';

//For Date Contribute...
const date = new Date();
const monthName = date.getDate();
const yearName = date.getFullYear();

function Card() {
    return (
        <div className="card">
            <h3 className='cardTitle'>Practice Card</h3>
            <p className='bottomText'>Current Month is <code>{monthName}</code> and year is <code>{yearName}</code>.</p>
        </div>
    );
}

export default Card;