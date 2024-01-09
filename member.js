function skillsMember() {
    var member = {
        name: 'John',
        age: 30,
        skills: ['JS', 'React', 'Node'],
        salary: 2000,
        bonus: 1000,
        getSalary: function () {
            return this.salary;
        },
        getBonus: function () {
            return this.bonus;
        },
        getTotalIncome: function () {
            return this.salary + this.bonus;
        }
    };
    console.log(member.getTotalIncome());
}