import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import PhotoList from '../PhotoList';

const Gallery = ({ currentCategory }) => {
    // const currentCategory = {
    //     name: "commercial",
    //     description: "photos of grocery stores, food trucks, and other commercial projects"
    // }

    const { name, description } = currentCategory;

    return (
        <section>
            <h1 data-testid="h1tag">{capitalizeFirstLetter(name)}</h1>
            <p>{description}</p>
            <PhotoList category={currentCategory.name}/>
        </section>
    );
}

export default Gallery;