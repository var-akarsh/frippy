// OrderDTO.ts

export interface OrderDTO {
    id: number;
    productId: number;
    name: string;
    contactNumber: number;
    pincode: number;
    email: string | null;
    addressLine1: string;
    addressLine2: string;
    colourName: string;
    colourHexCode: string;
    status: string | null;
  }
  