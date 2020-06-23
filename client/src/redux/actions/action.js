export const addLike = (payload) => ({
    type: 'ADD_LIKE',
    payload
})

export function fetchData(data) {
    return {
        type: 'FETCH_DATA',
        payload: data
    }
}
