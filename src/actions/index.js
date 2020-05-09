import {
    ADD_LUNCH,
    ADD_PARTICIPANT
} from '../constants/actionTypes';

export const addLunch = (lunch) => ({
    type: ADD_LUNCH,
    lunch
});

export const addParticipant = (name) => ({
    type: ADD_PARTICIPANT,
    name
});
