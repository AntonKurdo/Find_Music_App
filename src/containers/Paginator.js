import Paginator from '../components/Paginator';
import { changePage } from '../actions/changePage';
import { connect } from 'react-redux';


export default connect(
    state => ({
        page: state.changePage.page,
        total: () => {
            let newArr = [];
            for (let i = 1; i <= Math.ceil(state.dataReducer.total / 25); i++) {
                newArr.push(i)
            }
            return newArr;
        }
    }),
    dispatch => ({
        onChangePage: (index, page) => {
            dispatch(changePage(index, page))
        },
        onPutEmptyData: () => {
            dispatch({type: 'PUT_DATA', payload: {data: []}})
        } 
    })
)(Paginator)