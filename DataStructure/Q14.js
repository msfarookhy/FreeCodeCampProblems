let userActivity = {
    id: 23894201352,
    date: 'January 1, 2017',
    data: {
      totalUsers: 51,
      online: 42
    }
  };
  
  // change code below this line
  userActivity ["id"]=23894201352;
  userActivity ["date"]='January 1, 2017';
  userActivity ["data, [totalUsers]=51, [online]=45"];
  userActivity.data.online =45;
  // change code above this line
  
  console.log(userActivity);