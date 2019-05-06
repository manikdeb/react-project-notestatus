const iniState = {
    projects: [
        {id: '1', title: 'DLD', content: 'Digital Logic Design'},
        {id: '2', title: 'DSD', content: 'Digital System Design'},
        {id: '3', title: 'SPL', content: 'Structure Programming Language'}
    ]
}

const projectReudcer = (state= iniState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('create project', action.project);
            return state; 
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err);
            return state;
        default:
        return state;
    }
}

export default projectReudcer;