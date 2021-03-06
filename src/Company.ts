import { faker } from "@faker-js/faker";

export class Company {
  company: string;
  catchPhrase: string;

  location: {
    lat: number;
    long: number;
  };

  constructor() {
    this.company = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      long: parseFloat(faker.address.longitude()),
    };
  }
}
