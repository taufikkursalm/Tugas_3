// Membuat object
const req = {
  body: {
    name: "taufik",
    age: 20,
    major: "Informatics",
  },
};

/**
 * Melakukan destructing object.
 * Destructing object berdasarkan key.
 */
const { name, age, major } = req.body;

console.log(name, age, major);
