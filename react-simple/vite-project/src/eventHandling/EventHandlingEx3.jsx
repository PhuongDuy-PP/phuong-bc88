// Import React (không dùng hook)
import React from 'react'

// Component ví dụ 3: Event Handling với Mouse Events
// Xử lý các sự kiện chuột: hover, click, double click
// Lưu ý: Không dùng hook, sử dụng DOM manipulation trực tiếp (chỉ để demo)
const EventHandlingExample3 = () => {
    const handleMouseEnter = () => {
        const boxElement = document.getElementById('hover-box');
        const hoverStatus = document.getElementById('hover-status');
        const hoverText = document.getElementById('hover-text');

        boxElement.className = 'p-8 border-2 rounded-lg text-center cursor-pointer bg-blue-100'
        hoverStatus.textContent = 'Có'
        hoverText.textContent = 'Mouse đang ở đây'
    }

    const handleMouseLeave = () => {
        const boxElement = document.getElementById('hover-box');
        const hoverStatus = document.getElementById('hover-status');
        const hoverText = document.getElementById('hover-text');

        boxElement.className = 'p-8 border-2 rounded-lg text-center cursor-pointer bg-gray-50 border-gray-300'
        hoverStatus.textContent = 'Không'
        hoverText.textContent = 'Di chuyển vào đây'
    }

    const handleClick = () => {
      const clickElement = document.getElementById('click-count');
      let currentCount = parseInt(clickElement.textContent);
      currentCount += 1;
      clickElement.textContent = currentCount;
    }

    const handleDoubleClick = () => {
      const clickElement = document.getElementById('double-click-count');
      let currentCount = parseInt(clickElement.textContent);
      currentCount += 1;
      clickElement.textContent = currentCount;
    }

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-4">Ví dụ 3: Mouse Events</h3>
      
      {/* 
        Box tương tác với chuột
        - onMouseEnter: khi di chuột vào
        - onMouseLeave: khi di chuột ra
        - onClick: khi click một lần
        - onDoubleClick: khi double click
        - id="hover-box": để có thể cập nhật style từ JavaScript
      */}
      <div
        id="hover-box"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        onDoubleClick={handleDoubleClick}
        className="p-8 border-2 rounded-lg text-center cursor-pointer transition-all bg-gray-50 border-gray-300"
      >
        <p id="hover-text" className="text-lg font-semibold mb-2">
          Di chuột vào đây
        </p>
        <p className="text-sm text-gray-600">
          Click hoặc double click để đếm
        </p>
      </div>

      {/* Hiển thị thống kê */}
      <div className="mt-6 space-y-3">
        <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
          <span className="font-medium">Số lần click:</span>
          <span id="click-count" className="text-2xl font-bold text-blue-600">0</span>
        </div>
        
        <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
          <span className="font-medium">Số lần double click:</span>
          <span id="double-click-count" className="text-2xl font-bold text-green-600">0</span>
        </div>
        
        <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
          <span className="font-medium">Trạng thái hover:</span>
          <span id="hover-status" className="font-bold text-gray-400">Không</span>
        </div>
      </div>

      {/* Nút reset */}
      <button
        // onClick={handleReset}
        className="w-full mt-4 bg-gray-500 text-white py-2 rounded font-bold hover:bg-gray-600"
      >
        Reset
      </button>

      {/* 
        Ghi chú về các event
        - text-sm: font size nhỏ
        - text-gray-500: màu chữ xám
      */}
      <div className="mt-4 text-sm text-gray-500 space-y-1">
        <p>• onClick: Sự kiện khi click một lần</p>
        <p>• onDoubleClick: Sự kiện khi double click</p>
        <p>• onMouseEnter: Sự kiện khi di chuột vào</p>
        <p>• onMouseLeave: Sự kiện khi di chuột ra</p>
      </div>
    </div>
  )
}

export default EventHandlingExample3

