import {
    ADD_PARTICIPANT,
    ADD_LUNCH
} from '../constants/actionTypes';

// const initialState = {
//     lunches: [
//         {
//             id: "String"
//             participants: [
//                 {
//                     id: "String",
//                     name: "String"
//                 }
//             ],
//             datetime: "2020-02-02 15:45",
//             place: "String",
//             address: "String"
//         }
//     ]
// }

// const participants = (state = { participants: [] }, action) => {
//     switch (action.type) {
//         case ADD_PARTICIPANT:
//             return [
//                 ...state,
//                 {
//                     id: action.id,
//                     name: action.name
//                 }
//             ]
//         default:
//             return state;
//     }
// };

const lunches = (state = [
    {
        id: "1",
        participants: [{ id: "id", name: "Name Name" }],
        datetime: "2020-02-20",
        place: "Place",
        address: "Address"
    },
    {
        id: "2",
        participants: [{ id: "id2", name: "Name2 Name2" },{ id: "id3", name: "Name2 Name2" }],
        datetime: "2020-02-21",
        place: "Place2",
        address: "Address2"
    }
], action) => {
    switch (action.type) {
        case ADD_LUNCH:
            return [
                ...state,
                {
                    id: action.lunch.id,
                    participants: action.lunch.participants,
                    datetime: action.lunch.datetime,
                    place: action.lunch.place,
                    address: action.lunch.address
                }
            ]
        case ADD_PARTICIPANT:
            return state.map(lunch =>
                lunch.id === action.lunch.id ? {
                    ...lunch,
                    participants: [
                        ...lunch.participants,
                        {
                            id: action.participant.id,
                            name: action.participant.name
                        }
                    ]
                } : lunch
            )
        default:
            return state;
    }
};

export default lunches;
