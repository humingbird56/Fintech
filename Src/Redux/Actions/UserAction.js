import axios from 'axios'

export function fetchData() {
  return dispatch => {
    dispatch(fetchDataBegin());
    axios({
			method: 'GET',
			url: 'http://pokeapi.salestock.net/api/v2/pokemon/',
    })
    .then(({data}) => {
			dispatch(fetchDataSuccess(data))
		})
		.catch(error => dispatch(fetchdataFailure(error)))
  };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export const FETCH_DATA_BEGIN   = 'FETCH_DATA_BEGIN';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export const fetchDataBegin = () => ({
  type: FETCH_DATA_BEGIN
});

export const fetchDataSuccess = data => ({
  type: FETCH_DATA_SUCCESS,
  payload: { data }
});

export const fetchDataError = error => ({
  type: FETCH_DATA_FAILURE,
  payload: { error }
});