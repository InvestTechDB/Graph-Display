import React from 'react';
import App from './App.jsx';
import renderer from 'react-test-renderer';


test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <App />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseEnter();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.createPath();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});