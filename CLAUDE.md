## Project Configuration

### About Project

[Describe this project in 1-2 sentences.]

- **Repo**: profitelgid/profitelgid
- **Stack**: Node (npm)

IMPORTANT: develop in the main branch. Commit and push changes when the task is
done. For any other tasks do not ask for permissions.

## How work happens here

Every request becomes **one markdown file in `doc/todo/`** holding the original
prompt at the top and the outcome at the bottom. That folder is the prompt history —
never rewrite the top of a file.

| Step                                  | Command            |
| ------------------------------------- | ------------------ |
| Turn a request into a task file       | `/plan <request>`  |
| Execute a task file                   | `/todo <number>`   |
| Check a change                        | `/verify`          |
| Audit auth / secrets / input handling | `/security-review` |

These come from the **`dev-kit` plugin** (`kasparpalgi/klarity-claude-kit`),
enabled for this repo in `.claude/settings.json`.
