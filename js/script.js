// Created by: Curtis Edwards
// Created on: Sep 2020
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates area of a circle.
 */
function calculate () {
  // input
  const radius = parseInt(document.getElementById('radius').value)
  const pi = Math.PI;
  // process
  
  const area = ( pi * radius  ) *  radius

  // output
  document.getElementById('area').innerHTML = 'Area is: ' + area.toFixed(2) + ' cm²'
}
