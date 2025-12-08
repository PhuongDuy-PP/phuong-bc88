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

let currentFilter = "all"

// filter task theo status: tất cả, chưa hoàn thành, đã hoàn thành
const filterTasksByStatus = () => {
    if (currentFilter === "active") {
        return lisTasks.filter((task) => task.status !== "completed");
    }

    if (currentFilter === "completed") {
        return lisTasks.filter((task) => task.status === "completed");
    }

    return lisTasks; // all
}

const initFilterButtons = () => {
    const btnAll = document.querySelectorAll(".filter-btn");
    btnAll.forEach((btn) => {
        btn.onclick = () => {
            currentFilter = btn.dataset.filter;
            // clear danh sách task hiện tại
            document.getElementById("todoList").innerHTML = "";
            // render lại danh sách task dựa trên bộ lọc
            renderTasks();
        }
    })
}

// hàm hiển thị danh sách công việc
const renderTasks = () => {
    // thêm step clear data cũ trước khi render lại
    document.getElementById("todoList").innerHTML = "";
    let filteredTasks = filterTasksByStatus();
    console.log("Filtered Tasks: ", filteredTasks);
    const totalCount = lisTasks.length;
    const activeCount = lisTasks.filter((task) => task.status !== "completed").length;
    const completedCount = totalCount - activeCount;

    document.getElementById("totalCount").innerHTML = totalCount;
    document.getElementById("activeCount").innerHTML = activeCount;
    document.getElementById("completedCount").innerHTML = completedCount;

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
        checkbox.checked = filteredTasks[i].status === "completed";
        // thêm event onChange cho checkbox
        checkbox.onchange = () => {
            const task = lisTasks.find((task) => task.id === filteredTasks[i].id);
            if (task) {
                task.status = checkbox.checked ? "completed" : "todo";
            }
            renderTasks();
        }
        // todo: thêm sự kiện cho checkbox
        divInfo.appendChild(checkbox);

        const span = document.createElement("span");
        span.className = "font-semibold";
        span.innerText = `${filteredTasks[i].id} - ${filteredTasks[i].name}`; // lisTasks[i] = Task("ID-1", "Implement login", "todo")
        divInfo.appendChild(span);

        li.appendChild(divInfo);

        const divAction = document.createElement("div");
        const btnEdit = document.createElement("button");
        btnEdit.className = "p-2 bg-yellow-500 text-white rounded-md mr-2";
        btnEdit.innerText = "Sửa";
        // thêm event onclick cho nút sửa
        btnEdit.onclick = () => {
            // B1: lấy thông tin task cần sửa
            const task = lisTasks.find((task) => task.id === filteredTasks[i].id);
            // B2: dùng prompt để hiển thị hộp thoại nhập liệu và truyền current task info
            const updatedName = prompt("Cập nhật tên task: ", task.name);
            if(updatedName === null) return; // người dùng bấm hủy prompt
            const trimmedName = updatedName.trim();
            if(trimmedName === ""){
                alert("Tên task không được để trống");
                return;
            }

            // happy case: người dùng update task
            task.name = trimmedName;
            renderTasks();
            // vào prompt

            // LƯU Ý: kiểm tra value từ prompt trước khi cho update task
            // kiểm tra khác null, remove khoảng trắng thừa

            // B3: cập nhật lại tên task trong mảng lisTasks
            
            // B4: render lại danh sách task
        }
        // append function để handle logic sửa task
        divAction.appendChild(btnEdit);

        const btnDelete = document.createElement("button");
        btnDelete.className = "p-2 bg-red-500 text-white rounded-md";
        btnDelete.innerText = "Xóa";
        // thêm event onclick cho nút xóa
        btnDelete.onclick = () => {
            // flow: xác nhận có muốn xóa hay không

            // B1: lấy thông tin task cần xóa
            const task = lisTasks.find((t) => t.id === filteredTasks[i].id);
            const isConfirmed = confirm(`Bạn có muốn xóa task ${task.name} không?`);
            if(!isConfirmed) return; // người dùng bấm hủy xóa

            // B2: filter mảng lisTasks để loại bỏ task cần xóa
            lisTasks = lisTasks.filter((t) => t.id !== task.id);

            // B3: render lại danh sách task
            renderTasks();
        }
        // append function để handle logic xóa task
        divAction.appendChild(btnDelete);

        li.appendChild(divAction);

        document.getElementById("todoList").appendChild(li);

        // handle hidden icon "không có task nào"
        const noTaskDiv = document.getElementById("emptyState");
        // dùng toán tử 3 ngôi để render
        // 0: false, > 0 : true
        noTaskDiv.style.display = filteredTasks.length === 0 ? "block": "none";
    }

}
initFilterButtons();
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

// DOM tới button "Xóa tất cả công việc đã hoàn thành"
// sau đó thêm sự kiện onclick để xóa tất cả công việc đã hoàn thành
const btnClearCompleted = document.getElementById("clearCompleted");
btnClearCompleted.onclick = () => {
    // B1: lọc mảng lisTasks để loại bỏ các task có status = completed
    // let lisTasks = [
    //     new Task("ID-1", "Implement login", "todo"),
    //     new Task("ID-2", "Design database schema", "todo"),
    //     new Task("ID-3", "Set up  CI/CD pipeline", "completed")
    // ];

    let otherTasks = [];
    for(let i = 0; i < lisTasks.length; i++) {
        if(lisTasks[i].status !== "completed") {
            otherTasks.push(lisTasks[i]);
        }
    }
    lisTasks = otherTasks;
    renderTasks();
}

//update status task
