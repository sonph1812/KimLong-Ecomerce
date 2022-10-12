import React from 'react'

const Pagination = ({productsPerPage, totalProducts, paginate}) => {
    const pageNumbers = [];
    const totalPages = Math.ceil(totalProducts/productsPerPage)
    for (let i = 1;i<=totalPages;i++) {
        pageNumbers.push(i)
    }
    return (
        <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
            <ul className="inline-flex items-center -space-x-px">
                {pageNumbers.map(number => (
                    <li key={number} >
                        <a onClick={() => paginate(number)} class="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300  rounded-2xl hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
export default Pagination