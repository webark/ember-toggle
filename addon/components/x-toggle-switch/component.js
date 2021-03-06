import Component from '@ember/component';
import { computed } from "@ember/object"
import layout from './template';

export default Component.extend({
  layout,
  tagName: 'span',
  classNames: ['x-toggle-container'],
  classNameBindings: ['size', 'disabled:x-toggle-container-disabled', 'value:x-toggle-container-checked'],

  themeClass: computed('theme', function() {
    return `x-toggle-${this.get('theme') || 'default'}`;
  })
});
