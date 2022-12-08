import configureStore from 'redux-mock-store' //ES6 modules



describe('add user redux', () => {
    const mockStore = configureStore();
    const reduxStore = mockStore();

// You would import the action from your codebase in a real scenario
const addemployee = () => ({ type: 'ADD_EMP' })
 
it('should dispatch action', () => {
 
  // Initialize mockstore with empty state
  const initialState = {}
  const store = mockStore(initialState)
 
  // Dispatch the action
  store.dispatch(addemployee())
 
  // Test if your store dispatched the expected actions
  const actions = store.getActions()
  const expectedPayload = { type: 'ADD_EMP' }
  expect(actions).toEqual([expectedPayload])
})
});