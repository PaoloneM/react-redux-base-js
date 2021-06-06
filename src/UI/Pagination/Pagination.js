import React from 'react'

export const Pagination = ({postsPerpage,totalPosts}) => {
const pageNumbers = [];
for(let i = 1 ; i<= Math.ceil(totalPosts/postsPerpage); i++){
    pageNumbers.push(i)
}
    return (
    <nav>
        <ul className="pagination" style={{justifyContent:'center'}}>
            {pageNumbers.map(number=>(
                <li key={number} className="page-item">
                    <a href="!#" className="page-link" style={{color:"black"}}>
                        {number}
                    </a>
                </li>
            ))}
        </ul>
    </nav>
    )
}
