// tạo đối tượng Task
class Task {
    constructor(id, name, status) {
        this.id = id;
        this.name = name;
        this.status = status;
    }
}

// "[ID-1] Implement login",
// "[ID-2] Design database schema",
// "[ID-3] Set up  CI/CD pipeline",

let lisTasks = [
    new Task("ID-1", "Implement login", "todo"),
    new Task("ID-2", "Design database schema", "todo"),
    new Task("ID-3", "Set up  CI/CD pipeline", "todo")
];
// let filteredTasks = lisTasks;

// filter task theo status: tất cả, chưa hoàn thành, đã hoàn thành
const filterTasksByStatus = () => {
    // học OOP để có thể lưu trữ dữ liệu của task: id, tên task, status
    // kết hợp với hàm filter của mảng
    // B1: lấy 3 button: tất cả, chưa hoàn thành, đã hoàn thành
    const btnAll = document.querySelectorAll(".filter-btn");
    let currentFilter = "all"
    btnAll.forEach((btn) => {
        btn.onclick = () => {
            
        }
    })
    // renderTasks();
}

// hàm hiển thị danh sách công việc
const renderTasks = () => {

    let filteredTasks = filterTasksByStatus();
    console.log("Filtered Tasks: ", filteredTasks);
    // const li = document.createElement ("li");
    // li.innerHTML = `
    // <li class="flex item-center jusity-center bg-gray-100 p-4 rounded-lg">
    //                 <span class="font-semibold">[ID-1] Implement login</span>
    //                 <div>
    //                      <button class="p-2 bg-yellow-500 text-white rounded-md">Sửa</button>
    //                      <button class="p-2 bg-red-500 text-white rounded-md">Xóa</button>
    //                 </div>
                   

    //              </li>
    // `
    //renderTasks
    for (let i = 0; i < filteredTasks.length; i++) {
        const li = document.createElement ("li");
        // => <li></li>
        // <li class="flex item-center justify-between bg-gray-100 p-4 rounded-lg">
        //      <div>
        //          <input type="checkbox" class="mr-2"/>
        //          <span class="font-semibold">${lisTasks[i]}</span>
        //      </div>
        //                 <div>
        //                     <button class="p-2 bg-yellow-500 text-white rounded-md">Sửa</button>
        //                     <button class="p-2 bg-red-500 text-white rounded-md">Xóa</button>
        //                 </div>
        //             </li>
        li.className = "flex item-center justify-between bg-gray-100 p-4 rounded-lg";
        // vì trong thẻ li có 2 thẻ div con
        // => B1: tạo element div
        // => B2:  appendChild để add thẻ div vào trong thẻ li
        const divInfo = document.createElement("div");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "mr-2";
        // todo: thêm sự kiện cho checkbox
        divInfo.appendChild(checkbox);

        const span = document.createElement("span");
        span.className = "font-semibold";
        span.innerText = `${lisTasks[i].id} - ${lisTasks[i].name}`; // lisTasks[i] = Task("ID-1", "Implement login", "todo")
        divInfo.appendChild(span);

        li.appendChild(divInfo);

        const divAction = document.createElement("div");
        const btnEdit = document.createElement("button");
        btnEdit.className = "p-2 bg-yellow-500 text-white rounded-md mr-2";
        btnEdit.innerText = "Sửa";
        // append function để handle logic sửa task
        divAction.appendChild(btnEdit);

        const btnDelete = document.createElement("button");
        btnDelete.className = "p-2 bg-red-500 text-white rounded-md";
        btnDelete.innerText = "Xóa";
        // append function để handle logic xóa task
        divAction.appendChild(btnDelete);

        li.appendChild(divAction);

        document.getElementById("todoList").appendChild(li);

        // handle hidden icon "không có task nào"
        const noTaskDiv = document.getElementById("emptyState");
        // dùng toán tử 3 ngôi để render
        // 0: false, > 0 : true
        noTaskDiv.style.display = lisTasks.length ? "none": "block";
    }

}
renderTasks()

// tạo task mới
// B1: tìm thẻ button Thêm công việc
const btnAdd = document.getElementById("addBtn");
btnAdd.onclick = () => {
    // B2: Lấy giá trị từ thẻ input
    const taskInput = document.getElementById("todoInput");
    const newTask = taskInput.value;
    // B3: Thêm task mới vào mảng lisTasks
    // lisTasks.push(newTask);
    // tạo id tự động cho task mới
    // dựa vào số lượng phần tử hiện tại trong mảng
    const newId = lisTasks.length + 1;
    const taskId = `ID-${newId}`;
    const newTaskObj = new Task(taskId, newTask, "todo");
    lisTasks.push(newTaskObj);

    // Xóa hết thẻ li hiện tại trong ul#todoList 
    // để tránh việc lặp lại công việc khi render lại
    // innerHTML: thay đổi nội dung bên trong thẻ
    // setInterval
    // setInterval(() => {
    //     document.getElementById("todoList").innerHTML = "";
    // }, 2000);

    // setInterval(() => {
    //     renderTasks();
    // }, 3000);
    document.getElementById("todoList").innerHTML = "";
    renderTasks();

    // B4: Xóa giá trị trong thẻ input
    taskInput.value = "";
}

//update status task