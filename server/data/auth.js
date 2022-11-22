// password: 12345 => $2b$12$dM57gnNaUtv/RuUvdXBWYuEyd3FMTH7PRpZWCb0aeumZsYAFICCBe
let users = [
  {
    id: '1',
    username: 'bob',
    password: '$2b$12$dM57gnNaUtv/RuUvdXBWYuEyd3FMTH7PRpZWCb0aeumZsYAFICCBe',
    name: 'Bob',
    email: 'bob@gmail.com',
    url: 'https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png',
  },
];

export async function findByUsername(username) {
  return users.find((user) => user.username === username);
}

export async function createUser(user) {
  const created = { ...user, id: Date.now().toString() };
  users.push(created);
  return created.id;
}