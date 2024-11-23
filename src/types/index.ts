export interface Asset {
  id: number;
  street: string;
  number: string;
  postcode: string;
  city: string;
  country: string;
  plotArea: number;
  usableArea: number;
  yearlyRevenue: number;
  yearOfConstruction: number;
  yearOfRedevelopment: number;
  monumentProtection: boolean;
  assetClass: string;
  objectStatus: string;
  energyClass: string;
  walt: string;
  mainTenant: string;
}

export interface StepOneFormValues {
  assets: Asset[];
  offerName: string;
}

export interface StepTwoFormValues {
  seller: string;
  owner: string;
  salesPrice: number;
  commission: string;
  revenuesActualPerYear: number;
  revenuesTargetPerYear: number;
  usableSpace: number;
  grossFloorArea: number;
}
