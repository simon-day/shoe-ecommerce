import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './Directory.scss';
import MenuItem from './MenuItem';
import { selectDirectorySections } from '../redux/directory/directorySelector';

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...sectionProps }) => (
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
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
