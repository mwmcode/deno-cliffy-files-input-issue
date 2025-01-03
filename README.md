```ts
import { Input } from '@cliffy/prompt/input';

const result: string = await Input.prompt({
  message: 'which directory?',
  files: true,
  default: '/some/path',
});

console.log({ result }); // `.`
```

- `deno task dev`
- press Enter
- outputs `.` instead or provided `default` value
