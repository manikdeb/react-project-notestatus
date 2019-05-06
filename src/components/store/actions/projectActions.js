export const  createProject = (project) => {
    return( dispatch, getState, {getFirebase,getFirestore}) => {
        // make async call to database
        const firestore = getFirestore();

        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;

        firestore.collection('projects').add({
            ...project,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createAt: new Date()
        }).then( () => {
            dispatch({ type: 'CREARE_PROJECT', project});
        }).catch((err) => {
            dispatch({ type: 'CREARE_PROJECT_ERROE', err});
        })
        
    }
};