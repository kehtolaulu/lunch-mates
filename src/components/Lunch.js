import React from 'react';
import Participants from './Participants';

const Lunch = ({ id, count, participants, address, place, datetime }) => {
    return (
        <div className="card">
            <h3>{place}</h3>
            <p>{address}</p>
            <p>{datetime}</p>
            <h2 className="blue-text" onClick={() => openParticipants(id)}>
                Participants <span className="count-badge">{count}</span>
            </h2>
            <div className="participants hidden" id={id}>
                <Participants participants={participants} key={id} />
            </div>
            <button className="participate-button">Participate</button>
        </div>
    )
};

const openParticipants = (id) => {
    let participants = document.getElementById(`${id}`);
    if (!participants) return;
    if (participants.classList.contains("hidden")) {
        participants.classList.remove("hidden");
    } else {
        participants.classList.add("hidden");
    }
};

export default Lunch;
