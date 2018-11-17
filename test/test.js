const test = require('ava');

const Script = require('..');
const { beforeEach, afterEach } = require('./helpers');

test.beforeEach(beforeEach);
test.afterEach(afterEach);

test('returns itself', t => {
  t.true(t.context.script instanceof Script);
});

test('returns correct name for hex colors', t => {
  const { script } = t.context;
  t.is(script.name('#3498db'), 'Bleu de France');
});
