import axios from "axios"

export const START_FETCHING = 'START_FETCHING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';
export const fetchComic = () => dispatch => {
    dispatch({ type: 'START_FETCHING' })
    axios
        .get('https://cors-anywhere.herokuapp.com/http://xkcd.com/info.0.json')
        .then(res => dispatch({ type: FETCH_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }));
};
