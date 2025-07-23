// todo
import { combineReducers } from "redux";
import * as L from './listEntities'
import * as LO from './listidOrders'
import * as LC from './listidCardidOrders'
import * as C from './cardEntities'

export const rootReducer = combineReducers({
    listEntitles: L.reducer,
    listdOrders:LO.reducer,
    listidCardidOrders: LC.reducer,
    cardEntitles: C.reducer
})