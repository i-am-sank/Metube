const initState = {
    account: '',
    dvideo: null,
    videos: [],
    loading : true,
    latestHash: null,
}

const rootreducer = (state = initState,action) => {
    if (action.type === 'ADD_DATA'){
        return {
            ...state,
            videos:action.videos,
            dvideo:action.dvideo,
            account:action.account,
            latestHash:action.latestHash
        }
    }
    return state;
} 

export default rootreducer;