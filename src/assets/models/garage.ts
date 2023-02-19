import { Location } from './location';

export interface GarageResponse {
  MigdalResponseCode: null;
  Status: 0;
  Messages: null;
  DevMessage: null;
  Data: { GaragesList: Garage[] };
}

export interface Garage {
  Name: string;
  Type?: string;
  Address?: string;
  City?: string;
  PhoneNumber?: string;
  FaxNumber?: string;
  Area?: string;
  IsFix?: boolean;
  AdditionalDesc?: string;
  VehicleModel?: string;
  Location?: Location;
}
