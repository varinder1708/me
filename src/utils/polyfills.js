const JQueryWrapper = function JQueryWrapper(el) {
  this.el = el;
  return this;
};

JQueryWrapper.prototype.remove = function remove() {
  const element = document.querySelectorAll(this.el);
  if (element.length && element.parentNode) {
    element.parentNode.removeChild(element);
  }
};

const jQuery$ = function jQuery(el) {
  const instance = new JQueryWrapper(el);
  return instance;
};

export const jQueryFn = function jQueryFn() {
  return {
    $: jQuery$,
    jQuery: JQueryWrapper,
  };
};
export default { jQueryFn };
