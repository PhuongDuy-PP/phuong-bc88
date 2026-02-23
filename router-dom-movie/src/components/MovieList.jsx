import React from 'react'

const MovieList = () => {
    return (
        <>
            <div>
                <h1 className="mb-8 text-3xl font-bold">Danh sách phim</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8" id="movieGrid">
                </div>
            </div>
        </>
    )
}

export default MovieList
