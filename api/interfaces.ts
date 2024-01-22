export interface IMeter {
  id: number;
  address: string;
  isEnabled: boolean;
  usages: number;
}

export interface IMeterInput {
  address: string;
  isEnabled: boolean;
}

export interface IMeterShort {
  id: number;
  address: string;
}
