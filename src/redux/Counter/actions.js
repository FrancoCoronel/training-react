export const actions = {
    DECREMENT: 'DECREMENT',
    INCREMENT: 'INCREMENT'
}
  
  const actionCreators = {
    decrementCount: () => ({type: actions.DECREMENT}),
    incrementCount: () => ({ type: actions.INCREMENT})
  }
  
  export default actionCreators