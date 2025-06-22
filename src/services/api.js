export const getDashboardData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        tasksToday: 5,
        pending: 12,
        late: 3,
        completedThisMonth: [30, 45, 60, 40, 70, 50],
      });
    }, 500);
  });
};