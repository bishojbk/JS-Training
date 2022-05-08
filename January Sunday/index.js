for (let year = 2014; year <= 2050; year++) {
  let d = new Date(year, 0, 1);
  if (d.getDay() === 0) {
    document.write("1st January is being a Sunday" + " " + year + "." + "<br>");
  }
}
