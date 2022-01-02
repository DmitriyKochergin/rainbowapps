import { createStore, applyMiddleware, Middleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducers from 'state/rootReducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

const middlewares: Middleware[] = [thunk];

if (process.env.NODE_ENV === 'development') {
  // Logger for Redux
  // const { createLogger } = require('redux-logger');
  // const logger: Middleware = createLogger({ collapsed: true });
  // middleware.push(logger);
}

const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(...middlewares)));

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
/** Application specific strongly typed wrapper around redux's useSelector() and useDispatch() */
export const useAppDispatch = () => useDispatch<any>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
