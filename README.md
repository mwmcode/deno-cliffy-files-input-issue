### Issue 1 
- Uncaught (in promise) NotFound: No such file or directory (os error 2)


https://github.com/user-attachments/assets/5f7d440a-3d0a-4a34-9d18-2b8a75c88d94



**steps**
- `deno task dev`
- type 'some/wrong/path', throws
```sh
which directory? (/some/path) › some/error: Uncaught (in promise) NotFound: No such file or directory (os error 2): readdir 'some'
    for await (const item of Deno.readDir(path)) {
                     ^
    at async Object.[Symbol.asyncIterator] (ext:deno_fs/30_fs.js:218:19)
    at async readDir (https://jsr.io/@cliffy/internal/1.0.0-rc.7/runtime/read_dir.ts:14:22)
    at async listDir (https://jsr.io/@cliffy/prompt/1.0.0-rc.7/_generic_suggestions.ts:571:22)
    at async Input.getFileSuggestions (https://jsr.io/@cliffy/prompt/1.0.0-rc.7/_generic_suggestions.ts:237:12)
    at async Input.getSuggestions (https://jsr.io/@cliffy/prompt/1.0.0-rc.7/_generic_suggestions.ts:245:10)
    at async Input.match (https://jsr.io/@cliffy/prompt/1.0.0-rc.7/_generic_suggestions.ts:189:24)
    at async Input.render (https://jsr.io/@cliffy/prompt/1.0.0-rc.7/_generic_suggestions.ts:184:5)
    at async Input.#execute (https://jsr.io/@cliffy/prompt/1.0.0-rc.7/_generic_prompt.ts:188:5)
    at async Input.prompt (https://jsr.io/@cliffy/prompt/1.0.0-rc.7/_generic_prompt.ts:170:14)
    at async file:///Users/mch/Developer/issues/deno-cliffy-files-input-issue/main.ts:3:24
Watcher Process failed. Restarting on file change...
```



### Issue 2
ignore default value when `files: true`

```sh
which directory? "PRESS ENTER ↩️"
# returns `.` instead of provided default value 
```
<img width="736" alt="Screenshot 2025-01-05 at 4 18 52 pm" src="https://github.com/user-attachments/assets/ee537758-f746-43f5-b59b-36858c893c67" />


-------
### CODE
 
```ts
import { Input } from '@cliffy/prompt/input';

const result: string = await Input.prompt({
  message: 'which directory?',
  files: true,
  default: '/some/path',
});

console.log({ result }); // `.` or throws error
```
