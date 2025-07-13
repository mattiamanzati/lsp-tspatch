import { Effect } from "effect";

const program = Effect.gen(function* () {
  Effect.succeed(true)
  const a = yield* Effect.succeed(1);
  const b = yield* Effect.succeed(2);
  return a + b;
});

Effect.runPromise(program).then(console.log);
