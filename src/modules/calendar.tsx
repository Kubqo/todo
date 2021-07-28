import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  frame: {
    border: "3px solid blue",
    height: "90vh",
    width: "50%",
    color: "black",
  },
  square: {
    border: "1px solid red",
    width: "calc(100% / 7)",
    textAlign: "center",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    minHeight: "calc(100% / 6)",
  }
}));


function CalendarComponent() {
  const classes = useStyles();

  const cols = [1, 2, 3, 4, 5, 6, 7]
  const rows = [1, 2, 3, 4, 5, 6]

  // var dt = new Date();
  // var month = dt.getMonth() + 1;
  // var year = dt.getFullYear();
  // var day

  // var daysInMonth = new Date(year, month, 0).getDate();
  // console.log(month)
  // console.log(year)
  // console.log(daysInMonth)
  // switch (new Date().getDay()) {
  //   case 0:
  //     day = "Sunday";
  //     break;
  //   case 1:
  //     day = "Monday";
  //     break;
  //   case 2:
  //     day = "Tuesday";
  //     break;
  //   case 3:
  //     day = "Wednesday";
  //     break;
  //   case 4:
  //     day = "Thursday";
  //     break;
  //   case 5:
  //     day = "Friday";
  //     break;
  //   case 6:
  //     day = "Saturday";
  // }

  // console.log(day)



  return (
    <div className={classes.frame}>
      {rows.map((row_id: number) => (
        <div key={row_id} className={classes.row}>
          {cols.map((col_id: number) => (
            <div key={row_id + col_id} className={classes.square}>
              {row_id}_{col_id}
            </div>))}
        </div>)

      )}
    </div>
  );
}


export default CalendarComponent;
