export const CHANGE_PAGE = 'CHANGE_PAGE'

export const changePage = (data) => {
    return {
        type: CHANGE_PAGE, payload: data
    }
}
