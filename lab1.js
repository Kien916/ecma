function calculateBMI(weight, height) {
    const BMI = weight/(height*height);
    let thongbao=""
    if(BMI<18.5){
        thongbao = "thiếu cân";
    }
    if(BMI>= 18.5 && BMI <= 24.9){
        thongbao = "bình thuờng";
    }
    if(BMI>25 && BMI <= 29.9){
        thongbao = "thừa cân";
    }
    else{
        thongbao = "béo phì"
    }
    const thongso = `BMI:${BMI.toFixed(2)} - phân loại:${thongbao}`;
    return thongso;
  // TODO: Sử dụng const cho các hằng số
  // TODO: Sử dụng template literals để tạo thông báo
  // TODO: Phân loại BMI theo:
  // - Dưới 18.5: Thiếu cân
  // - 18.5 - 24.9: Bình thường
  // - 25 - 29.9: Thừa cân
  // - Trên 30: Béo phì
}

// Ví dụ sử dụng
console.log(calculateBMI(70, 1.75)); // "BMI: 22.86 - Phân loại: Bình thường"