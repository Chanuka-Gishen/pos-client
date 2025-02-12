export const formatCurrency = (amount) => {
  if (!amount) {
    return ' - ';
  }
  const formattedAmount = amount
    .toLocaleString('en-IN', {
      style: 'currency',
      currency: 'LKR',
      minimumFractionDigits: 2,
    })
    .replace('LKR', 'Rs.');
  return formattedAmount;
};
