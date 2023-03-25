import { BaseService } from "./BaseService";

export class ExchangeRateService extends BaseService {
  static serviceHost = "https://v6.exchangerate-api.com";

  static async getCurrencyData(currency = "UAH") {
    return this.request(`/v6/36921f13e8cabe1887bfe987/latest/${currency}`);
  }
}
