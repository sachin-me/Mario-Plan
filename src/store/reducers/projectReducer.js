const initState = {
  projects: [
    {id: 1, title: 'peace', content: 'santi santi santi !!!'},
    {id: 2, title: 'my code', content: 'error error error !!!'},
    {id: 3, title: 'sleep', content: 'zzz zzz zzz !!!'}
  ]
}

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT": {
      console.log('created project', action.project);
      return state;
    }
    
    case "CREATE_PROJECT": {
      console.log('create project error', action.err);
      return state;
    }
    
    default:
      return state;
  }
}

export default projectReducer