import React from 'react'

const DataBindingEx2 = () => {
    // tạo data mẫu
    const students = [
        { id: 1, name: 'Nguyễn Văn A', age: 20, grade: 'A' },
        { id: 2, name: 'Trần Thị B', age: 21, grade: 'B' },
        { id: 3, name: 'Lê Văn C', age: 19, grade: 'A' }
    ]

    return (
        <div className='p-6 bg-white rounded-lg shadow-2xl'>
            <h2 className='font-bold text-xl mb-4'>Ví dụ 2: Hiển thị dữ liệu</h2>
            {/* dùng vòng lặp để render các student => map */}
            <div className='space-y-2'>
                {/* dàn layout mẫu */}
                {/* <div className='p-3 bg-gray-100 rounded'>
                    <p>Nguyễn Văn A</p>
                    <p>Tuổi: 20 | Điểm: A</p>
                </div> */}
                {
                    // code javascript để render dữ liệu
                    students.map((student) => {
                        // LƯU Ý: PHẢI CÓ RETURN
                        return (
                            <div key={student.id} className='p-3 bg-gray-100 rounded'>
                                <p>{student.name}</p>
                                <p>Tuổi: {student.age} | Điểm: {student.grade}</p>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default DataBindingEx2