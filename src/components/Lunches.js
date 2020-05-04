import React from 'react';
import Lunch from './Lunch';

const Lunches = ({ lunches }) => (lunches.map(lunch => (
    <Lunch
        id={lunch.id}
        key={lunch.id}
        participants={lunch.participants}
        datetime={lunch.datetime}
        address={lunch.address}
        place={lunch.place}
        count={lunch.participants.length}
    />
)));

export default Lunches;
