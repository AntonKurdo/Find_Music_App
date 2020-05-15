export const PUT_DATA = 'PUT_DATA'

export const putData = (data) => {
    return {
        type: PUT_DATA, payload: data
    }
}
