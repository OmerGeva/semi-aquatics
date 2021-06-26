// export const useCalculateTimeLeft = (dropDate) => {
//     const startDate = new Date();

//     const startDateInUTC = new Date(startDate.getUTCFullYear(), startDate.getUTCMonth(), startDate.getUTCDate(), startDate.getUTCHours(), startDate.getUTCMinutes(), startDate.getUTCSeconds());
//     const endDateInUTC = new Date(dropDate.getUTCFullYear(), dropDate.getUTCMonth(), dropDate.getUTCDate(), dropDate.getUTCHours(), dropDate.getUTCMinutes(), dropDate.getUTCSeconds());
//     const difference = Date.parse(endDateInUTC) - Date.parse(startDateInUTC);
    
//     let timeLeft = {};
    
//     if (difference > 0) {
//       timeLeft = {
//         days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//         hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
//         minutes: Math.floor((difference / 1000 / 60) % 60),
//         seconds: Math.floor((difference / 1000) % 60)
//       };
//     }
    
//     return timeLeft;
//   };