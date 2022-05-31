class Student {
    constructor(firstName, lastName) {
        this.firstName = firstName,
            this.lastName = lastName,
            this.tardies = 0,
            this.scores = []
    }
    fullName() {
        return `Your full name is ${this.firstName} ${this.lastName}`
    }
    markLate() {
        this.tardies += 1
        if (this.tardies >= 3) {
            return `YOU ARE EXPELLED!!!`
        }
        return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`
    }
    addScore(score) {
        this.scores.push(score)
        return this.scores
    }
    calculateAverage() {
        let sum = this.scores.reduce(function (a, b) { return a + b })
        return sum/this.scores.length
    }
    static enrollStudents() {
        return `Enrolling students!`
    }
}
