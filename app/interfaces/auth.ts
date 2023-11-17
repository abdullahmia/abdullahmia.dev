export interface IUser {
  id: number;
  email: string;
  name: string;
  loginDevices: {
    deviceName: string;
    ipAddress: string;
  }[];
}

export interface ILoginPayload {
  email: string;
  password: string;
}

export interface ILoginResponse {
  token: string;
  user: IUser;
}
