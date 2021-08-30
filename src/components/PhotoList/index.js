import React, { useState } from 'react';
import Modal from '../Modal'

// props is destructured as {category}
function PhotoList({ category }) {
    const [photos] = useState([
    {
      name: 'Grocery aisle',
      category: 'commercial',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Grocery booth',
      category: 'commercial',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Building exterior',
      category: 'commercial',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Restaurant table',
      category: 'commercial',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Cafe interior',
      category: 'commercial',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Cat green eyes',
      category: 'portraits',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Green parrot',
      category: 'portraits',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Yellow macaw',
      category: 'portraits',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Pug smile',
      category: 'portraits',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Pancakes',
      category: 'food',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Burrito',
      category: 'food',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Scallop pasta',
      category: 'food',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Burger',
      category: 'food',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Fruit bowl',
      category: 'food',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Green river',
      category: 'landscape',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Docks',
      category: 'landscape',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Panoramic village by sea',
      category: 'landscape',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Domestic landscape',
      category: 'landscape',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Park bench',
      category: 'landscape',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    ])

    const currentPhotos = photos.filter((photo) => photo.category === category)

    // for Modal
    const [currentPhoto, setCurrentPhoto] = useState();
    const [isModalOpen, setIsModalOpen] = useState(false)

    const toggleModal = (image, i) => {
      setCurrentPhoto({...image, index: i});

      // setIsModalOpen(true); replaced by below. . . 
      setIsModalOpen(!isModalOpen);
    }

    return (
        <div>
            {/* if isModalOpen, return/render . . . (will break without short-circuit AND operator. currentPhoto is undefined unless an image is clicked) */}
            {/* {isModalOpen && <Modal currentPhoto={currentPhoto} />} - replaced by below...*/}
            {isModalOpen && (
              <Modal currentPhoto={currentPhoto} onClose={toggleModal} />
            )}
            <div className="flex-row">
                {currentPhotos.map((image, i) => (
                    <img
                        // .default fixed it
                        src={require(`../../assets/small/${category}/${i}.jpg`).default}
                        alt={image.name}
                        className="img-thumbnail mx-1"
                        key={image.name}
                        // envent listener for Modal
                        onClick={() => toggleModal(image, i)}
                    />
                ))}
            </div>
        </div>
    )
}

export default PhotoList;
