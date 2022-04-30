import axios from "axios";



const initialState = {
    user: {
        email : '',
    }
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ENTER' : {
            return {
                ...state,
                user : {...action.user}
            }
        }
        case 'LOCAL' : {
            return {
                ...state,
                user : {...action.user}
            }
        }
        case 'LOGOUT' : {
            return  {
                ...state,
                user: {
                    email: '',
                }
            }
        }

        default : return state
    }
}

export const loginAccount = (obj,navigate) => {
    return (dispatch) => {
       navigate('/')
       localStorage.setItem('user',JSON.stringify(obj))
      return dispatch({type:'ENTER', user: obj})
    }
}

export const enterAccount = (obj, navigate) => {
    return (dispatch) => {
        axios.post('http://localhost:8080/login', obj)
            .then(({data}) => {
                navigate('/')
                localStorage.setItem('user', JSON.stringify(data.user))
                return dispatch({type: 'ENTER', user: data.user })
            })
            .catch(() => console.log('Не получилось'))
    }
}

export const getLocalStorage = (obj) => {
    return (dispatch) => {
        return dispatch({type: 'LOCAL', user: JSON.parse(localStorage.getItem('user'))})
    }
}

export const logOut = () => {
    return (dispatch) => {
        localStorage.removeItem('user')
        return dispatch({type: 'LOGOUT'})
    }
}
export const changeAccount = (data,user) =>{
    return (dispatch) =>{
        axios.patch(`http://localhost:8080/users/${user.id}`,data)
            .then((res)=>{
                localStorage.setItem('user',JSON.stringify((res.data)))
                return dispatch({type: 'ENTER', user: res.data })
            })
    }

}