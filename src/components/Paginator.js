import React from 'react'

export default function Paginator({page, total, onChangePage, onPutEmptyData}) {  
    function changePage(number) {
       let index = number !== 1 ? (number * 25) - 25 : 0;
       onChangePage(index, number);   
       onPutEmptyData()
    }
    return (
        <nav className="paginationCont">
            <ul className="pagination">
                {
                    total().map(item => {
                        return (
                            <li onClick={changePage.bind(this, item)} key={item} className="page-item">
                                <button 
                                    className= {page === item ? "page-link _active" : "page-link" } 
                                    disabled={page === item ? true : false}
                                    >{item}</button>
                            </li>
                        )
                    })
                }       
            </ul>
        </nav>
    )
}