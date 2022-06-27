export const UpdateTotalAccountVolume = (
  context: any,
  id: string,
  value: number,
) => {
  if (!id) return;
  const data = {
    swo_total: value,
  };

  return context.webAPI.updateRecord('swo_totalaccountvolumeap', id, data);
};
