import React, { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

const Search = () => {
    // useNavigate - điều hướng đến trang khác
    const navigate = useNavigate();
    // useSearchParams - lấy và cập nhật tham số tìm kiếm trên URL
    const [searchParams, setSearchParams] = useSearchParams();

    // lấy giá trị từ query string
    const query = searchParams.get('q') || '';
    const page = searchParams.get('page') || '1';
    const size = searchParams.get('size') || '10';
    const sort = searchParams.get('sort') || 'asc';

    // state để nhận value từ query string, input
    const [searchInput, setSearchInput] = useState(query);

    const handleSearch = (event) => {
        event.preventDefault();
        // cập nhật query string ở trên URL
        setSearchParams({q: searchInput, page: '1'})
    }
    return (
        <div>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    placeholder='Nhập từ khóa tìm kiếm'
                    className='px-4 py-2 bg-gray-600 text-white rounded-lg'
                />
                <button type='submit' className='px-6 py-2 bg-blue-500 text-white rounded-md'>
                    Tìm kiếm
                </button>
            </form>

            <button
                className='px-4 py-2 rounded-lg bg-gray-500 text-white mt-4'
                onClick={() => navigate('/')}
            >
                Về trang chủ
            </button>
            <button
                className='px-4 py-2 rounded-lg bg-green-500 text-white mt-4'
                onClick={() => navigate('/about')}
            >
                Về trang about
            </button>
        </div>
    )
}

export default Search