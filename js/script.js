// Copyright (c) 2022 Maria Goemans All rights reserved
//
// Created by: Maria G
// Created on: April 11, 2022
// This file contains the JS functions for index.html

function inputSent() {
  let baseHeight = parseFloat(document.getElementById("height-base").value);
  let baseBase = parseFloat(document.getElementById("base-length").value);
  let pyramidHeight = parseFloat(document.getElementById("height-pyramid").value);
  let volume = baseHeight * baseBase * pyramidHeight / 6;
  document.getElementById("results").innerHTML = "The volume of the triangular prism is " + volume.toFixed(2) + "cm<sup>3</sup>."
}
