export const getNumberMonth = () => {
  let date = new Date();
  date.setDate(date.getDate() - 1);
  return () => {
    date.setDate(date.getDate() + 1);
    const dayNumber = date.getDate();
    const monthNumber = date.getMonth();
    const dayCount = date.getDay();
    let dayName = null;
    let monthName = null;
    switch (monthNumber) {
      case 0: {
        monthName = "январь";
        break;
      }
      case 1: {
        monthName = "февраль";
        break;
      }
      case 2: {
        monthName = "март";
        break;
      }
      case 3: {
        monthName = "апрель";
        break;
      }
      case 4: {
        monthName = "май";
        break;
      }
      case 5: {
        monthName = "июнь";
        break;
      }
      case 6: {
        monthName = "июль";
        break;
      }
      case 7: {
        monthName = "август";
        break;
      }
      case 8: {
        monthName = "сентябрь";
        break;
      }
      case 9: {
        monthName = "октябрь";
        break;
      }
      case 10: {
        monthName = "ноябрь";
        break;
      }
      case 11: {
        monthName = "декабрь";
        break;
      }
    }

    switch (dayCount) {
      case 0: {
        dayName = "воскресенье";
        break;
      }
      case 1: {
        dayName = "понедельник";
        break;
      }
      case 2: {
        dayName = "вторник";
        break;
      }
      case 3: {
        dayName = "среда";
        break;
      }
      case 4: {
        dayName = "четверг";
        break;
      }
      case 5: {
        dayName = "пятница";
        break;
      }
      case 6: {
        dayName = "суббота";
        break;
      }
    }

    return [dayName, dayNumber + " " + monthName];
  };
};
