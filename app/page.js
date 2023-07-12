import React from './Header';
import Row from './Movie_row';
import Form from './Form_add';
import Next from './Footer';
export default function Page() {
  const people = [{
  id: 0,
  name: "Dear Zindagi",
  discripton:"Kaira is a budding cinematographer in search of a perfect life. Her encounter with Jug, an unconventional thinker, helps her gain a new perspective on life. She discovers that happiness is all about finding comfort in life's imperfections"
}, {
  id: 1, // Used in JSX as a key
  name: 'Brave',
  profession: 'chemist',
  accomplishment: 'discovery of Arctic ozone hole',
  imageId: 'mynHUSa'
}, {
  id: 2, // Used in JSX as a key
  name: 'Mohammad Abdus Salam',
  profession: 'physicist',
  accomplishment: 'electromagnetism theory',
  imageId: 'bE7W1ji'
}, {
  id: 3, // Used in JSX as a key
  name: 'Percy Lavon Julian',
  profession: 'chemist',
  accomplishment: 'pioneering cortisone drugs, steroids and birth control pills',
  imageId: 'IOjWm71'
}, {
  id: 4, // Used in JSX as a key
  name: 'Subrahmanyan Chandrasekhar',
  profession: 'astrophysicist',
  accomplishment: 'white dwarf star mass calculations',
  imageId: 'lrWQx8l'
}];

  return (
    <>
      <React/>
      <Row/> 
      <Row/>
      <Form/> 
      <Next/>
    </>
    
  )
}


