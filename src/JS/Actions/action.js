import { ACTIVATE_QUIZ, ADD_QUIZ, ADD_USER, CREATE_ROOM } from "../Constants/action-types";
import { LOGIN } from "../Constants/action-types";
import { LOGOUT } from "../Constants/action-types";

function generateRandomString(length) {
    return Math.random().toString(36).substr(2, length);
}

export const addUser = newUser => {
    return {
        type: ADD_USER,
        payload: newUser
    }
}

export const login = loggedUser =>{
    return {
        type: LOGIN,
        payload: loggedUser
    }
}

export const logout = (clearCurrentUser={
                            username: "",
                            password: ""})=>{
                                return {
                                    type: LOGOUT,
                                    payload: clearCurrentUser
                                }
                            }

export const createNewRoom = (newRoom= generateRandomString(12))=>{
    return {
        type: CREATE_ROOM,
        payload: newRoom
    }
}

export const activateQuiz = quiz =>{
    return{
        type: ACTIVATE_QUIZ,
        payload: quiz
    }
}

export const addQuiz = quiz =>{
    return{
        type: ADD_QUIZ,
        payload: quiz
    }
}