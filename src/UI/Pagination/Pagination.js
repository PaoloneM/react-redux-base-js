import React from 'react'

export const Pagination = ({postsPerpage,totalPosts,setCurrentPage}) => {
const pageNumbers = [];
for(let i = 1 ; i<=2; i++){
    pageNumbers.push(i)
}
    return (
    <nav>
        <ul className="pagination" style={{justifyContent:'center'}}>
            {pageNumbers.map(number=>(
                <li key={number} className="page-item" onClick={()=>{setCurrentPage(number)} } >
                    <a  className="page-link" style={{color:"black"}}>
                        {number}
                    </a>
                </li>
            ))}
        </ul>
    </nav>
    )
}
