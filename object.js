var student = { id: 787, name: "Hasib", phone: 15662 };
var student2 = { id: 225, name: "Hasan", phone: 85541 };
//finding one value
var phonePorName = "phone";
var phoneNo1 = student.phone;
var phoneNo2 = student["phone"];
var phoneNo = student[phonePorName];

//Update phone number
student2.phone = 54641;
student2["phone"] = 222444;
student2[phonePorName] = 885221111;

//adding new property
student.address = "Dhaka";
student.address = "West Rajabazar";
student2["address"] = "Sylet";


console.log(student);
console.log(student2);