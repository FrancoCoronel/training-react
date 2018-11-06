export const actions = createTypes([
    'GET_BOOKS',
    'GET_BOOKS_SUCCESS',
    'GET_BOOKS_FAILURE'
  ], '@@BOOKS');
  
  const actionCreators = {
    // Es una función que devuelve una función.
    // El middleware va a ver que cuando se haga
    // dispatch(actionCreators.getBooks());
    // va a encontrar que el resultado de eso es una función y
    // lo va a invocar con `dispatch` y `getState`.
    getBooks: () => async dispatch => {
      dispatch({ type: actions.GET_BOOKS });
      const response = await BookService.getBooks();
      if (response.ok) {
        dispatch({
          type: actions.GET_BOOKS_SUCCESS,
          payload: response.data
       });
      } else {
         dispatch({
          type: actions.GET_BOOKS_FAILURE,
          payload: response.problem
       });
      }
    }
  }
  
  export default actionCreators