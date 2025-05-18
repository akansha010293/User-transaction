export type User = { id: string; username: string };

export type Transaction = {
  id: string;
  date: string;
  reference: string;
  description: string;
  gst: string;
  amount_inc_gst: string;
};
