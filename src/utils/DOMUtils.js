/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

export function updateTag(tagName, keyName, keyValue, attrName, attrValue) {
  const node = document.head.querySelector(
    `${tagName}[${keyName}="${keyValue}"]`,
  );
  if (node && node.getAttribute(attrName) === attrValue) return;

  // Remove and create a new tag in order to make it work with bookmarks in Safari
  if (node) {
    node.parentNode.removeChild(node);
  }
  if (typeof attrValue === 'string') {
    const nextNode = document.createElement(tagName);
    nextNode.setAttribute(keyName, keyValue);
    nextNode.setAttribute(attrName, attrValue);
    document.head.appendChild(nextNode);
  }
}

export function updateMeta(name, content) {
  updateTag('meta', 'name', name, 'content', content);
}

export function updateCustomMeta(property, content) {
  updateTag('meta', 'property', property, 'content', content);
}

export function updateLink(rel, href) {
  updateTag('link', 'rel', rel, 'href', href);
}
export function getPosition(element) {
  let domElement = element;
  let xPosition = 0;
  let yPosition = 0;
  let coordinates;

  if (
    domElement &&
    domElement.getBoundingClientRect &&
    domElement.getBoundingClientRect().x
  ) {
    coordinates = domElement.getBoundingClientRect();
    xPosition = coordinates.x + window.scrollX;
    yPosition = coordinates.y + window.scrollY;
  } else {
    while (domElement) {
      xPosition +=
        domElement.offsetLeft - domElement.scrollLeft + domElement.clientLeft;
      yPosition +=
        domElement.offsetTop - domElement.scrollTop + domElement.clientTop;
      domElement = domElement.offsetParent;
    }
  }

  return { x: xPosition, y: yPosition };
}
