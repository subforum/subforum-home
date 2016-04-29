import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('workshop-boxes-1', 'Integration | Component | workshop boxes 1', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{workshop-boxes-1}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#workshop-boxes-1}}
      template block text
    {{/workshop-boxes-1}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
