import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import reduxThunk from 'redux-thunk';
import { AchivementReducer } from './reducers/AchivementReducer';
import { ProcessTypeReducer } from './reducers/ProcessTypeReducer';
import { ReportType } from './reducers/ReportType'
import { RoleReducer } from './reducers/RoleReducer';
import { ActivityReducer } from './reducers/ActivityReducer';
import { baiTapGameXucXacReducer } from './reducers/baiTapGameXucXacReducer';
import { ConfigActivityReducer } from './reducers/ConfigActivityReducer';
import { FanpageReducer } from './reducers/FanpageReducer';
import { LoginReducer } from './reducers/LoginReducer';


const rootReducer = combineReducers({
    AchivementReducer,
    ProcessTypeReducer,
    ReportType,
    RoleReducer,
    ActivityReducer,
    baiTapGameXucXacReducer,
    ConfigActivityReducer,
    FanpageReducer,
    LoginReducer,
})

let middleWare = applyMiddleware(reduxThunk);
let composeCustom = compose(middleWare, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export const store = createStore(rootReducer, composeCustom);