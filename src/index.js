const students = [
  {
    id: 1,
    name: "Dinh",
    toan: 5,
    ly: 6,
    hoa: 7,
  },
  {
    id: 2,
    name: "Nam",
    toan: 10,
    ly: 8,
    hoa: 5,
  },
  {
    id: 3,
    name: "Tan",
    toan: 3,
    ly: 5,
    hoa: 5,
  },
  {
    id: 4,
    name: "Hung",
    toan: 9,
    ly: 7,
    hoa: 7,
  },
  {
    id: 5,
    name: "Tri",
    toan: 9,
    ly: 8,
    hoa: 9,
  },
  {
    id: 6,
    name: "Anh",
    toan: 9,
    ly: 10,
    hoa: 9,
  },
  {
    id: 7,
    name: "Binh",
    toan: 3,
    ly: 6,
    hoa: 9,
  },
];

const text_menu = `Tạo menu như sau: === QUẢN LÝ SINH VIÊN ===
1.Kiểm tra xem có phải tất cả sinh viên đều có các môn trên điểm trung bình không?
2.Kiểm tra xem có sinh viên nào xếp loại giỏi không?
3.Lọc ra các sinh viên xếp loại giỏi
4.Tìm 1 sinh viên xếp loại giỏi
5.Cộng cho mỗi sinh viên 1 điểm toán
6.Thêm thuộc tính tổng điểm 3 môn
7.Tính tổng điểm của các sinh viên
8.Tính điểm trung bình của các sinh viên
9.Sắp xếp danh sách sinh viên theo tổng điểm tăng dần
10.Thoát`;
let dk = true;
function KTtrenTB() {
  let a = students.every((value) => {
    return value.toan >= 5 && value.ly >= 5 && value.hoa >= 5;
  });
  if (a) {
    console.log("Không có học sinh có điểm dưới trung bình!");
  } else {
    console.log("Có học sinh có điểm dưới trung bình!");
  }
}
function ktLoaiGioi() {
  let a = students.some((value) => {
    return value.toan >= 8 && value.ly >= 8 && value.hoa >= 8;
  });
  if (a) {
    console.log("Có học sinh giỏi!");
  } else {
    console.log("Không có học sinh giỏi!");
  }
}
function locSVgioi() {
  let a = students.filter((value) => {
    return value.toan >= 8 && value.ly >= 8 && value.hoa >= 8;
  });
  for (let el of a) {
    for (let key in el) {
      console.log(key + ":" + el[key]);
    }
    console.log("=========================");
  }
}
function locMotSVgioi() {
  let a = students.find((value) => {
    return value.toan >= 8 && value.ly >= 8 && value.hoa >= 8;
  });
  for (let key in a) {
    console.log(key + ":" + a[key]);
  }
}
function congDiemToan() {
  return students.forEach((value) => {
    if (value.toan < 10) {
      value.toan = value.toan + 1;
    }
  });
}
function themThuocTinh() {
  students.forEach((value) => {
    return (value.sum = value.toan + value.hoa + value.ly);
  });
  for (let el of students) {
    for (let key in el) {
      console.log(key + ":" + el[key]);
    }
    console.log("=====================");
  }
}
function tinhTongDiem() {
  let sumall_arr = [];
  students.forEach((value) => {
    return sumall_arr.push(value.toan + value.ly + value.hoa);
  });
  return sumall_arr.reduce((sum_all, current) => {
    return (sum_all = sum_all + current);
  }, 0);
}
function diemTB() {
  let sumall_arr = [];
  let count = students.length;
  students.forEach((value) => {
    return sumall_arr.push(value.toan + value.ly + value.hoa);
  });
  let sum_all = sumall_arr.reduce((sum_all, current) => {
    return (sum_all = sum_all + current);
  }, 0);
  return (sum_all / count).toFixed(2);
}
function sapxep() {
  for (let i = 0; i < students.length - 1; i++) {
    let min = i;
    let luu;
    for (let j = i + 1; j < students.length; j++) {
      if (students[min].sum > students[j].sum) {
        min = j;
      }
    }
    if (min != i) {
      luu = students[min];
      students[min] = students[i];
      students[i] = luu;
    }
  }
  for (let el of students) {
    for (let key in el) {
      console.log(key + ":" + el[key]);
    }
    console.log("=====================");
  }
  return students;
}
const hilu = new Promise((resolve, reject) => {
  let check = false;
  if (check) {
    resolve("oke la");
  } else {
    reject("Thất bại gòi!");
  }
});
const hilu2 = new Promise((resolve, reject) => {
  let check = false;
  if (check) {
    resolve("oke la2");
  } else {
    reject("Thất bại gòi2!");
  }
});
const async_ex = async () => {
  try {
    const a = await hilu;
    console.log(a);
    const b = await hilu2;
    console.log(b);
  } catch (err) {
    console.log(err);
  }
};
async_ex();
// hilu
//   .then((data) => {
//     console.log(data);
//     return hilu2;
//   })
//   .then((data) => {
//     console.log("data2:", data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

do {
  let luachon = prompt(text_menu);
  luachon = Number(luachon);
  switch (luachon) {
    case 1:
      KTtrenTB();
      console.log("++++++++++++++++++++++++++++++++++");
      break;
    case 2:
      ktLoaiGioi();
      console.log("++++++++++++++++++++++++++++++++++");
      break;
    case 3:
      locSVgioi();
      console.log("++++++++++++++++++++++++++++++++++");
      break;
    case 4:
      locMotSVgioi();
      console.log("++++++++++++++++++++++++++++++++++");
      break;
    case 5:
      congDiemToan();
      console.log("Cộng điểm thành công!");
      console.log("++++++++++++++++++++++++++++++++++");
      break;
    case 6:
      themThuocTinh();
      console.log("++++++++++++++++++++++++++++++++++");
      break;
    case 7:
      const sum_all = tinhTongDiem();
      console.log(sum_all);
      console.log("++++++++++++++++++++++++++++++++++");
      break;
    case 8:
      const TB = diemTB();
      console.log(TB);
      console.log("++++++++++++++++++++++++++++++++++");
      break;
    case 9:
      const newh = sapxep();
      console.log(newh);
      console.log("++++++++++++++++++++++++++++++++++");
      break;
    case 10:
      console.log("Good Bye");
      dk = false;
      break;
  }
} while (dk);
