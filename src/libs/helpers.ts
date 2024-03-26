interface ActionResponse {
  status: 'success' | 'fail';
  message: string;
  data: any;
}

export function actionResponse(
  status: 'success' | 'fail',
  message: string,
  data: any
): ActionResponse {
  return {
    status,
    message,
    data,
  };
}
