function squirrel_play(temp, is_summer) {
    if (is_summer) {
        if (60 <= temp && temp >= 100) {
            return true
        } else {
            return false
        }
    } else if (60 <= temp && temp >= 90) {
        return true
    } else {
        return false
    }
}

let output = squirrel_play(60, false)
console.log(output)

// export default squirrel_play
