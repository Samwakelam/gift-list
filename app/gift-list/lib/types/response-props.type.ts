export type ResponseProps = {
  status: number;
  json: { message: string; data?: any; error?: any };
};
