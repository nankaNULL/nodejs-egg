module.exports = (options, app) => {
  return async function robotMiddleware(ctx, next) {
    const source = ctx.get('user-agent') || '';
    console.log(source)
    console.log(options.ua)
    const match = options.ua.some(ua => ua.test(source));
    if ( match ) {
      ctx.status = 403;
      ctx.message = 'Go away, robot.';
    } else {
      await next();
    }
  }
}