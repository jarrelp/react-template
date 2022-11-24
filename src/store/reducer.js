// third-party
import { combineReducers } from 'redux';

// project imports
import departmentReducer from './slices/department';
import quizReducer from './slices/quiz';
import resultReducer from './slices/result';

import menuReducer from './slices/menu';

// ==============================|| COMBINE REDUCER ||============================== //

const reducer = combineReducers({
    department: departmentReducer,
    quiz: quizReducer,
    result: resultReducer,
    menu: menuReducer
});

export default reducer;
