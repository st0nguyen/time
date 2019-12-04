
// function countDay2(date2) {
//     let days_count2 = 0;
//     days_count2 += date2.getDate();

//     for (let i = date2.getMonth() - 1; i <= 0; i--) {
//         switch (i) {
//             case 0:
//             case 2:
//             case 4:
//             case 6:
//             case 7:
//             case 9:
//             case 11:
//                 days_count2 += 31;
//                 break;
//             case 3:
//             case 5:
//             case 8:
//             case 10:
//                 days_count2 += 30;
//                 break;
//             case 1:
//                 if (checkLeapYear(day2.getFullYear())) {
//                     days_count2 += 29;
//                 }
//                 else {
//                     days_count2 += 28;
//                 }
//                 break;
//         }
//     }
//     return days_count2;
// }

// function countDay1(date1) {
//     let days_count1 = 0;

//     switch (date1.getMonth()) {
//         case 0:
//         case 2:
//         case 4:
//         case 6:
//         case 7:
//         case 9:
//         case 11:
//             days_count1 = 31 - date1.getDate();
//             break;
//         case 3:
//         case 5:
//         case 8:
//         case 10:
//             days_count1 = 30 - date1.getDate();
//             break;
//         case 1:
//             if (checkLeapYear(date1.getFullYear())) {
//                 days_count1 = 29 - date1.getDate();
//             }
//             else {
//                 days_count1 = 28 - date1.getDate();
//             }
//             break;
//     }
//     for (let i = date1.getMonth() + 1; i <= 11; i++) {
//         switch (i) {
//             case 0:
//             case 2:
//             case 4:
//             case 6:
//             case 7:
//             case 9:
//             case 11:
//                 days_count1 += 31;
//                 break;
//             case 3:
//             case 5:
//             case 8:
//             case 10:
//                 days_count1 += 30;
//                 break;
//             case 1:
//                 if (checkLeapYear(date1.getFullYear())) {
//                     days_count1 += 29;
//                 }
//                 else {
//                     days_count1 += 28;
//                 }
//                 break;
//         }
//     }
//     return days_count1;

// }

// function countDay1_To_Day2(date2, date1) {
//     let days_count = countDay1(date1) + countDay2(date2);
//     let t = date2.getFullYear() - date1.getFullYear();
//     if (t > 2) {
//         for (let j = date1.getFullYear() + 1; j < date2.getFullYear(); j++) {
//             if (checkLeapYear(date1.getFullYear() + 1)) {
//                 days_count += 366;
//             }
//             else {
//                 days_count += 365;
//             }
//         }
//     }
//     return days_count;
// }