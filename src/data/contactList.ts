import { ContactInterface } from "model/contact";
import _uniqueId from "lodash/uniqueId";

export const contactList: ContactInterface[] = [
  {
    id: _uniqueId(),
    name: "name1",
    lastname: "lastname1",
    email: "user1@hotmail.com",
    country: "AL",
    countryLabel: "Albania",
  },
  {
    id: _uniqueId(),
    name: "aida2",
    lastname: "lastname2",
    email: "user2@hotmail.com",
    country: "IT",
    countryLabel: "Albania",
  },
  {
    id: _uniqueId(),
    name: "boi3",
    lastname: "lastname3",
    email: "user3@hotmail.com",
    country: "AL",
    countryLabel: "Albania",
  },
  {
    id: _uniqueId(),
    name: "ana4",
    lastname: "lastname4",
    email: "user4@hotmail.com",
    country: "AL",
    countryLabel: "Albania",
  },
  // {
  //   id: _uniqueId(),
  //   name: "name5",
  //   lastname: "lastname5",
  //   email: "user5@hotmail.com",
  //   country: "AL",
  //   countryLabel: "Albania",
  // },
  // {
  //   id: _uniqueId(),
  //   name: "boi3",
  //   lastname: "lastname6",
  //   email: "user5@hotmail.com",
  //   country: "AL",
  //   countryLabel: "Albania",
  // },
];
