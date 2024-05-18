export const isDateOlderThan18Months = (currentDate, targetDate) => {
  // parsuje data
  const parseDate = (dateString) => {
    let parsedDate = new Date(dateString);
    if (!isNaN(parsedDate)) return parsedDate;

    // Attempt to parse custom formats (e.g., DD.MM.YYYY)
    const parts = dateString.split('.');
    if (parts.length === 3) {
      const day = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1; // JS počítá měsíce od nuly bacha !!!
      const year = parseInt(parts[2], 10);
      parsedDate = new Date(year, month, day);
      if (!isNaN(parsedDate)) return parsedDate;
    }

    return new Date(NaN);
  };

  const current = parseDate(currentDate);
  const target = parseDate(targetDate);

  // Check if valid
  if (isNaN(current) || isNaN(target)) {
    console.error("Invalid Date");
    return false;
  }

  const monthsDiff = (current.getFullYear() - target.getFullYear()) * 12 + current.getMonth() - target.getMonth();

  // Return true or false
  return monthsDiff >= 18;
};
