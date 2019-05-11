function loadProfile() {
  return {
    name: 'I Kadek Adi Gunawan',
    address: 'JL. Denpasar - Gilimanuk',
    hobbies: ['mancing', 'rubik', 'catur'],
    is_married: false,
    school: {
      highSchool: 'SMAN 1 Pekutatan',
      university: ''
    },
    skills: [{
      name: 'programing',
      score: 70
    }, {
      name: 'design',
      score: 20
    }]
  }
}

exports.profile = loadProfile();