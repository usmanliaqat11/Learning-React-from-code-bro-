import profilepic from './assets/download.jpeg'

function Card()
{
    return (
        <div className="card">
            <img className="card-image" src={profilepic} alt="profile pic " />
            <h2 className='card-title'>Usman Liaqat</h2>
            <p className='card-text'> i am hunting for job and sleeps a lot in a day</p>
        </div>
    );
}

export default Card