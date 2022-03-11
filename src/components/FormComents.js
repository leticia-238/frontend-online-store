import React from 'react';

class FormComents extends React.Component {
  render() {
    return (
      <>
        <label htmlFor="coment">
          <input
            name="coment"
          />
        </label>
        <label htmlFor="rate">
          <select
            name="rate"
          >
            <option />
          </select>
        </label>
      </>
    );
  }
}