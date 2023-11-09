export interface ConnectionType {
  connectionType: number;
}

export interface TestSpeedObj {
  pingSpeed: string;
  downSpeed: string;
  upSpeed: string;
}

export interface TicketType {
  description: string;
  content: string;
  connectionType: number;
  testSpeedObj: TestSpeedObj
  setDescription: Function;
  setContent: Function;
  setPage: Function;
  page: number;
}
