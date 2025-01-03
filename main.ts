import { Input } from '@cliffy/prompt/input';

const result: string = await Input.prompt({
  message: 'which directory?',
  files: true,
  default: '/some/path',
});

console.log({ result }); // outputs `.` instead of default value
