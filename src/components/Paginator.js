import React from 'react'

export default function Paginator({total, onChangePage}) {

    function changePage(number, e) {
       let index = number !== 1 ? (number * 25) - 25 : 0;
       onChangePage(index);
       e.target.setAttribute('disabled', true)
       console.log(e.target)
    }
    return (
        <nav className="paginationCont">
            <ul className="pagination">
                {
                    total().map(item => {
                        return (
                            <li onClick={changePage.bind(this, item)} key={item} className="page-item"><button className="page-link">{item}</button></li>
                        )
                    })
                }       
            </ul>
        </nav>
    )
}