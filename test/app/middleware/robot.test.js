const { app, mock, assert } = require('egg-mock/bootstrap');
describe('text/app/middleware/robot.test.js', () => {
  it('should block robot', () => {
    return app.httpRequest()
    .get('/')
    .set('User-Agent', 'Baiduspider')
    .expect(403);
  })
})