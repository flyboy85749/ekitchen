import React from 'react'

function Home() {
  const people = [
    {
      name: 'Calvin Hawkins',
      comment: 'Bill\'s cooking is awesome!',
      image:
        'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Kristen Ramos',
      comment: 'Bill makes some excellent Spinach Quiche',
      image:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Ted Fox',
      comment: 'I simply adore everything that Bill makes!',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  ]
  return (
    <>
    <div className="font-normal mx-80 mb-7">Welcome to the Ekitchen website. This site is a work in progress, 
    so please be patient. Once completed, you will be able to many very cool things here; from placing orders for food, reading about the latest cooking tips and tricks, to maybe even sharing with friends.</div>
    <h3>Testimonials</h3>
    <ul className="divide-y divide-gray-200">
    {people.map((person) => (
      <li key={person.comment} className="py-4 flex">
        <img className="h-10 w-10 rounded-full" src={person.image} alt="" />
        <div className="ml-3">
          <p className="text-sm font-medium text-gray-900">{person.name}</p>
          <p className="text-sm text-gray-500">{person.comment}</p>
        </div>
      </li>
    ))}
  </ul>
  </>
  )
}

export default Home