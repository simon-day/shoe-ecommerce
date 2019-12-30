import React, { Component } from 'react';
import './Directory.scss';
import MenuItem from './MenuItem';

class Directory extends Component {
  state = {
    sections: [
      {
        title: 'casual',
        imageUrl: 'https://i.ibb.co/gTM333D/casual.jpg',
        id: 1,
        linkUrl: 'casual'
      },
      {
        title: 'smart',
        imageUrl: 'https://i.ibb.co/xH5Vjz9/Smart-Heels.jpg',
        id: 2,
        linkUrl: 'smart'
      },
      {
        title: 'sports',
        imageUrl: 'https://i.ibb.co/BT5zVJW/sneakers.jpg',
        id: 3,
        linkUrl: 'sports'
      },
      {
        title: 'womens',
        imageUrl: 'https://i.ibb.co/xqR0Rdw/womens-shoes.jpg',
        size: 'large',
        id: 4,
        linkUrl: 'womens'
      },
      {
        title: 'mens',
        imageUrl: 'https://i.ibb.co/NtZ1CDH/mens-shoes.jpg',
        size: 'large',
        id: 5,
        linkUrl: 'mens'
      }
    ]
  };

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...sectionProps }) => (
          <MenuItem
            key={id}
            {...sectionProps}
            // key={section.id}
            // title={section.title.toUpperCase()}
            // imageUrl={section.imageUrl}
            // size={section.size}
          />
        ))}
      </div>
    );
  }
}

export default Directory;
