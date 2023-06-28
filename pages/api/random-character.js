import Chance from "chance";

export default function handler(request, response) {
  const chance = new Chance();

  const character = {
    gender: chance.gender(),
    prefix: chance.prefix(),
    firstName: chance.first(),
    lastName: chance.last(),
    birthday: chance.birthday(),
    street: chance.street(),
    zip: chance.zip(),
    city: chance.city(),
    state: chance.state(),
    country: chance.country(),
    local: chance.locale(),
    phone: chance.phone(),
    emailPrivate: chance.email(),
    emailCompany: chance.email(),
    company: chance.company(),
    profession: chance.profession(),
    twitter: chance.twitter(),
    facebook: chance.fbid(),
    avatar: chance.avatar({ protocol: "https", fileExtension: "jpg" }),
    geohash: chance.geohash(),
  };
  response.status(200).json(character);
}
