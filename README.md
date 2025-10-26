# mongodump-ui

`mongodump-ui` is a graphical user interface for MongoDB's `mongodump` and `mongorestore` programs. It's a [Tauri](https://tauri.app/)-based Desktop app written in [TypeScript](https://www.typescriptlang.org/).

## Development

### Prerequisites

- Install [Xcode](https://tauri.app/start/prerequisites/#macos)
- Install [Rust](https://tauri.app/start/prerequisites/#rust)
- Install [Node.js](https://tauri.app/start/prerequisites/#nodejs)

### Quick start

```shell
git clone https://github.com/eecavanna/mongodump-ui.git
cd mongodump-ui
npm install
npm run tauri dev
```

After a few seconds, the Desktop app will automatically appear.

### References

- [Project structure](https://tauri.app/start/project-structure/)
- (Optional) If using [VS Code](https://code.visualstudio.com/), install these extensions: [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode), [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer)
