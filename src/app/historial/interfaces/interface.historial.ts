export interface Client {
    id: number;
    identity: number;
    date: string;
    idType: string;
    clientName: string;
  }
  
  export interface Product {
    nombreProducto: string;
    quantity: number;
  }
  
  export interface InterfaceHistorial {
    client: Client;
    products: Product[];
  }
