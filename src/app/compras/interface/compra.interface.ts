export interface CompraInterface {
    client: {
        identity: number;
        idType: string;
        clientName: string;
      };
      compra: {
        idProduct: number;
        quantity: number;
      }[];
}
