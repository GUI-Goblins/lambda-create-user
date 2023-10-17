const dynamoose = require('dynamoose');
const { v4: uuidv4 } = require('uuid');

const userSchema = new dynamoose.Schema({
  id: String,
  name: String,
  age: Number,
  race: {
    type: String,
    enum: ['human', 'elf', 'dwarf'],
  },
  class: {
    type: String,
    enum: ['fighter', 'rogue', 'sorcerer'],
  },
});

const User = dynamoose.model('midterm-users', userSchema);

exports.handler = async (event) => {
  const requestBody = JSON.parse(event.body);
  const id = uuidv4();
  const name = requestBody.name;
  const age = requestBody.age;
  const race = requestBody.race;
  const userClass = requestBody.class;

  try {
    const user = new User({
      id: id,
      name: name,
      age: age,
      race: race,
      class: userClass,
    });

    console.log('User object:', user);

    await user.save();

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'User created successfully' }),
    };
  } catch (error) {
    console.error('Error:', error);

    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error creating user' }),
    };
  }
};
