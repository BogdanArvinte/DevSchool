import { Selector } from 'testcafe';

fixture('Testing Google')
  .page('https://google.com');

  test('Google', async function(t) {
    await t
      .expect(Selector('body').id).eql('gsr');
  });