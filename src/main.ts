const techStack: [string, string][][] = [
  [
    [
      '.NET Core',
      'https://cdn.jsdelivr.net/gh/vscode-icons/vscode-icons@v10.0.0/icons/file_type_sln.svg',
    ],
    [
      'C#',
      'https://cdn.jsdelivr.net/gh/vscode-icons/vscode-icons@v10.0.0/icons/file_type_csharp.svg',
    ],
    [
      'WPF',
      'https://cdn.jsdelivr.net/gh/vscode-icons/vscode-icons@v10.0.0/icons/file_type_xml.svg',
    ],
    [
      'Node.js',
      'https://cdn.jsdelivr.net/gh/vscode-icons/vscode-icons@v10.0.0/icons/file_type_node.svg',
    ],
    [
      'TypeScript',
      'https://cdn.jsdelivr.net/gh/vscode-icons/vscode-icons@v10.0.0/icons/file_type_typescript.svg',
    ],
    [
      'Vue',
      'https://cdn.jsdelivr.net/gh/vscode-icons/vscode-icons@v10.0.0/icons/file_type_vue.svg',
    ],
    [
      'Dart',
      'https://cdn.jsdelivr.net/gh/vscode-icons/vscode-icons@v10.0.0/icons/file_type_dartlang.svg',
    ],
    [
      'Flutter',
      'https://cdn.jsdelivr.net/gh/vscode-icons/vscode-icons@v10.0.0/icons/file_type_flutter.svg',
    ],
  ],
  [
    [
      'Webpack',
      'https://cdn.jsdelivr.net/gh/vscode-icons/vscode-icons@v10.0.0/icons/file_type_webpack.svg',
    ],
    [
      'Rollup',
      'https://cdn.jsdelivr.net/gh/vscode-icons/vscode-icons@v10.0.0/icons/file_type_rollup.svg',
    ],
    [
      'Gulp',
      'https://cdn.jsdelivr.net/gh/vscode-icons/vscode-icons@v10.0.0/icons/file_type_gulp.svg',
    ],
    [
      'Babel',
      'https://cdn.jsdelivr.net/gh/vscode-icons/vscode-icons@v10.0.0/icons/file_type_babel2.svg',
    ],
    [
      'Sass',
      'https://cdn.jsdelivr.net/gh/vscode-icons/vscode-icons@v10.0.0/icons/file_type_sass.svg',
    ],
    [
      'Docker',
      'https://cdn.jsdelivr.net/gh/vscode-icons/vscode-icons@v10.0.0/icons/file_type_docker.svg',
    ],
    [
      'Test',
      'https://cdn.jsdelivr.net/gh/vscode-icons/vscode-icons@v10.0.0/icons/folder_type_test.svg',
    ],
    [
      'CI',
      'https://cdn.jsdelivr.net/gh/vscode-icons/vscode-icons@v10.0.0/icons/folder_type_tools.svg',
    ],
  ],
];

const items = techStack
  .map(item =>
    item
      .map(
        ([name, img]) =>
          `<li class="marker_item"><img class="icon marker_icon" src="${img}" />${name}</li>`,
      )
      .join('\n'),
  )
  .map(item => `<ul class="marker">\n${item}\n</ul>`)
  .join('\n');

const list = document.querySelector('#tech-stack');
if (list) {
  list.innerHTML = `\n${items}\n`;
  console.log(list.innerHTML);
}
