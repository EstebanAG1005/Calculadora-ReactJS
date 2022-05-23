import renderer from 'react-test-renderer';
import Calculadora from '../Calculadora'
import React from 'react';


it('Si el display de la calculadora realiza un render correcto', () => {
    const tree = renderer
      .create(<Calculadora value="28"></Calculadora>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
