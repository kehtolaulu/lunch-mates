import React from 'react';

const Participants = (participants) => {
    return participants.participants.map(participant => (
        <p className="participant-item" key={participant.id}>{participant.name}</p>
    ));
};

export default Participants;
