import Quizes from "../../Data/QuizData";
import { ACTIVATE_QUIZ, ADD_QUIZ, ADD_USER, CREATE_ROOM } from "../Constants/action-types";
import { LOGIN } from "../Constants/action-types";
import { LOGOUT } from "../Constants/action-types";

const initialeState = {
    users: [
        {
            username: "user",
            password: "user123"
        }
    ],
    currentUser:{
        username: "",
        password: ""
    },
    activeQuiz: {},
    quizes: Quizes,
    roomUrl:"",
    isLogged : false
}

const appReducer = (state = initialeState, action) =>{
    switch (action.type){
        case ADD_USER:
            return{
                ...state
                ,users: [...state.users, action.payload]
            }
        case LOGIN:
            return{
                ...state,
                currentUser: action.payload,
                isLogged: true
            }
        case LOGOUT:
            return{
                ...state,
                currentUser: action.payload,
                isLogged: false
            }
        case CREATE_ROOM:
            return{
                ...state,
                roomUrl: action.payload
            }
        case ACTIVATE_QUIZ:
            return{
                ...state,
                activeQuiz: action.payload
            }
        case ADD_QUIZ:
            return{
                ...state,
                quizes: [...state.quizes, action.payload]
            }
        default:
            return state
    }
}

export default appReducer;