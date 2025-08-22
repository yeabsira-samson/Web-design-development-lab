//dom 
// exere 1

const container = document.getElementById("container");
for (let i = 1; i <= 4; i++) {
  const span = document.createElement("span");
  span.textContent = `Item ${i}`;
  container.appendChild(span);
}
document.querySelectorAll("#container span").forEach(span => {
  span.style.fontWeight = "bold";
});

//exer 3
class Employee {
  constructor(name, role) {
    this.name = name;
    this.role = role;
  }
  introduce = () => `${this.name}, ${this.role}`;
}
function Department() {
  this.employees = [];
}
Department.prototype.addEmployee = function(employee) {
  this.employees.push(employee);
};
Department.prototype.listRoles = function() {
  return this.employees.map(emp => emp.role);
};
const dept = new Department();
dept.addEmployee(new Employee("Alice", "Manager"));
dept.addEmployee(new Employee("Bob", "Developer"));
dept.addEmployee(new Employee("Eve", "Designer"));

dept.employees.forEach(function(emp) {
  console.log(emp.introduce());
});

console.log(dept.listRoles());
