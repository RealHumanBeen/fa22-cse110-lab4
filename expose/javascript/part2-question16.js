for (const prop in statistic) {
  if ((prop[0] == 'r') || (statistic[prop] % 2 == 1) ) {
    console.log(statistic[prop]);
  }
}