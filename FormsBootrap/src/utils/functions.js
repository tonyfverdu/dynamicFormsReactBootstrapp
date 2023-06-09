export function todayDate() {
    const date = new Date()
    const dateFormat = date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate()

    return dateFormat
  }