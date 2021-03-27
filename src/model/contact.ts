export interface ContactInterface {
  id: string;
  name: string;
  lastname: string;
  email: string;
  country: string;
}

export class Contact {
  id: string;
  name: string;
  lastname: string;
  email: string;
  country: string;

  constructor(data: ContactInterface) {
    this.id = data.id;
    this.name = data.name;
    this.lastname = data.lastname;
    this.email = data.email;
    this.country = data.country;
  }
}
