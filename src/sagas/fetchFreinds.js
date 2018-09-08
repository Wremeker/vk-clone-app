import axios from 'axios';

import { call,
         put,
         takeEvery,
         takeLatest }          from 'redux-saga/effects';
import fetchFreinds            from './../actions/Freinds/FetchFreinds';
import requestedFreinds        from './../actions/Freinds/RequestedFreinds';
import requestedFreindsError   from './../actions/Freinds/RequestedFreindsError';
import requestedFreindsSuccess from './../actions/Freinds/RequestedFreindsSucces';



 function* watchFetchFreinds () {
    yield takeEvery('FETCH_FREINDS', fetchFreindsAsync)
} 

function* fetchFreindsAsync () {
    try {
        yield put(requestedFreinds());
        const data = yield call(() => {
            return axios.get('https://randomuser.me/api/?results=6')
                .then(res => res.data)
            }
          );
        
        yield put(requestedFreindsSuccess(data))
        console.log(data)
    } catch (error) {
        yield put(requestedFreindsError())   
    }
   
}

export default watchFetchFreinds;