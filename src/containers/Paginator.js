import Paginator from '../components/Paginator';
import { changePage } from '../actions/changePage';
import { connect } from 'react-redux';


export default connect(
    state => ({
        total: () => {
            let newArr = [];
            for (let i = 1; i <= Math.ceil(state.dataReducer.total / 5); i++) {
                newArr.push(i)
            }
            return newArr;
        }
    }),
    dispatch => ({
        onChangePage: (index) => {
            dispatch(changePage(index))
        },
    })
)(Paginator)