import { takeEvery, put, call, select }  from 'redux-saga/effects';
import { putData } from '../actions/putData';
import { LOAD_DATA } from '../actions/loadData';




function* workerLoadData() { 
    let title = yield select(state => state.requsetReducer);
    
    function fetchData() {       
        return fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${title}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                "x-rapidapi-key": "919e0ab4b7mshcd2ba5c4ff5283bp1b3962jsnc3eb8a01a2e1"
            }
        })
        .then(response => response.json())    
    }
    const data = yield call(fetchData)   
    yield put(putData(data.data))
   
}



export function* watchLoadData() {
    yield takeEvery(LOAD_DATA, workerLoadData)
}




