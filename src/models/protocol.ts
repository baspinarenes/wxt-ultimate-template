export interface MessageProtocol {
  example: {
    message: number;
    return: boolean;
  };
  example2: {
    message: {
      action: string;
      data?: any;
    };
  };
  mountCounterModalUi: {};
  unmountCounterModalUi: {};
  showCounterModalUi: {};
}
