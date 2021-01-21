// middleware pattern (chain of responsibility)
const exec = (ctx, ...middlewares) => {
  const run = (current) => {
    middlewares
      && current < middlewares.length
      && middlewares[current](ctx, () => run(current + 1));
  };
  run(0);
};
