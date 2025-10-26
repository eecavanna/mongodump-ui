# mongodump-ui

`mongodump-ui` is a graphical user interface for MongoDB's `mongodump` and `mongorestore` programs. It's a [Tauri](https://tauri.app/)-based Desktop app for macOS, written in [TypeScript](https://www.typescriptlang.org/) and [Rust](https://tauri.app/start/prerequisites/#rust).

## Development

### Prerequisites

- You are using macOS
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

After a few seconds, the Desktop app's UI will automatically appear.

Whenever you make a change to the source code (and save it), the Desktop app's UI will automatically reload to reflect the change.

To view the JavaScript console (where `console.log(...)` messages go), right-click the Desktop app's UI and—in the menu that appears—click "Inspect Element" (just like in a web browser).

### Dependencies

We use Tauri's [Shell](https://v2.tauri.app/plugin/shell/) plugin to launch `mongodump` and `mongorestore` on the user's computer.

### References

- [Project structure](https://tauri.app/start/project-structure/)
- (Optional) If using [VS Code](https://code.visualstudio.com/), install these extensions: [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode), [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer)

### Roadmap

1. Allow user to specify path to `mongodump`
2. Allow user to choose options for `mongodump`
3. Invoke `mongodump` with chosen options and display progress
4. Allow user to specify path to `mongorestore`
5. Allow user to choose options for `mongorestore`
6. Invoke `mongorestore` with chosen options and display progress
7. Build a [distributable](https://v2.tauri.app/distribute/#building) version of the app
