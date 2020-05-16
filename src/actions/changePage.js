export const CHANGE_PAGE = 'CHANGE_PAGE'

export const changePage = (index, page) => {
    return {
        type: CHANGE_PAGE, payload: {index, page}
    }
}
